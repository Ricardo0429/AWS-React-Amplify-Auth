import './ForgotPassword.css';
import React from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

export const Component = ({ value, onChange, onSubmit }) => (
      <div className="ForgotPassword simple-form" >
            <form>
                  <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Enter your email</ControlLabel>
                        <FormControl
                              autoFocus
                              type="email"
                              value={value}
                              onChange={onChange}
                        />
                  </FormGroup>
                  <Button
                        block
                        bsSize="large"
                        type="submit"
                        onClick={onSubmit}>
                        Reset Password
                  </Button>
            </form>
      </div>
);

Component.propTypes = { };

export default Component;

