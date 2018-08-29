import './Login.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export const Component = ({
      email,
      password,
      formIsvalid,
      handleSubmit,
      handleChange,
}) => (
      <div className="Login">
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
                  <Button
                        block
                        bsSize="large"
                        disabled={! formIsvalid}
                        type="submit">
                        Login
                  </Button>
            </form>
      </div>
);

Component.propTypes = {
      email: PropTypes.string,
      password: PropTypes.string,
      formIsvalid: PropTypes.bool,
      handleSubmit: PropTypes.func.isRequired,
      handleChange: PropTypes.func.isRequired
};

Component.defaultProps = {
      email: '',
      password: '',
      validateForm: () => null
};

export default Component;

