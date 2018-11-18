import "./ProductAttachmentField.css";
import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import { Glyphicon, FormGroup, ControlLabel } from "react-bootstrap";
import { allowedFileTypes, maxFileSize, filePreviewDim } from "../../config";

export const ProductAttachmentField = ({
      onDrop,
      filepath,
      filename,
      onDropRejected,
      onDropAccepted
}) => (
      <div className="ProductAttachmentField">
            <FormGroup controlId="file" className="photo">
                  <ControlLabel>Photo</ControlLabel>
                  <Dropzone
                        accept={allowedFileTypes.join(",")}
                        onDrop={onDrop}
                        maxSize={maxFileSize}
                        className="dropzone"
                        onDropRejected={onDropRejected}
                        rejectClassName="unauthorized"
                        acceptClassName="authorized"
                        onDropAccepted={onDropAccepted}
                  >
                        <Glyphicon glyph="arrow-up" title="Click or Drop" />
                  </Dropzone>
                  {filepath && (
                        <div className="file">
                              <img
                                    alt={filename}
                                    src={filepath}
                                    key={filename}
                                    width={filePreviewDim}
                                    height={filePreviewDim}
                              />
                        </div>
                  )}
            </FormGroup>
      </div>
);

ProductAttachmentField.defaultProps = {
      filepath: "",
      filename: ""
};

ProductAttachmentField.propTypes = {
      onDrop: PropTypes.func.isRequired,
      filepath: PropTypes.string,
      filename: PropTypes.string,
      onDropRejected: PropTypes.func.isRequired,
      onDropAccepted: PropTypes.func.isRequired
};

export default ProductAttachmentField;
