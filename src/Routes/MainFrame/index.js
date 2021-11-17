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
	componentDidUpdate(prevProps, prevState) {
		// const { pathname } = this.props.location;
		/* to call all pending api call */
		// if (prevProps.location.pathname !== pathname) {
		//     Instances.map(instance => instance.cancelPending && instance.cancelPending());
		// }
	}

	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route path={ROUTES.HOME} component={Home} />
					<Redirect from={ROUTES.INDEX} to={ROUTES.HOME} />
				</Switch>
			</Fragment>
		);
	}
}
export default MainFrame;
