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
				<h1 className='text-3xl font-bold'>Github Commit Feed</h1>
			</header>
			<div className='container flex flex-col items-center'>
				{/* TODO: make the repo source dynamic,
				add a search repo function to reload other repos */}
				<h3 className='text-xl p-2'>Showing results for m3db/m3</h3>
				{allCommitData.length > 0 ? (
					allCommitData.slice(0, visibleCommits).map((item, index) => (
						<div
							className='rounded-md border p-2 m-2 flex flex-row w-5/6 justify-between'
							key={index}
						>
							{/* TODO: formate date to be legible */}
							<p className='text-sm mr-4'>
								{item.author.date.toLocaleString()}
							</p>
							<a
								className='text-sm truncate hover:underline'
								href={item.html_url}
								rel='noreferrer'
								target='_blank'
							>
								{item.message}
							</a>
							<a
								className='text-sm hover:underline ml-4'
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
						className='rounded-md p-2 m-4 text-white bg-blue-500 active:bg-blue-600 hover:bg-blue-400'
					>
						Load More
					</button>
				)}
			</div>
		</div>
	);
};

export default App;
