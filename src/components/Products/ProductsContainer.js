import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Products from "./Products";

export class ProductsContainer extends React.Component {
      componentWillMount() {
            this.props.getAll();
      }

      render() {
            return <Products list={this.props.products.all} />;
      }
}

ProductsContainer.defaultProps = {
      products: {
            all: []
      }
};

ProductsContainer.propTypes = {
      getAll: PropTypes.func.isRequired,
      products: PropTypes.shape({
            all: PropTypes.array.isRequired
      }),
};

export default connect(
      ({ products }) => ({ products }),
      ({ products: { getAll } }) => ({ getAll })
)(ProductsContainer);
