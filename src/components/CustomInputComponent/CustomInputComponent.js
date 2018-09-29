import React from 'react';
import PropTypes from 'prop-types';
import {startCase} from 'lodash';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

const CustomInputComponent = ({
      type,
      field: { value, name },
      form: { handleChange, errors, touched },
      children,
      ...props,
}) => (
      <FormGroup controlId={name}>
            <ControlLabel>{startCase(name)}</ControlLabel>
            <FormControl
                  {...props}
                  type={type}
                  value={value}
                  onChange={handleChange}
            />
            {errors[name] && touched[name] && (
                  <div className="input-error">{errors[name]}</div>
            )}
            { children }
      </FormGroup>
);

CustomInputComponent.propTypes = {};

export default CustomInputComponent;

