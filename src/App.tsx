import React, { FunctionComponent, useEffect, useState } from 'react';
import { fetchCommits, CommitProps } from './api/GetCommits';

const App: FunctionComponent = () => {
	const [allCommitData, setAllCommitData] = useState<CommitProps[]>([]);
	useEffect(() => {
		fetchCommits().then((res) => {
			console.log(res);
			res.map((item: CommitProps) => {});
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
