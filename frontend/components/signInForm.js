import React, { Component } from 'react';
import {signIn} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';
import Navbar from './Navbar'

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          redirect: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
       // console.log(target + "," + value +"," +name);
        this.setState({
          [name]: value
        });
        //console.log(this.state);
      }

      handleSubmit(event) {
        event.preventDefault();
        this.props.signIn({
            'email':this.state.email,
            'password': this.state.password
        })
        this.setState({redirect: true})

      }

    render() {
        if (this.state.redirect) {
            return (
            <Redirect to="/aboutus"/>
            )
          }
        return (
        <div className="login-form">
        <Navbar/>
            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  {" "}
                  Sign-In
                </Header>
                <Form size="large">
                  <Segment stacked>
                    <Form.Input fluid icon="user" name="email" iconPosition="left" placeholder="E-mail address" type="email" value={this.state.email} onChange={this.handleInputChange} />
                    <Form.Input fluid icon="lock" name="password" iconPosition="left" placeholder="Password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                    <Button color="teal" fluid size="large" onClick={this.handleSubmit}>
                      Sign-In
                    </Button>
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid>
          </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        signIn
    }, dispatch)
  }
export default connect(null, mapDispatchToProps)(SignInForm);