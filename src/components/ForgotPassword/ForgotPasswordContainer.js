import React from 'react';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import Component from './ForgotPassword';
import {dispatch} from '../../store';
import validationSchema from './validationSchema';
import ForgotPasswordSubmit from './ForgotPasswordSubmit';

export class ForgotPasswordContainer extends React.Component {

      state = { value: '', awaitingConfirmation: false }

      initialValues = { confirmationCode: '', newPassword: '', confirmNewPassword: '' }

      onSubmitEmail = evt => {
            evt.preventDefault();
            const email = this.state.value;
            const onSuccess = () => this.setState({ awaitingConfirmation: true });
            this.props.forgotPassword({ email, onSuccess });
      }

      onSubmitNewPassword = ({ confirmationCode, newPassword }) => {
            const email = this.state.value;
            dispatch.auth.resetPassword({
                  email,
                  newPassword,
                  confirmationCode
            });
      }

      onChange = ({ target: { value }}) => {
            this.setState({ value });
      }

      render() {
            return this.state.awaitingConfirmation ? (
                  <Formik
                        onSubmit={this.onSubmitNewPassword}
                        component={ForgotPasswordSubmit}
                        initialValues={this.initialValues}
                        validationSchema={validationSchema}
                  />
            ) : (
                  <Component
                        value={this.state.value}
                        onSubmit={this.onSubmitEmail}
                        onChange={this.onChange}
                  />
            );
      }
};

export default connect(
      null,
      ({ auth: { forgotPassword }}) => ({ forgotPassword })
)(ForgotPasswordContainer);

