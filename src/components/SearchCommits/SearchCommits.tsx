import React, { FunctionComponent, useEffect, useState } from 'react';
import {
	fetchCommits,
	CommitProps,
	OriginalCommitDataProps,
} from '../../api/fetchCommits';

const SearchCommits: FunctionComponent = () => {
	const [userSearchValue, setUserSearchValue] = useState('');
	const [repoSearchValue, setRepoSearchValue] = useState('');
	const [disableSubmit, setDisableSubmit] = useState(true);

	useEffect(() => {
		// return () => {
		// 	second;
		// };
	}, []);

	const handleSubmit = () => {};

	return (
		<>
			<div>
				<h2>Search Commits</h2>
				<form>
					<label htmlFor='user'>User: </label>
					<input
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
					<button type='submit' disabled={disableSubmit}>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default SearchCommits;
