import {connect} from 'react-redux';
import Component from './RequireNotAuth';

export default connect(({ auth: { loggedIn }}) => ({ loggedIn }))(Component);