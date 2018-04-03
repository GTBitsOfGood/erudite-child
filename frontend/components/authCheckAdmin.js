import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false
        };
      }
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.setState({
            redirect: true
          });
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.setState({
            redirect: true
          });       
      }
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect push to="/signin"/>
            )
        } else if (this.props.isAdmin != "admin") {
            return (
                <Redirect push to="/"/>
            )
        }
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }


  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      isAdmin: state.auth.user.accountType
    };
  }

  return connect(mapStateToProps)(Authenticate);
}