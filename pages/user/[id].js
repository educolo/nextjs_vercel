import GoHome from 'components/goHome'
import { useRouter } from 'next/router'

const User = ({ data }) => {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <>
      {data ? (
        <div>
          <div>
            <h1>{data?.name}</h1>
            <p>Username: {data?.username}</p>
            <p>Phone: {data?.phone}</p>
          </div>
          <button onClick={goBack}>Go Back!</button>
        </div>
      ) : (
        <h1>No data from user</h1>
      )}

      <style jsx>{`
        button : {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  const paths = users.map((user) => `/user/${user.id}`)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const id = params?.id

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  const data =
    users.filter((user) => user.id.toString() === id.toString()).length > 0
      ? users.filter((user) => user.id.toString() === id.toString())[0]
      : null

  return {
    props: {
      data,
    },
  }
}

export default User
