import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const GoHome = dynamic(() => import('components/goHome'), {
  loading: () => <p>Loading...</p>,
})

const Users = ({ users = [] }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map(({ id, username }) => (
        <div key={id}>
          ID:{' '}
          <Link href="/user/[id]" as={`/user/${id}`}>
            <a>{id}</a>
          </Link>
          <p>Username: {username}</p>
        </div>
      ))}
      <GoHome />
      <style jsx>{`
        div {
          margin: 30px;
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  )
}

/* User.getInitialProps = async (ctx) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();
	return { users }
}
 */

/* export async function getServerSideProps() { */
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return {
    props: {
      users,
    },
  }
}

export default Users
