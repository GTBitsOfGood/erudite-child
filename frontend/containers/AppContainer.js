import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import HomePage from '../containers/HomePage';
import AboutUs from '../components/aboutUs';

const AppContainer = ({ name }) => {
  return (
    <div>
      <HomePage />
    </div>
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
