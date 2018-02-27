import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer.js';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Title} />
                        <Route path="/aboutUs" component={AppContainer} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
