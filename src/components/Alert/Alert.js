import './Alert.css';
import React from 'react';
import PropTypes from 'prop-types';
import {Alert, Glyphicon} from 'react-bootstrap';

export const Component = ({ alert: { message, type }, silence }) => (
      <div className="Alert" >
            { message && (
            <Alert bsStyle={ type }>
                  <span className="pull-left">
                        { message }
                  </span>
                  <Glyphicon
                        glyph="remove"
                        onClick={silence}
                        className="pull-right"
                  />
            </Alert>
            )}
      </div>
);

Component.propTypes = { };

export default Component;

