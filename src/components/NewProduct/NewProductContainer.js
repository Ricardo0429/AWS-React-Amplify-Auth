import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import NewProduct from './NewProduct';
import validationSchema from './validationSchema';
import { allowedPhotoTypes, maxPhotoSize } from '../../config';
import { forbiddenFIleType, fileTooLarge } from '../../config/messages';

export class NewProductContainer extends React.Component {

      state = { photos: [] }

      intialValues = { description: '', files: null }

      onDropRejected = files => {
            let alert;
            // error message only for first rejected file
            const { type, size } = files[0];
            switch (true) {
                  case ! allowedPhotoTypes.includes( type ):
                  alert = forbiddenFIleType(allowedPhotoTypes.join(', ')) ;
                  break;
                  case maxPhotoSize < size:
                  alert = fileTooLarge(maxPhotoSize);
                  break;
            }
            this.props.alert.display(alert);
      }

      onDropAccepted =(setFieldValue, files) => {
            setFieldValue('files', files);
            const photos = files.map(({ preview, name }) => ({ preview, name }));
            this.setState({ photos: this.state.photos.concat(photos) });
      }

      onSubmit = values => {
            console.log('VALUES >>', values);
      }

      renderForm = props => (
            <NewProduct {...props}
                  photos={this.state.photos}
                  onDrop={this.props.alert.silence}
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

export default connect(null, ({ alert }) => ({ alert }))(NewProductContainer);

