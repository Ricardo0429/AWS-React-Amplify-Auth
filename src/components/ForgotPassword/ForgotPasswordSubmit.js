import './ForgotPasswordSubmit.css';
import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'formik';
import {Button, HelpBlock, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

export const Component = ({
      dirty,
      errors,
      values,
      touched,
      formIsValid,
      isSubmitting,
      handleSubmit,
      handleChange
}) => (
      <div className="ForgotPasswordSubmit simple-form" >
            <form onSubmit={handleSubmit}>
                  <FormGroup controlId="confirmationCode" bsSize="large">
                        <ControlLabel>Confirmation Code</ControlLabel>
                        <FormControl
                              autoFocus
                              type="text"
                              value={values.code}
                              onChange={handleChange}
                        />
                        {errors.confirmationCode && touched.confirmationCode && (
                              <div className="input-error">{errors.confirmationCode}</div>
                        )}
                        <HelpBlock>
                              Please enter the confirmation code we sent to your email address.
                        </HelpBlock>
                  </FormGroup>
                  <FormGroup controlId="newPassword" bsSize="large">
                        <ControlLabel>New Password</ControlLabel>
                        <FormControl
                              type="password"
                              value={values.newPassword}
                              onChange={handleChange}
                        />
                        {errors.newPassword && touched.newPassword && (
                              <div className="input-error">{errors.newPassword}</div>
                        )}
                  </FormGroup>
                  <FormGroup controlId="confirmNewPassword" bsSize="large">
                        <ControlLabel>Confirm New Password</ControlLabel>
                        <FormControl
                              type="password"
                              value={values.confirmNewPassword}
                              onChange={handleChange}
                        />
                        {errors.confirmNewPassword && touched.confirmNewPassword && (
                              <div className="input-error">{errors.confirmNewPassword}</div>
                        )}
                  </FormGroup>
                  <Button
                        block
                        bsSize="large"
                        type="submit">
                        Submit
                  </Button>
            </form>
      </div>
);

Component.propTypes = { };

export default Component;

