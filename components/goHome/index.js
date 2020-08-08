import Link from 'next/link'

const GoHome = () => {
	return <div className="goBack">
	<Link href="/">
		<a>Go Home</a>
	</Link>
	</div>
}

export default GoHome;