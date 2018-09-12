import './Product.css';
import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { allowedFileTypes, maxFileSize, filePreviewDim } from '../../config';
import { Glyphicon, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export const Product = ({
            dirty,
            errors,
            values,
            onDrop,
            filepath,
            touched,
            filename,
            editMode,
            isSubmitting,
            handleDelete,
            handleSubmit,
            handleChange,
            onDropRejected,
            onDropAccepted,
}) => (
      <div className="Product">
            <form onSubmit={handleSubmit}>
                  <FormGroup controlId="name">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                              value={values.name}
                              onChange={handleChange}
                        />
                        {errors.name && touched.name && (
                              <div className="input-error">{errors.name}</div>
                        )}
                  </FormGroup>
                  <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                              value={values.description}
                              onChange={handleChange}
                              componentClass="textarea"
                        />
                        {errors.description && touched.description && (
                              <div className="input-error">{errors.description}</div>
                        )}
                  </FormGroup>
                  <FormGroup controlId="file" className="photo">
                        <ControlLabel>Photo</ControlLabel>
                        <div>
                              <Dropzone
                                    accept={ allowedFileTypes.join( ',' ) }
                                    onDrop={onDrop}
                                    maxSize={ maxFileSize }
                                    className="dropzone"
                                    onDropRejected={onDropRejected}
                                    rejectClassName="unauthorized"
                                    acceptClassName="authorized"
                                    onDropAccepted={onDropAccepted}>
                                    <Glyphicon glyph="upload" title="Click or Drop"/>
                              </Dropzone>
                              {filepath &&
                              <div className="file">
                                    <img
                                          alt={filename}
                                          src={filepath}
                                          key={filename}
                                          width={filePreviewDim}
                                          height={filePreviewDim}
                                    />
                              </div>}
                        </div>
                  </FormGroup>
                  <Button
                        block
                        type="submit"
                        bsSize="large"
                        bsStyle="primary"
                        disabled={! dirty || isSubmitting}>
                        Save
                  </Button>
                  {editMode &&
                  <Button
                        block
                        bsSize="large"
                        bsStyle="danger"
                        onClick={handleDelete}
                        disabled={isSubmitting}>
                        Delete
                  </Button>
                  }
            </form>
      </div>
);

Product.propTypes = { };

export default Product;

