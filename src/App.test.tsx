import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Commit List App', () => {
	test('renders initial list of 5 commits', () => {
		render(<App />);
		// const linkElement = screen.getByText(/learn react/i);
		// expect(linkElement).toBeInTheDocument();
	});
	test('clicking Load More button loads more commits', () => {
		render(<App />);
		// const linkElement = screen.getByText(/learn react/i);
		// expect(linkElement).toBeInTheDocument();
	});
	test('when max number of commits are displayed, Load More button disappears', () => {
		render(<App />);
		// const linkElement = screen.getByText(/learn react/i);
		// expect(linkElement).toBeInTheDocument();
	});
});
