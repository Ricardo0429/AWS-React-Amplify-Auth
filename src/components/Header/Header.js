import './Header.css';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import React, { Fragment } from 'react';

export const Component = ({ loggedIn, logout }) => (
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
                              <LinkContainer to="/auth/products/new">
                                    <NavItem>Add a Product</NavItem>
                              </LinkContainer>
                              { loggedIn ? (
                              <NavItem onClick={ logout }>Logout</NavItem>
                              ) : (
                              <Fragment>
                                    <LinkContainer to="/unauth/signup">
                                          <NavItem>Sign up</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/unauth/login">
                                          <NavItem>Login</NavItem>
                                    </LinkContainer>
                              </Fragment>
                              )}
                        </Nav>
                  </Navbar.Collapse>
            </Navbar>
      </div>
);

export default Component;

