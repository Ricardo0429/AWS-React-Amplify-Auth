import './ForgotPasswordSubmit.css';
import React from 'react';
import PropTypes from 'prop-types';
import {Form, Field} from 'formik';
import {Button, HelpBlock} from "react-bootstrap";
import CustomInputComponent from '../CustomInputComponent';

export const Component = ({ dirty, isSubmitting }) => (
      <div className="ForgotPasswordSubmit simple-form" >
            <Form>
                  <Field
                        autoFocus
                        type="text"
                        name="confirmationCode"
                        component={CustomInputComponent}>
                        <HelpBlock>
                              Please enter the confirmation code we sent to your email address.
                        </HelpBlock>
                  </Field>
                  <Field
                        type="password"
                        name="newPassword"
                        bsSize="large"
                        component={CustomInputComponent}
                  />
                  <Field
                        type="password"
                        name="confirmNewPassword"
                        bsSize="large"
                        component={CustomInputComponent}
                  />
                  <Button
                        block
                        type="submit"
                        bsSize="large"
                        disabled={! dirty || isSubmitting}>
                        Submit
                  </Button>
            </Form>
      </div>
);

Component.propTypes = { };

export default Component;

