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
import ActivationSuccess from '../ActivationSuccess';
import Confirmation from '../Confirmation';
import { Subscription } from '../Subscription';
import { Provider } from '../Provider';
import notMobilePhone from '../NotMobile';

class MainFrame extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path={ROUTES.INDEX} component={Provider} />
          <Route path={ROUTES.HOME} component={Subscription} />
          <Route path={ROUTES.DOWNLOAD} component={Confirmation} />
          <Route path={ROUTES.USER} component={Home} />
          <Route path={ROUTES.ACTIVATION} component={ActivationSuccess} />
          <Route path={ROUTES.NOT_ACTIVATION} component={notMobilePhone} />
          <Redirect from={ROUTES.INDEX} to={ROUTES.INDEX} />
        </Switch>
      </Fragment>
    );
  }
}
export default MainFrame;
