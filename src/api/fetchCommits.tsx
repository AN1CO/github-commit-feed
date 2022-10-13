const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common['Authorization'] =
	process.env.REACT_APP_API_TOKEN;

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

export const fetchCommits = async (user: string, repo: string) => {
	// example: m3db/m3
	try {
		const res = await axios.get(`/repos/${user}/${repo}/commits`);
		return res.data;
	} catch (err: any) {
		throw err.response.data;
	}
};

export default fetchCommits;
