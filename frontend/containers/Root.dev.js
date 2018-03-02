import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import aboutForm from '../components/aboutForm.js';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/aboutus" component={AppContainer} />
                        <Route path="/aboutform" component={aboutForm} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
