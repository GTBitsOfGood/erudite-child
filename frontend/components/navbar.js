import React from "react";
import { Menu, Button} from "semantic-ui-react";
import {connect} from 'react-redux';
import {logout} from '../actions/index';
import {bindActionCreators} from 'redux';

import {Link} from 'react-router-dom';

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
        <Menu>
            <Link to='/'><Menu.Item name="The Erudite Child"></Menu.Item></Link>
                <div className= "right menu">
                    <Link to='/aboutus'><Menu.Item name='About Us' /></Link>
                    <Link to='/programs'><Menu.Item name='Get Involved' /></Link>
                    <Link to='/signin'>
                        <Button basic color='teal'>Login</Button>
                    </Link>
                    <Button size='huge' color='yellow'>Donate</Button>
                </div>
        </Menu>
    )
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
