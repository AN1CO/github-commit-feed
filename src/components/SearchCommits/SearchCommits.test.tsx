import { render, screen, fireEvent } from '@testing-library/react';
import SearchCommits from './SearchCommits';

describe('Search Commits', () => {
	test('Submit button should be disabled when there is no text in input boxes', () => {
		render(<SearchCommits />);
		const userSearchElement = screen.getByPlaceholderText('Search User');
		const repoSearchElement = screen.getByPlaceholderText('Search Repo');
		const buttonElement = screen
			.getAllByRole('button', { name: 'Submit' })
			.pop();
		fireEvent.change(userSearchElement, { target: { value: '' } });
		fireEvent.change(repoSearchElement, { target: { value: '' } });
		expect(buttonElement).toBeDisabled();
	});
	test('Search button should be disabled when there is text in only one input box', () => {
		render(<SearchCommits />);
		const userSearchElement = screen.getByPlaceholderText('Search User');
		const repoSearchElement = screen.getByPlaceholderText('Search Repo');
		const buttonElement = screen
			.getAllByRole('button', { name: 'Submit' })
			.pop();
		fireEvent.change(userSearchElement, { target: { value: 'user' } });
		fireEvent.change(repoSearchElement, { target: { value: '' } });
		expect(buttonElement).toBeDisabled();
	});
	test('Submit button should enable when text is written in both input boxes', () => {
		render(<SearchCommits />);
		const userSearchElement = screen.getByPlaceholderText('Search User');
		const repoSearchElement = screen.getByPlaceholderText('Search Repo');
		const buttonElement = screen
			.getAllByRole('button', { name: 'Submit' })
			.pop();
		fireEvent.change(userSearchElement, { target: { value: 'user' } });
		fireEvent.change(repoSearchElement, { target: { value: 'repo' } });
		expect(buttonElement).not.toBeDisabled();
	});
});
