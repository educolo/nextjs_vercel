import Head from 'next/head'

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Campus PSI</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />

			<style jsx global>{`
			html,
			body {
				padding: 0;
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
				Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

			.goBack {
				margin-top: 100px;
			}

			* {
				box-sizing: border-box;
			}
			`}</style>
		</>
	);
}

export default App