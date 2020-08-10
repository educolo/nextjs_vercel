import Link from 'next/link'

const Nav = () => {
  return (
    <div className="container">
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      |
      <Link href="/about">
        <a>About us</a>
      </Link>
      |
      <Link href="/user">
        <a>Users</a>
      </Link>
      <style jsx>{`
        .container {
          margin: 50px;
          font-size: 30px;
        }
        a {
          margin: 7px;
          text-decoration: none;
          color: #0070f3;
        }
      `}</style>
    </div>
  )
}

export default Nav
