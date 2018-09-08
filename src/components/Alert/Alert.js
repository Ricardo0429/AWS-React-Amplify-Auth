import './Alert.css';
import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Component = ({ message, type }) => (
      <div className="Alert" >
            <Alert bsStyle={ type }>{ message }</Alert>
      </div>
);

Component.propTypes = { };

export default Component;

