import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router';
import Navbar from '../components/Navbar';
import HomePage from '../containers/HomePage';
import AboutUs from '../components/aboutUs';
import SignInForm from '../components/signInForm';
import ProgramPage from '../components/programsPage';

const AppContainer = ({ name }) => {
  return (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exactly component={AboutUs} pattern="/aboutus" />
                <Route exactly component={HomePage} pattern="/" />
                <Route exactly component={SignInForm} pattern="/signin" />
                <Route exactly component={ProgramPage} pattern='/programs'/>
                <Route component={Page404} />
            </Switch>
        </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
