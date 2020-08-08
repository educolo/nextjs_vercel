import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'

const GoHome = dynamic(()=> import('../../components/goHome'),{ loading: () => <p>Loading...</p> });

const User = ({ users }) => {
	return (
		<div>
			<h1>Users</h1>
			<p>
				{JSON.stringify(users,null, 4)}
			</p>
			<GoHome />
		</div>
	);
}

/* User.getInitialProps = async (ctx) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();
	return { users }
}
 */

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();
	return({props: {
		users
	}});
}

export default User;