import './Product.css';
import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import {Form, Field} from 'formik';
import CustomInputComponent from '../CustomInputComponent';
import {Glyphicon, Button, FormGroup, ControlLabel} from "react-bootstrap";
import {allowedFileTypes, maxFileSize, filePreviewDim} from '../../config';

export const Product = ({
            dirty,
            onDrop,
            filepath,
            filename,
            editMode,
            isSubmitting,
            handleDelete,
            onDropRejected,
            onDropAccepted
}) => (
      <div className="Product simple-form">
            <Form>
                  <Field
                        autoFocus
                        type="text"
                        name="name"
                        bsSize="large"
                        component={CustomInputComponent}
                        placeholder="Name"
                  />
                  <Field
                        type="textarea"
                        name="description"
                        component={CustomInputComponent}
                        placeholder="Description"
                  />
                  <FormGroup controlId="file" className="photo">
                        <ControlLabel>Photo</ControlLabel>
                        <div>
                              <Dropzone
                                    accept={ allowedFileTypes.join( ',' ) }
                                    onDrop={onDrop}
                                    maxSize={maxFileSize}
                                    className="dropzone"
                                    onDropRejected={onDropRejected}
                                    rejectClassName="unauthorized"
                                    acceptClassName="authorized"
                                    onDropAccepted={onDropAccepted}>
                                    <Glyphicon glyph="arrow-up" title="Click or Drop"/>
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
            </Form>
      </div>
);

Product.propTypes = { };

export default Product;

