import Alert from './Alert';
import React from 'react';
import {connect} from 'react-redux';

export default connect(
      ({alert}) => ({alert}),
      ({alert: {silence}}) => ({silence})
)(Alert);

