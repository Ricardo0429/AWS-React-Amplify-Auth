import Alert from './Alert';
import {connect} from 'react-redux';

export default connect(
      ({alert}) => ({alert}),
      ({alert: {silence}}) => ({silence})
)(Alert);

