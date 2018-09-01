import { connect } from 'react-redux';
import Component from './Header';

export default connect(
      ({ auth: { loggedIn }}) => ({ loggedIn }),
      ({ auth: { logout }}) => ({ logout })
)( Component );

