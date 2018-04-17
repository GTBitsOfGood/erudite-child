import React from "react";
import { Menu } from "semantic-ui-react";
import {connect} from 'react-redux';
import {logout} from '../actions/index';
import {bindActionCreators} from 'redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event, { name }) {
    this.setState({ activeItem: name });
  }
  handleLogout(event) {
      event.preventDefault();
      this.props.logout()
  }

  render() {
    const { activeItem } = this.state;
    const  {isAuthenticated} = this.props.auth;
    const logOut = (
        <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleLogout.bind(this)} />
    );
    const logIn = (
        <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
    );
    return (
        <Menu pointing header>
          <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='About us' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='Donate' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
           {isAuthenticated ? logOut : logIn}
          </Menu.Menu>
        </Menu>

    );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        logout
    }, dispatch)
  }
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
