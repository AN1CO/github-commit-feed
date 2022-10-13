import { FunctionComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SearchCommits from '../SearchCommits/SearchCommits';

const App: FunctionComponent = () => {
	return (
		<Switch>
			<Route exact path='/' component={SearchCommits} />
			<Redirect to='/' />
		</Switch>
	);
};

export default App;
