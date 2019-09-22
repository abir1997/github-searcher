import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Github Searcher</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#features">Login</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
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