// [TODO]: Add Formik and yup validation
import "./Login.css";
import React from "react";
import Login from './Login';
import { connect } from 'react-redux';

export  class LoginContainer extends React.Component {

      constructor(props) {
            super(props);
            this.state = { email: "", password: ""};
      }

      validateForm() {
            return (
                  this.state.email.length > 0 &&
                  this.state.password.length > 0
            );
      }

      handleChange = evt => {
            this.setState({
                  [evt.target.id]: evt.target.value
            });
      }

      handleSubmit = evt => {
            const {email, password} = this.state;
            evt.preventDefault();
            this.props.login({ email, password });
      }

      render() {
            return <Login
                  email={this.state.email}
                  password={this.state.password}
                  formIsValid={this.validateForm()}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
            />;
      }
}

export default connect(
      null,
      ({ auth: login }) => ({ login })
)(LoginContainer);

