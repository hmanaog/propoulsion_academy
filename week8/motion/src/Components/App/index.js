import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Store from '../../Store';
// import Header from '../Header';
import Home from '../Home';
import Feed from '../Feed';
import UserProfile from '../User Profile';
import SignUp from '../SignUp';
import CongratulationPage from '../CongratulationPage';
import VerificationPage from '../VerificationPage';

class App extends React.Component {
	render() {
		console.log('in the app');
		console.log(this.props);
		return (
			<Provider store={Store}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/feed' component={Feed} />
						<Route
							exact
							path='/users/:userId'
							component={UserProfile}
						/>
						<Route exact path='/signup' component={SignUp} />
						<Route
							exact
							path='/signup/message/'
							component={CongratulationPage}
						/>
						<Route
							exact
							path='/signUp/message/verification/'
							component={VerificationPage}
						/>
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
