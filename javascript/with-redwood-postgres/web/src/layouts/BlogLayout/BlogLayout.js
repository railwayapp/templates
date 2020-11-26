import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.posts()}>Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="blog">{children}</main>
    </>
  )
}

export default BlogLayout
