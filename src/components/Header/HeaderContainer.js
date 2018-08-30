import React from 'react';
import { connect } from 'react-redux';
import Component from './Header';

export class Container extends React.Component {

      render() {
            const { logout, authenticated } = this.props;
            return (
                  <Component
                        logout={logout}
                        authenticated={authenticated}
                  />
            );
      }
};

export default connect(
      ({ authenticated }) => ({ authenticated }),
      ({ authenticated: { logout }}) => ({ logout })
)( Container );

