import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import aboutForm from '../components/aboutForm.js';
import ProgramsPage from '../components/programsPage.js';
import SignupForm from '../components/signupForm.js';
import SignInForm from '../components/signInForm.js';
import Authenticate from '../components/authCheck.js';
import AuthenticateAdmin from '../components/authCheckAdmin.js';

import setAuthorizationToken from '../actions/index.js';
import DevTools from './DevTools';
import {setCurrentUser} from '../actions/index.js'
import b64DecodeUnicode from 'jwt-decode';

export default function Root({ store }) {
    /*
    Makes token/state stay even after a page refresh.
    */
    if(localStorage.jwt) {
        setAuthorizationToken(localStorage.jwt);
        store.dispatch(setCurrentUser((b64DecodeUnicode(localStorage.jwt))))
    }

    return (
        <Provider store={store}>
            <Router>
                <div>
                <DevTools />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/aboutus" component={AppContainer} />
                        <Route path="/aboutform" component={AuthenticateAdmin(aboutForm)} />
                        <Route path="/programs" component={Authenticate(ProgramsPage)} />
                        <Route path="/signup" component={SignupForm} />
                        <Route path="/signin" component={SignInForm} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
