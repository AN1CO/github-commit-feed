import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import DisplayCommits from './DisplayCommits';
import axiosMock from 'axios';

describe('Display Commits', () => {
	test('renders initial list of 5 commits', () => {
		render(<DisplayCommits />);
		const element = screen.getByTestId(/commit-element/i);
		expect(element).toBeInTheDocument();
	});
	test('clicking Load More button loads more commits', () => {
		render(<DisplayCommits />);
		// const linkElement = screen.getByText(/learn react/i);
		// expect(linkElement).toBeInTheDocument();
	});
	test('when max number of commits are displayed, Load More button disappears', () => {
		render(<DisplayCommits />);
		// const linkElement = screen.getByText(/learn react/i);
		// expect(linkElement).toBeInTheDocument();
	});
});
