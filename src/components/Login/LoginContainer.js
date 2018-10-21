import "./Login.css";
import React from "react";
import Login from './Login';
import {Formik} from 'formik';
import {connect} from 'react-redux';

export  class LoginContainer extends React.Component {

      render() {
            return (
                  <Formik
                        onSubmit={this.props.login}
                        component={Login}
                        initialValues={{email: '', password: ''}}
                  />
            );
      }
}

export default connect(
      null,
      ({ auth: { login }}) => ({ login })
)(LoginContainer);

