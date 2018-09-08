import React from 'react';
import { connect } from 'react-redux';
import Component from './Products';

export class Container extends React.Component {

      componentWillMount () {
            this.props.getAll();
      }

      render() {
            return (
                 <Component list={this.props.products} />
            );
      }
};

export default connect(
      ({ products }) => ({ products }),
      ({ products: { getAll }}) => ({ getAll })
)( Container );

