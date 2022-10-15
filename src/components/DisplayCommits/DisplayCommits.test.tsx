import React from 'react';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';
import DisplayCommits from '../DisplayCommits/DisplayCommits';

//TODO: need to figure out how to make axios call mocks

const testData = [
	{
		html_url: 'https://url.com',
		name: 'Franken Fruter',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
	{
		html_url: 'https://url.com',
		name: 'Franken Fruter',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
	{
		html_url: 'https://url.com',
		name: 'Franken Fruter',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
	{
		html_url: 'https://url.com',
		name: 'Franken Fruter',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
	{
		html_url: 'https://url.com',
		name: 'Franken Fruter',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
	{
		html_url: 'https://url.com',
		name: 'Dracula',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
	{
		html_url: 'https://url.com',
		name: 'Franken Fruter',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
	{
		html_url: 'https://url.com',
		name: 'Franken Fruter',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
	{
		html_url: 'https://url.com',
		name: 'Franken Fruter',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
	{
		html_url: 'https://url.com',
		name: 'Franken Fruter',
		email: 'myemail@email.com',
		message: 'this is a message',
		date: 'Oct 30, 1892',
	},
];

describe('Display Commits', () => {
	test('renders initial list of 5 commits', async () => {
		render(<DisplayCommits />);
		const element = screen.getByTestId(/commit-element/i);
		expect(element).toBeInTheDocument();
	});
	test('clicking Load More button loads more commits', () => {
		render(<DisplayCommits />);
	});
	test('when max number of commits are displayed, Load More button disappears', () => {
		render(<DisplayCommits />);
	});
	test('when there is no commits to display, have fallback text', () => {
		render(<DisplayCommits />);
	});
});
