import { FunctionComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SearchCommits from '../SearchCommits/SearchCommits';
import DisplayCommits from '../DisplayCommits/DisplayCommits';

const App: FunctionComponent = () => {
	return (
		<div className='p-2'>
			<header className='p-2'>
				<h1 className='text-3xl font-bold'>Github Commit Feed App</h1>
			</header>
			<Switch>
				<Route exact path='/' component={SearchCommits} />
				<Route
					path='/:user/:repo'
					render={(props) => <DisplayCommits {...props} />}
				/>
				<Redirect to='/' />
			</Switch>
		</div>
	);
};

export default App;
