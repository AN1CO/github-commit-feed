export default {
	get: jest.fn().mockResolvedValue({
		data: {
			html_url: 'https://url.com',
			name: 'Franken Fruter',
			email: 'myemail@email.com',
			message: 'this is a message',
			date: 'Oct 30, 1892',
		},
	}),
};
