import React from 'react';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import SignUpConfirmation from './SignUpConfirmation';

export class SignUpContainer extends React.Component {

      state = {
            email: "",
            password: "",
            confirmPassword: "",
            confirmationCode: '',
            awaitingConfirmation: false
      }

      handleChange = ({ target: { id, value }}) => {
            this.setState({[ id ]: value });
      }

      handleSubmit = async evt => {
            evt.preventDefault();
            const { email, password } = this.state;
            await this.props.signUp({ email, password });
            this.setState({ awaitingConfirmation: true  });
      }

      handleSubmitConfirmation = async event => {
            event.preventDefault();
            const { email, password, confirmationCode } = this.state;
            this.props.confirmSignUp({ email, password, confirmationCode });
      }

      validateSignUpForm() {
            return (
                  this.state.email.length > 0 &&
                  this.state.password.length > 0 &&
                  this.state.password === this.state.confirmPassword
            );
      }

      validateConfirmationForm() {
            return this.state.confirmationCode.length > 0;
      }

      render() {
            return this.state.awaitingConfirmation ? (
                  <SignUpConfirmation
                        formIsValid={this.validateConfirmationForm()}
                        handleSubmit={this.handleSubmitConfirmation}
                        handleChange={this.handleChange}
                        confirmationCode={this.state.confirmationCode}
                  />
            ) : (
                  <SignUp
                        email={this.state.email}
                        password={this.state.password}
                        formIsValid={this.validateSignUpForm()}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        confirmPassword={this.state.confirmPassword}
                  />
            );
      }
};

export default connect(null, ({ auth:
      { signUp, confirmSignUp }}) =>
      ({ signUp, confirmSignUp })
)(SignUpContainer);

