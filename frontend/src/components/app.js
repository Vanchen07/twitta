import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route} from 'react-router-dom';

import Splash from './splash/splash';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import BurpComposeContainer from './burps/burp_compose_container';

const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/main" component={MainPage} />
      <ProtectedRoute path="/profile" component={ProfileContainer} />
      <ProtectedRoute path="/new_burp" component={BurpComposeContainer} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;