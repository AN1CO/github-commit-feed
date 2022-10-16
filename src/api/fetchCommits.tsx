import axios, { AxiosInstance } from 'axios';

export interface CommitProps {
	author: {
		name: string;
		email: string;
		date: string;
	};
	message: string;
	html_url: string;
}

export interface OriginalCommitDataProps {
	commit: CommitProps;
}

const instance: AxiosInstance = axios.create({
	baseURL: 'https://api.github.com',
	headers: { Authorization: process.env.REACT_APP_API_TOKEN },
});

export const fetchCommits = async (location: string) => {
	try {
		const res = await instance.get(`/repos${location}/commits`);
		return res.data;
	} catch (err: any) {
		throw err.response.data;
	}
};

export default fetchCommits;
