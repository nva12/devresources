import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar variant='dark' bg='primary' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>DevToolBox</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/signup'>Sign Up</Nav.Link>
            <Nav.Link href='/signin'>Sign In</Nav.Link>
            <Nav.Link href='/'>Link 3</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-info'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
