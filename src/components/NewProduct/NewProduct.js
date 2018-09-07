import './NewProduct.css';
import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { Glyphicon, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { allowedPhotoTypes, maxPhotoSize, photoPreviewDim } from '../../config';

export const NewProduct = ({
            dirty,
            errors,
            values,
            onDrop,
            touched,
            photos,
            isSubmitting,
            handleSubmit,
            handleChange,
            onDropRejected,
            onDropAccepted,
}) => (
      <div className="NewProduct">
            <form onSubmit={handleSubmit}>
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
                  <FormGroup controlId="file" className="photos">
                        <ControlLabel>Photos</ControlLabel>
                        <div>
                              <Dropzone
                                    accept={ allowedPhotoTypes.join( ',' ) }
                                    onDrop={onDrop}
                                    maxSize={ maxPhotoSize }
                                    className="dropzone"
                                    onDropRejected={onDropRejected}
                                    rejectClassName="unauthorized"
                                    acceptClassName="authorized"
                                    onDropAccepted={onDropAccepted}>
                                    <Glyphicon glyph="upload" title="Click or Drop"/>
                              </Dropzone>
                              <div className="photoList">
                                    { photos.map(({ preview, name }) => (
                                    <img
                                          alt={name}
                                          key={name}
                                          src={preview}
                                          width={photoPreviewDim}
                                          height={photoPreviewDim}
                                    />))}
                              </div>
                        </div>
                  </FormGroup>
                  <Button
                        block
                        type="submit"
                        bsSize="large"
                        bsStyle="primary"
                        disabled={! dirty || isSubmitting}>
                        Create
                  </Button>
            </form>
      </div>
);

NewProduct.propTypes = { };

export default NewProduct;

