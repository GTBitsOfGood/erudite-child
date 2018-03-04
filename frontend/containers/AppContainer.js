import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import LoginPage from '../components/LoginPage'
import Register from '../components/Register'

const AppContainer = ({ name }) => {
    return (
        <div>
            <Title name={name} />
            <LoginPage />
            <Register />
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
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
