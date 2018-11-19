import React from "react";
import PropTypes from "prop-types";
import { startCase } from "lodash";
import { FormControl, FormGroup, ControlLabel } from "react-bootstrap";

const CustomInputComponent = ({
      type,
      field: { value, name },
      form: { handleChange, errors, touched },
      children,
      ...props
}) => (
      <FormGroup controlId={name}>
            <ControlLabel>{startCase(name)}</ControlLabel>
            <FormControl
                  {...props}
                  type={type}
                  value={value}
                  onChange={handleChange}
            />
            {/* eslint-disable indent */
            errors[name] &&
                  touched[name] && (
                        <div className="input-error">{errors[name]}</div>
                  )
            /* eslint-enable indent */
            }
            {children}
      </FormGroup>
);

CustomInputComponent.propTypes = {
      children: PropTypes.object,
      type: PropTypes.string.isRequired,
      field: PropTypes.shape({
            value: PropTypes.string,
            name: PropTypes.string.isRequired
      }).isRequired,
      form: PropTypes.shape({
            errors: PropTypes.object,
            touched: PropTypes.object,
            handleChange: PropTypes.func
      }).isRequired
};

export default CustomInputComponent;
