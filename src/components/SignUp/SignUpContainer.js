import React from 'react';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import validationSchema from './validationSchema';
import SignUpConfirmation from './SignUpConfirmation';
import { Formik } from 'formik';

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

      onSubmit = async values => {
            const { email, password } = values;
            console.log('>>>>', values);
            // await this.props.signUp({ email, password });
            // this.setState({ awaitingConfirmation: true  });
      }

      onSubmitConfirmation = async event => {
            event.preventDefault();
            const { email, password, confirmationCode } = this.state;
            this.props.confirmSignUp({ email, password, confirmationCode });
      }

      validateSignUpForm = async () => {
            const { email, password, confirmPassword } = this.state;
            // await validate({ email, password, confirmPassword }) ;
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
                        render={props => <SignUp {...props} />}
                        onSubmit={this.onSubmit}
                        validationSchema={validationSchema}
                        initialValues={{email: '', password: '', confirmPassword: ''}}
                  />
            );
      }
};

export default connect(null, ({ auth:
      { signUp, confirmSignUp }}) =>
      ({ signUp, confirmSignUp })
)(SignUpContainer);

