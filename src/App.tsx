import React, { FunctionComponent, useEffect } from 'react';
import fetchCommits from './api/GetCommits';

const App: FunctionComponent = () => {
	useEffect(() => {
		fetchCommits().then((res) => {
			console.log(res);
		});

		// return () => {
		// 	second;
		// };
	}, []);

	return (
		<div className=''>
			<header className=''>
				<h1 className='text-3xl font-bold underline'>Github Commit Feed</h1>
			</header>
			<body className='container'>
				<p>feed stuff</p>
			</body>
		</div>
	);
};

export default App;
