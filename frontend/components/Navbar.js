import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

class Navbar extends React.Component {
  render(props) {
    return (
      <Menu>
        <Menu.Item header>Erudite Child</Menu.Item>
        <div className= "right menu">
          <a href="#"><Menu.Item name='About Us' /></a>
          <a href="#"><Menu.Item name='Get Involved' /></a>
          <Button basic color='blue'>{this.props.name}</Button>
          <Button size='huge' color='yellow'>Donate</Button>
        </div>
      </Menu>
    )
  }
}

export default Navbar;
