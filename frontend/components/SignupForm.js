import React from 'react';
import {Button } from 'semantic-ui-react';


class SignupForm extends React.Component {
  render(props) {
    return(
        <div>
          <div className="ui fluid input">
              <input type="email" placeholder="email"></input>
          </div>
          <br/>
          <div className="ui fluid input">
              <input type="password" placeholder="password"></input>
          </div>
          <br/>
          <div className="ui fluid input">
              <input type="password" placeholder="password confirmation"></input>
          </div>
          <br/>
          <button className="massive ui yellow button">{this.props.name}</button>
        </div>
    )
  }
}

export default SignupForm;
