import React, { FunctionComponent, useEffect, useState } from 'react';
import {
	fetchCommits,
	CommitProps,
	OriginalCommitDataProps,
} from './api/GetCommits';

const App: FunctionComponent = () => {
	const [allCommitData, setAllCommitData] = useState<CommitProps[]>([]);
	useEffect(() => {
		fetchCommits().then((res) => {
			console.log(res);
			res.map((item: OriginalCommitDataProps) => {
				setAllCommitData((prev) => [...prev, item.commit]);
			});
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
				{allCommitData.length > 0 ? (
					allCommitData.map((item, index) => (
						<div key={index}>
							<p>{item.author.date}</p>
							<a href={item.url}>{item.message}</a>
							<a href={`mailto:${item.author.email}`}>{item.author.name}</a>
						</div>
					))
				) : (
					<p>fetching feed</p>
				)}
			</body>
		</div>
	);
};

export default App;
