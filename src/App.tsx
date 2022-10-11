import React, { FunctionComponent, useEffect, useState } from 'react';
import {
	fetchCommits,
	CommitProps,
	OriginalCommitDataProps,
} from './api/GetCommits';

const App: FunctionComponent = () => {
	const [allCommitData, setAllCommitData] = useState<CommitProps[]>([]);
	const [visibleCommits, setVisibleCommits] = useState(5);

	const showMoreCommits = () => {
		setVisibleCommits((prevValue) => prevValue + 5);
	};

	useEffect(() => {
		fetchCommits().then((res) => {
			console.log(res);
			res.map((item: OriginalCommitDataProps) => {
				setAllCommitData((prev) => [...prev, item.commit]);
			});
		});
	}, []);

	return (
		<div className='p-2'>
			<header className='p-2'>
				<h1 className='text-3xl font-bold underline'>Github Commit Feed</h1>
			</header>
			<div className='container'>
				{allCommitData.length > 0 ? (
					allCommitData.slice(0, visibleCommits).map((item, index) => (
						<div className='p-2' key={index}>
							<p className='text-sm'>{item.author.date}</p>
							<a
								className='text-sm text-ellipsis hover:underline'
								href={item.html_url}
								rel='noreferrer'
								target='_blank'
							>
								{item.message}
							</a>
							<a
								className='text-sm hover:underline'
								href={`mailto:${item.author.email}`}
							>
								{item.author.name}
							</a>
						</div>
					))
				) : (
					<p>fetching feed</p>
				)}
				{allCommitData.length === visibleCommits ? null : (
					<button
						onClick={showMoreCommits}
						className='rounded-lg p-2 m-4 bg-blue-500 active:bg-blue-600 hover:bg-blue-400'
					>
						Load More
					</button>
				)}
			</div>
		</div>
	);
};

export default App;
