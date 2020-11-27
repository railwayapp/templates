import { Link, routes } from '@redwoodjs/router'

const ContactPage = () => {
  return (
    <>
      <h1>ContactPage</h1>
      <p>
        Find me in <code>./web/src/pages/ContactPage/ContactPage.js</code>
      </p>
      <p>
        My default route is named <code>contact</code>, link to me with `
        <Link to={routes.contact()}>Contact</Link>`
      </p>
    </>
  )
}

export default ContactPage
