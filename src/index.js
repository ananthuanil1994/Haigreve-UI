import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import ReduxProvider from './configureRedux';
import reportWebVitals from './reportWebVitals';
import MainFrame from './Routes/MainFrame';
import { ROUTES } from './Routes.constants';
import 'antd/dist/antd.css';
import { CommonUtils } from './utils/commonUtils';
import './index.scss';

function render(View) {
	return CommonUtils.isLoggedIn() ? <Redirect to='/' /> : View;
}

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider>
			<Router>
				<Switch>
					<Route path={ROUTES.INDEX} component={MainFrame} />
					<Redirect from='*' to={ROUTES.INDEX} />
				</Switch>
			</Router>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
