import { connect } from "react-redux";
import Component from "./SignUpContainer";

export default connect(
      null,
      ({ auth: { signUp, confirmSignUp } }) => ({ signUp, confirmSignUp })
)(Component);
