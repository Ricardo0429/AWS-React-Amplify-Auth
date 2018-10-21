import React from 'react';
import Products from './Products';
import {connect} from 'react-redux';

export class ProductsContainer extends React.Component {

      componentWillMount() {
            this.props.getAll();
      }

      render() {
            return (
                 <Products list={this.props.products.all} />
            );
      }
};

export default connect(
      ({ products }) => ({ products }),
      ({ products: { getAll }}) => ({ getAll })
)(ProductsContainer);

