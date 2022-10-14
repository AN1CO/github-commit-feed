import { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchCommits: FunctionComponent = () => {
	const history = useHistory();
	const [userSearchValue, setUserSearchValue] = useState('');
	const [repoSearchValue, setRepoSearchValue] = useState('');

	const isValid = () => {
		return (
			userSearchValue.trim().length !== 0 && repoSearchValue.trim().length !== 0
		);
	};

	const searchCommits = () => {
		history.push(`${userSearchValue}/${repoSearchValue}`);
	};

	return (
		<>
			<div className='container flex flex-col items-center'>
				<h3 className='text-xl p-2'>Search Commits</h3>
				<form>
					<label htmlFor='user'>User: </label>
					<input
						className='border-2 m-2 p-2 rounded-md'
						name='use'
						id='use'
						type='text'
						aria-label='search github user'
						placeholder='Search User'
						onChange={(e) => {
							setUserSearchValue(e.target.value);
						}}
						required
					></input>
					<label htmlFor='repo'>Repo: </label>

					<input
						className='border-2 m-2 p-2 rounded-md'
						name='repo'
						id='repo'
						type='text'
						aria-label='search github repo'
						placeholder='Search Repo'
						onChange={(e) => {
							setRepoSearchValue(e.target.value);
						}}
						required
					></input>
					<button
						className='border-2 m-2 p-2 rounded-md text-white bg-blue-500 active:bg-blue-600 hover:bg-blue-400 disabled:bg-slate-300 disabled:border-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed'
						type='submit'
						disabled={!isValid()}
						onClick={searchCommits}
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default SearchCommits;
