import { connect } from "react-redux";
import Component from "./ProductsContainer";

export default connect(
      ({ products }) => ({ products }),
      ({ products: { getAll } }) => ({ getAll })
)(Component);
