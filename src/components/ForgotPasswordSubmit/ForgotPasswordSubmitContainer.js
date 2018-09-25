import React from 'react';
import {Formik} from 'formik';
import {dispatch} from '../../store';
import validationSchema from './validationSchema';
import ForgotPasswordSubmit from './ForgotPasswordSubmit';

export class ForgotPasswordSubmitContainer extends React.Component {

      initialValues = { confirmationCode: '', newPassword: '', confirmNewPassword: '' }

      onSubmit = val => {
            console.log('VAL: >>', val);
            dispatch.auth.forgotPasswordConfirm(val);
      }

      render() {
            return (
                  <Formik
                        onSubmit={this.onSubmit}
                        component={ForgotPasswordSubmit}
                        initialValues={this.initialValues}
                        validationSchema={validationSchema}
                  />
            );
      }
};

export default ForgotPasswordSubmitContainer;

