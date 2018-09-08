import React from 'react';
import { connect } from 'react-redux';
import Component from './Products';

export class Container extends React.Component {

      componentWillMount () {
            this.props.getAll();
      }

      handleProductClick = evt => {
            this.props.history.push(evt.currentTarget.getAttribute("href"))
      }

      render() {
            return (
                 <Component
                        list={this.props.products}
                        onClick={this.handleProductClick}
                  />
            );
      }
};

export default connect(
      ({ products }) => ({ products }),
      ({ products: { getAll }}) => ({ getAll })
)( Container );

