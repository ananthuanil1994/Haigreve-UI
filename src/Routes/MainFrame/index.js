import React, { Component, Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from '../Home';
import { ROUTES } from '../../Routes.constants';
import Header from '../../Components/Header';

class MainFrame extends Component {

	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route path={ROUTES.HOME} component={Home} />
					<Route path={ROUTES.PAYMENT_SUCCESS} component={Home} />
					<Redirect from={ROUTES.INDEX} to={ROUTES.HOME} />
				</Switch>
			</Fragment>
		);
	}
}
export default MainFrame;
