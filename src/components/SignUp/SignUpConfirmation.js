import './SignUpConfirmation.css';
import React from 'react';
import PropTypes from 'prop-types';
import {
      Button,
      HelpBlock,
      FormGroup,
      FormControl,
      ControlLabel
    } from "react-bootstrap";

export const Component = ({
      formIsValid,
      handleSubmit,
      handleChange,
      confirmationCode
}) => (
      <div className="SignUpConfirmation" >
            <form onSubmit={handleSubmit}>
                  <FormGroup controlId="confirmationCode" bsSize="large">
                        <ControlLabel>Confirmation Code</ControlLabel>
                        <FormControl
                              autoFocus
                              type="tel"
                              value={confirmationCode}
                              onChange={handleChange}
                        />
                        <HelpBlock>
                              Please enter the confirmation code we sent to your email address.
                        </HelpBlock>
                  </FormGroup>
                  <Button
                        block
                        bsSize="large"
                        disabled={! formIsValid}
                        type="submit"
                  >Verify</Button>
            </form>
      </div>
);

Component.propTypes = { };

export default Component;

