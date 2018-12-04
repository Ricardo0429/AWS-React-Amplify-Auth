import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";
import ForgotPassword from "./ForgotPassword";
import validationSchema from "./validationSchema";
import ForgotPasswordSubmit from "./ForgotPasswordSubmit";

export class ForgotPasswordContainer extends React.Component {
      state = { value: "", awaitingConfirmation: false };

      initialValues = {
            confirmationCode: "",
            newPassword: "",
            confirmNewPassword: ""
      };

      onSubmitEmail = evt => {
            evt.preventDefault();
            const email = this.state.value;
            const onSuccess = () =>
                  this.setState({ awaitingConfirmation: true });
            this.props.forgotPassword({ email, onSuccess });
      };

      onSubmitNewPassword = ({ confirmationCode, newPassword }) => {
            const email = this.state.value;
            this.props.dispatch.auth.resetPassword({
                  email,
                  newPassword,
                  confirmationCode
            });
      };

      onChange = ({ target: { value } }) => {
            this.setState({ value });
      };

      render() {
            return this.state.awaitingConfirmation ? (
                  <Formik
                        onSubmit={this.onSubmitNewPassword}
                        component={ForgotPasswordSubmit}
                        initialValues={this.initialValues}
                        validationSchema={validationSchema}
                  />
            ) : (
                  <ForgotPassword
                        value={this.state.value}
                        onSubmit={this.onSubmitEmail}
                        onChange={this.onChange}
                  />
            );
      }
}

ForgotPasswordContainer.propTypes = {
      dispatch: PropTypes.object.isRequired,
      forgotPassword: PropTypes.func.isRequired
};

export default ForgotPasswordContainer;
