import React from 'react';
import Product from './Product';
import { Formik } from 'formik';
import { isEqual } from 'lodash';
import { connect } from 'react-redux';
import { dispatch } from '../../store';
import validationSchema from './validationSchema';
import { allowedFileTypes, maxFileSize } from '../../config';
import { fIleTypeError, fileTooLarge, unexpectedError } from '../../config/messages';

export class ProductContainer extends React.Component {

      state = { photos: [] }

      intialValues = { description: '', name: '', filename: '', filepath: '' }

      componentWillMount () {
            const {id} = this.props.match.params;
            if (id) {
                  dispatch.products.getOne(id);
                  this.editMode = true;
                  this.id = id;
            }
      }

      componentWillReceiveProps (nextProps) {
            const { selected } = nextProps.products;
            if (isEqual(selected, this.props.products.selected)) return;
            const { filename, filepath } = selected;
            this.setState({ filename, filepath });
      }

      onDropRejected = ([file]) => {
            let m;
            const { type, size } = file;
            if (! allowedFileTypes.includes( type )) {
                  m = fIleTypeError(allowedFileTypes.join(', '));
            } else if (maxFileSize < size) {
                  m = fileTooLarge(maxFileSize);
            } else {
                  m = unexpectedError;
            }
            dispatch.alert.error(m);
      }

      onDropAccepted =(setFieldValue, [file]) => {
            setFieldValue('file', file);
            const { preview: filepath, name: filename } = file;
            const existingFile = this.state.filename;
            this.setState({ filename, filepath, existingFile });
      }

      onSubmit = body => {
            const { editMode, id } = this;
            const { existingFile } = this.state;
            const arg = editMode ? { body, id, existingFile } : body;
            const action = editMode ? 'update' : 'create';
            dispatch.products[action](arg);
      }

      renderForm = props => (
            <Product {...props}
                  filepath={this.state.filepath}
                  filename={this.state.filename}
                  onDrop={dispatch.alert.silence}
                  onDropRejected={this.onDropRejected}
                  onDropAccepted={this.onDropAccepted.bind(this, props.setFieldValue)}
            />
      )

      render() {
            return (
                  <Formik
                        render={this.renderForm}
                        onSubmit={this.onSubmit}
                        initialValues={this.intialValues}
                        validationSchema={validationSchema}
                  />
            );
      }
};

export default connect(({ products }) => ({ products }))(ProductContainer);

