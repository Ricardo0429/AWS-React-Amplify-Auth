import React from "react";
import { Formik } from "formik";
import PropTypes from 'prop-types';
import SignUp from "./SignUp";
import validationSchema from "./validationSchema";
import SignUpConfirmation from "./SignUpConfirmation";

export class SignUpContainer extends React.Component {
      initialValues = {
            email: "",
            password: "",
            confirmPassword: ""
      };

      state = {
            email: "",
            password: "",
            confirmationCode: "",
            awaitingConfirmation: false
      };

      handleChange = ({ target: { id, value } }) => {
            this.setState({ [id]: value });
      };

      onSubmit = async values => {
            const { email, password } = values;
            const onSuccess = this.setState({
                  email,
                  password,
                  awaitingConfirmation: true
            });
            await this.props.signUp({ email, password, onSuccess });
      };

      onSubmitConfirmation = async event => {
            event.preventDefault();
            const { email, password, confirmationCode } = this.state;
            this.props.confirmSignUp({ email, password, confirmationCode });
      };

      validateConfirmationForm() {
            return this.state.confirmationCode.length > 0;
      }

      render() {
            return this.state.awaitingConfirmation ? (
                  <SignUpConfirmation
                        formIsValid={this.validateConfirmationForm()}
                        handleSubmit={this.onSubmitConfirmation}
                        handleChange={this.handleChange}
                        confirmationCode={this.state.confirmationCode}
                  />
            ) : (
                  <Formik
                        onSubmit={this.onSubmit}
                        component={SignUp}
                        initialValues={this.initialValues}
                        validationSchema={validationSchema}
                  />
            );
      }
}

SignUpContainer.propTypes = {
      signUp: PropTypes.func.isRequired,
      confirmSignUp: PropTypes.func.isRequired
};

export default SignUpContainer;
