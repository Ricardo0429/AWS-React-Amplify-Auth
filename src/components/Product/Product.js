import "./Product.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Form, Field } from "formik";
import PropTypes from "prop-types";
import CustomInputComponent from "../CustomInputComponent";
import ProductAttachmentField from "../ProductAttachmentField";

const Product = ({
      dirty,
      editMode,
      isSubmitting,
      handleDelete,
      ...attachmentProps
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
                  <ProductAttachmentField {...attachmentProps} />
                  <Button
                        block
                        type="submit"
                        bsSize="large"
                        bsStyle="primary"
                        disabled={!dirty || isSubmitting}
                  >
                        Save
                  </Button>
                  {editMode && (
                        <Button
                              block
                              bsSize="large"
                              bsStyle="danger"
                              onClick={handleDelete}
                              disabled={isSubmitting}
                        >
                              Delete
                        </Button>
                  )}
            </Form>
      </div>
);

Product.defaultProps = {
      dirty: false,
      editMode: false,
      isSubmitting: false
};

Product.propTypes = {
      dirty: PropTypes.bool,
      editMode: PropTypes.bool,
      isSubmitting: PropTypes.bool,
      handleDelete: PropTypes.func.isRequired
};

export default Product;
