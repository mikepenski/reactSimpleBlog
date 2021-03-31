import {
    Link,
    NavLink
  } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { useHistory } from "react-router-dom";


  // Get header height for padding top
 
const Header = () => {

    return <header>
                <div className="container">

                <div className="logo">
                         <Navbar.Brand href="/">My Life </Navbar.Brand>
                    </div>
                   
                    <Navbar bg="white" expand="lg" id="main-menu" >

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav defaultActiveKey="/home" as="ul">

                        <Nav.Item as="li">
                        <NavLink to="/" exact={true}>Home</NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                        <NavLink to="/blog">Blog</NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                        <NavLink to="/contact">Contact</NavLink>
                        </Nav.Item>
                     
                    </Nav>

                    </Navbar.Collapse>
                    </Navbar>

                </div>

               
           </header>
    }
  
export default Header;
