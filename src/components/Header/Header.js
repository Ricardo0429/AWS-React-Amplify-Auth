import './Header.css';
import React from 'react';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export const Component = () => (
      <div className="Header" >
            <Navbar fluid collapseOnSelect>
                  <Navbar.Header>
                        <Navbar.Brand>
                              <Link to="/">Scratch</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                        <Nav pullRight>
                              <LinkContainer to="/signup">
                                    <NavItem>Signup</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/login">
                                    <NavItem>Login</NavItem>
                              </LinkContainer>
                        </Nav>
                  </Navbar.Collapse>
            </Navbar>
      </div>
);

export default Component;

