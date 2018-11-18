import "./Login.css";
import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { connect } from "react-redux";
import Login from "./Login";

export const LoginContainer = ({ login }) => (
      <Formik
            onSubmit={login}
            component={Login}
            initialValues={{ email: "", password: "" }}
      />
);

LoginContainer.propTypes = {
      login: PropTypes.func.isRequired
};

export default connect(
      null,
      ({ auth: { login } }) => ({ login })
)(LoginContainer);
