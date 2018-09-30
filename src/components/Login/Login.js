import './Login.css';
import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../config/routes';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import {Form, Field} from 'formik';
import CustomInputComponent from '../CustomInputComponent';

export const Component = ({ dirty, isSubmitting }) => (
      <div className="Login simple-form">
            <Form>
                  <Field
                        autoFocus
                        type="email"
                        name="email"
                        bsSize="large"
                        component={CustomInputComponent}
                  />
                  <Field
                        autoFocus
                        type="password"
                        name="password"
                        bsSize="large"
                        component={CustomInputComponent}
                  />
                  <Button
                        block
                        bsSize="large"
                        disabled={! dirty || isSubmitting}
                        type="submit">
                        Login
                  </Button>
                  <Link
                        to={routes.forgotPassword}
                        className="pull-right small">
                        Forgot password
                  </Link>
            </Form>
      </div>
);

Component.propTypes = {
      dirty: PropTypes.bool,
      isSubmitting: PropTypes.bool,
};

Component.defaultProps = {
      email: '',
      password: '',
      formIsValid: false
};

export default Component;

