import './SignUp.css';
import React from 'react';
import PropTypes from 'prop-types';
import {
      Button,
      FormGroup,
      FormControl,
      ControlLabel
    } from "react-bootstrap";

export const Component = ({
      email,
      password,
      formIsValid,
      handleChange,
      handleSubmit,
      confirmPassword
}) => (
      <div className="SignUp" >
            <form onSubmit={handleSubmit}>
                  <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                              autoFocus
                              type="email"
                              value={email}
                              onChange={handleChange}
                        />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                              value={password}
                              onChange={handleChange}
                              type="password"
                        />
                  </FormGroup>
                  <FormGroup controlId="confirmPassword" bsSize="large">
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl
                              value={confirmPassword}
                              onChange={handleChange}
                              type="password"
                        />
                  </FormGroup>
                  <Button
                        block
                        bsSize="large"
                        disabled={! formIsValid}
                        type="submit">Sign up
                  </Button>
            </form>
      </div>
);

Component.propTypes = { };

export default Component;

