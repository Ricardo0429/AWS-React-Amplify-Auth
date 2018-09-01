import React from 'react';
import { connect } from 'react-redux';
import Component from './SignUpConfirmation';

export class Container extends React.Component {

      state = { confirmationCode: '' }

      validateForm() {
            return this.state.confirmationCode.length > 0;
      }

      handleChange = ({ target: { id, value }}) => {
            this.setState({[ id ]: value });
      }

      handleSubmit = async evt => {
            evt.preventDefault();
            this.props.confirmSignUp(this.state.confirmationCode);
      }

      render() {
            return (
                  <Component
                        formIsValid={this.validateForm()}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        confirmationCode={this.state.confirmationCode}
                  />
            );
      }
};

export default connect(
      null,
      ({ auth: { confirmSignUp }}) => ({ confirmSignUp })
)(Container);

