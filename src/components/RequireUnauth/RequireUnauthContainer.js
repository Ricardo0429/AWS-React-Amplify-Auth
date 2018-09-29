import {connect} from 'react-redux';
import Component from './RequireUnauth';

export default connect(({ auth: { loggedIn }}) => ({ loggedIn }))(Component);