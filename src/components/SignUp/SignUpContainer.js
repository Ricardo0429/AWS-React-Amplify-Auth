import React from 'react';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import validationSchema from './validationSchema';
import SignUpConfirmation from './SignUpConfirmation';
import { Formik } from 'formik';

export class SignUpContainer extends React.Component {

      initialValues = {
            email: '',
            password: '',
            confirmPassword: ''
      }

      state = {
            email: "",
            password: "",
            confirmationCode: '',
            awaitingConfirmation: false
      }

      handleChange = ({ target: { id, value }}) => {
            this.setState({[ id ]: value });
      }

      onSubmit = async values => {
            const { email, password } = values;
            await this.props.signUp({ email, password });
            this.setState({ email, password, awaitingConfirmation: true  });
      }

      onSubmitConfirmation = async event => {
            event.preventDefault();
            const { email, password, confirmationCode } = this.state;
            this.props.confirmSignUp({ email, password, confirmationCode });
      }

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
};

export default connect(null, ({ auth:
      { signUp, confirmSignUp }}) =>
      ({ signUp, confirmSignUp })
)(SignUpContainer);

