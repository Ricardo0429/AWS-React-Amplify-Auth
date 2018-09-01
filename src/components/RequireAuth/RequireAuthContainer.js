import {connect} from 'react-redux';
import Component from './RequireAuth';

export default connect(({ auth: { loggedIn }}) => ({ loggedIn }))(Component);