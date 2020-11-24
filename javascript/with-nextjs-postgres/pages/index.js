import Head from "next/head";
import useSWR from "swr";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { data, error } = useSWR("/api/time");

  if (error) return <div>failed to load</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Railway NextJS Postgres</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.description}>Current time in Postgres DB is</h1>

        {data == null && <div>loading...</div>}
        {data != null && <code className={styles.code}>{data.time}</code>}

        <p>
          Edit
          <code className={styles.code}>pages/api/time.js</code> to change the
          SQL query being run
        </p>
      </main>
    </div>
  );
};

export default Home;
