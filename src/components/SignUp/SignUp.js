import "./SignUp.css";
import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import { Button } from "react-bootstrap";
import CustomInputComponent from "../CustomInputComponent";

const SignUp = ({ dirty, isSubmitting }) => (
      <div className="SignUp simple-form">
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
                  <Field
                        autoFocus
                        type="password"
                        name="confirmPassword"
                        bsSize="large"
                        component={CustomInputComponent}
                  />
                  <Button
                        block
                        type="submit"
                        bsSize="large"
                        disabled={!dirty || isSubmitting}
                  >
                        Sign up
                  </Button>
            </Form>
      </div>
);

SignUp.defaultProps = {
      dirty: false,
      isSubmitting: false
};

SignUp.propTypes = {
      dirty: PropTypes.bool,
      isSubmitting: PropTypes.bool
};

export default SignUp;
