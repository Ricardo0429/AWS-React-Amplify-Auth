import React from 'react';
import Product from './Product';
import {Formik} from 'formik';
import {isEqual} from 'lodash';
import {connect} from 'react-redux';
import {switchCase} from '../../libs/switchCase';
import validationSchema from './validationSchema';
import {allowedFileTypes, maxFileSize} from '../../config';
import {fIleTypeError, fileTooLarge, unexpectedError} from '../../config/messages';

export class ProductContainer extends React.Component {

      state = { photos: [] }

      initialValues = { description: '', name: '', filename: '', filepath: '' }

      componentWillMount () {
            const { id } = this.props.match.params;
            if (id) {
                  this.props.dispatch.products.getOne(id);
            }
      }

      componentWillReceiveProps (nextProps) {
            const { selected } = nextProps.products;
            if (isEqual(selected, this.props.products.selected)) return;
            const { filename, filepath } = selected;
            this.setState({ filename, filepath });
      }

      handleDelete = () => {
            const { id } = this.props.match.params;
            const { filename } = this.state;
            this.props.dispatch.products.remove({ id, filename });
      }

      onDropRejected = ([file]) => {
            let sizeError = {}, typeError = {};
            const { type, size } = file;
            // if size too large
            sizeError.case = maxFileSize < size;
            sizeError.then = () => fileTooLarge(maxFileSize);
            // if file type not allowed
            typeError.case = ! allowedFileTypes.includes( type );
            typeError.then = () => fIleTypeError(allowedFileTypes.join(', '));
            const message = switchCase([ sizeError, typeError ]);
            this.props.dispatch.alert.error(message || unexpectedError );
      }

      onDropAccepted =(setFieldValue, [file]) => {
            setFieldValue('file', file);
            const { preview: filepath, name: filename } = file;
            const existingFile = this.state.filename;
            this.setState({ filename, filepath, existingFile });
      }

      onSubmit = body => {
            const { id } = this.props.match.params;
            const { existingFile } = this.state;
            const arg = id ? { body, id, existingFile } : body;
            const action = id ? 'update' : 'create';
            this.props.dispatch.products[action](arg);
      }

      renderForm = ({...props, setFieldValue}) => (
            <Product {...props}
                  filepath={this.state.filepath}
                  onDrop={this.props.dispatch.alert.silence}
                  filename={this.state.filename}
                  editMode={!! this.props.match.params.id}
                  handleDelete={this.handleDelete}
                  onDropRejected={this.onDropRejected}
                  onDropAccepted={this.onDropAccepted.bind(this, setFieldValue)}
            />
      )

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
};

export default connect(({ products }) => ({ products }))(ProductContainer);

