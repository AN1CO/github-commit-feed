import { FunctionComponent, useEffect, useState } from 'react';
import {
	fetchCommits,
	CommitProps,
	OriginalCommitDataProps,
} from '../../api/fetchCommits';
import { useLocation, useHistory } from 'react-router-dom';

/**
 * TODO: need to update the typing from 'any'
 * to a typing that accepts the History type
 * thats being passed in Route render
 */
const DisplayCommits: FunctionComponent<any> = () => {
	const location = useLocation();
	const history = useHistory();
	const [allCommitData, setAllCommitData] = useState<CommitProps[]>([]);
	const [visibleCommits, setVisibleCommits] = useState(5);
	const [title, setTitle] = useState('');
	const [apiError, setApiError] = useState(false);

	const showMoreCommits = () => {
		setVisibleCommits((prevValue) => prevValue + 5);
	};

	const handleBackToSearch = () => {
		history.push('/');
		//TODO: find an less hacky solution to this
		window.location.reload();
	};

	useEffect(() => {
		fetchCommits(location.pathname)
			.then((res) => {
				res.map((item: OriginalCommitDataProps) => {
					setAllCommitData((prev) => [...prev, item.commit]);
				});
			})
			.catch((err) => {
				if (err) {
					setApiError(!apiError);
				}
			});
		setTitle(location.pathname.substring(1));
	}, [location]);

	return (
		<div className='p-2'>
			<div className='container flex flex-col items-center'>
				<h3 className='text-xl p-2'>Showing results for {title}</h3>
				<button
					onClick={handleBackToSearch}
					className='rounded-md p-2 m-4 underline text-blue-500'
				>
					Back to Search
				</button>
				{apiError ? (
					<p>No commits found.</p>
				) : allCommitData.length > 0 ? (
					allCommitData.slice(0, visibleCommits).map((item, index) => (
						// TODO: turn this into a component too
						<div
							className='rounded-md border p-2 m-2 flex flex-row w-5/6 justify-between'
							key={index}
						>
							{/* TODO: format date to be legible */}
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
					<p>fetching feed...</p>
				)}
				{allCommitData.length === visibleCommits ||
				allCommitData.length === 0 ? null : (
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

export default DisplayCommits;
