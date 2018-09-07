import './SignUp.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export const SignUp = ({
      dirty,
      errors,
      values,
      touched,
      isSubmitting,
      handleSubmit,
      handleChange
}) => (
      <div className="SignUp" >
            <form onSubmit={handleSubmit}>
                  <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                              autoFocus
                              type="email"
                              value={values.email}
                              onChange={handleChange}
                        />
                        {errors.email && touched.email && (
                              <div className="input-error">{errors.email}</div>
                        )}
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                              type="password"
                              value={values.password}
                              onChange={handleChange}
                        />
                        {errors.password && touched.password && (
                              <div className="input-error">
                                    {errors.password}
                              </div>
                        )}
                  </FormGroup>
                  <FormGroup controlId="confirmPassword" bsSize="large">
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl
                              type="password"
                              value={values.confirmPassword}
                              onChange={handleChange}
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                              <div className="input-error">
                                    {errors.confirmPassword}
                              </div>
                        )}
                  </FormGroup>
                  <Button
                        block
                        type="submit"
                        bsSize="large"
                        disabled={!dirty || isSubmitting}>
                        Sign up
                  </Button>
            </form>
      </div>
);

SignUp.propTypes = { };

export default SignUp;

