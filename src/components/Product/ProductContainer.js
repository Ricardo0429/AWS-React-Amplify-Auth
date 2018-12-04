import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { isEqual } from "lodash";
import Product from "./Product";
import { switchCase } from "../../libs/switchCase";
import validationSchema from "./validationSchema";
import { allowedFileTypes, maxFileSize } from "../../config";
import {
      fIleTypeError,
      fileTooLarge,
      unexpectedError
} from "../../config/messages";

export class ProductContainer extends React.Component {
      state = { filename: "", filepath: "", existingFile: "" };

      initialValues = { description: "", name: "", filename: "", filepath: "" };

      componentWillMount() {
            const { id } = this.props.match.params;
            if (id) {
                  this.props.dispatch.products.getOne(id);
            }
      }

      componentWillReceiveProps(nextProps) {
            const { selected } = nextProps.products;
            if (isEqual(selected, this.props.products.selected)) return;
            const { filename, filepath } = selected;
            this.setState({ filename, filepath });
      }

      handleDelete = () => {
            const { id } = this.props.match.params;
            const { filename } = this.state;
            this.props.dispatch.products.remove({ id, filename });
      };

      onDropRejected = ([file]) => {
            const sizeError = {};
            const typeError = {};
            const { type, size } = file;
            // if size too large
            sizeError.case = maxFileSize < size;
            sizeError.then = () => fileTooLarge(maxFileSize);
            // if file type not allowed
            typeError.case = !allowedFileTypes.includes(type);
            typeError.then = () => fIleTypeError(allowedFileTypes.join(", "));
            const message = switchCase([sizeError, typeError]);
            this.props.dispatch.alert.error(message || unexpectedError);
      };

      onDropAccepted = (setFieldValue, [file]) => {
            setFieldValue("file", file);
            const { preview: filepath, name: filename } = file;
            this.setState(prevState => ({
                  filename,
                  filepath,
                  existingFile: prevState.filename
            }));
      };

      onSubmit = body => {
            const { id } = this.props.match.params;
            const { existingFile } = this.state;
            const arg = id ? { body, id, existingFile } : body;
            const action = id ? "update" : "create";
            this.props.dispatch.products[action](arg);
      };

      renderForm = ({ setFieldValue, ...props }) => (
            <Product
                  {...props}
                  filepath={this.state.filepath}
                  onDrop={this.props.dispatch.alert.silence}
                  filename={this.state.filename}
                  editMode={!!this.props.match.params.id}
                  handleDelete={this.handleDelete}
                  onDropRejected={this.onDropRejected}
                  onDropAccepted={files =>
                        this.onDropAccepted(setFieldValue, files)
                  }
            />
      );

      render() {
            return (
                  <Formik
                        render={this.renderForm}
                        onSubmit={this.onSubmit}
                        initialValues={this.initialValues}
                        validationSchema={validationSchema}
                  />
            );
      }
}

ProductContainer.propTypes = {
      products: PropTypes.shape({
            selected: PropTypes.object
      }).isRequired,
      dispatch: PropTypes.func.isRequired,
      match: PropTypes.shape({
            params: PropTypes.shape({
                  id: PropTypes.string
            }).isRequired
      }).isRequired
};

export default ProductContainer;
