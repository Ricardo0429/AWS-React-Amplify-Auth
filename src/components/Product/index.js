import { connect } from "react-redux";
import Component from "./ProductContainer";

export default connect(({ products }) => ({ products }))(Component);
