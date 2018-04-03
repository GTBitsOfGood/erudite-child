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
        }
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }


  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps)(Authenticate);
}