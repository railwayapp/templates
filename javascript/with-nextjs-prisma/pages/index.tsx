import Head from "next/head";
import { format } from "path";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import styles from "../styles/Home.module.css";

interface Todo {
  id: string;
  created: string;
  text: string;
  completed: boolean;
}

const todoPath = "/api/todos";

const useTodos = () => useSWR<Todo[]>(todoPath);

const createTodo = async (text: string) => {
  mutate(
    todoPath,
    todos => [{ text, completed: false, id: "new-todo" }, ...todos],
    false,
  );
  await fetch(todoPath, {
    method: "POST",
    body: JSON.stringify({ text }),
  });

  mutate(todoPath);
};

const toggleTodo = async (todo: Todo) => {
  mutate(
    todoPath,
    todos =>
      todos.map(t =>
        t.id === todo.id ? { ...todo, completed: !t.completed } : t,
      ),
    false,
  );
  await fetch(`${todoPath}?todoId=${todo.id}`, {
    method: "PUT",
    body: JSON.stringify({ completed: !todo.completed }),
  });
  mutate(todoPath);
};

const deleteTodo = async (id: string) => {
  mutate(todoPath, todos => todos.filter(t => t.id !== id), false);
  await fetch(`${todoPath}?todoId=${id}`, { method: "DELETE" });
  mutate(todoPath);
};

const TodoList = () => {
  const { data: todos, error } = useTodos();

  if (error != null) return <div>Error loading todos...</div>;
  if (todos == null) return <div>Loading...</div>;

  return (
    <ul className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
};

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => (
  <li className={styles.todo}>
    <label
      className={`${styles.label} ${todo.completed ? styles.checked : ""}`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        className={`${styles.checkbox}`}
        onChange={() => toggleTodo(todo)}
      />
      {todo.text}
    </label>

    <button className={styles.deleteButton} onClick={() => deleteTodo(todo.id)}>
      X
    </button>
  </li>
);

const AddTodoInput = () => {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        createTodo(text);
        setText("");
      }}
      className={styles.addTodo}
    >
      <input
        className={styles.input}
        placeholder="Buy some milk"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className={styles.addButton}>Add</button>
    </form>
  );
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Railway NextJS Prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Todos</h1>
      </header>

      <main className={styles.main}>
        <AddTodoInput />

        <TodoList />
      </main>
    </div>
  );
};

export default Home;
