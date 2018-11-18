import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import routes from "../../config/routes";
import CustomInputComponent from "../CustomInputComponent";

const Login = ({ dirty, isSubmitting }) => (
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
                        disabled={!dirty || isSubmitting}
                        type="submit"
                  >
                        Login
                  </Button>
                  <Link to={routes.forgotPassword} className="pull-right small">
                        Forgot password
                  </Link>
            </Form>
      </div>
);

Login.propTypes = {
      dirty: PropTypes.bool,
      isSubmitting: PropTypes.bool
};

Login.defaultProps = {
      dirty: false,
      isSubmitting: false
};

export default Login;
