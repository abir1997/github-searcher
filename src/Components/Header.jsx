import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends React.Component{

    onLogin(){
        this.props.onLogin();
    }

    onLogout(){
        this.props.onLogout();
    }

    render(){
        let page;
        if(this.props.idToken){
            page = <Nav.Link onClick = {this.onLogout.bind(this)}>Logout</Nav.Link>
        }else{
            page = <Nav.Link onClick = {this.onLogin.bind(this)}>Login</Nav.Link>
        }
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Github Searcher</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home"></Nav.Link>
              {page}
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form> */}
          </Navbar>
        );
    }
}

export default Header;