import { connect } from "react-redux";
import Alert from "./Alert";

export default connect(
      ({ alert }) => ({ alert }),
      ({ alert: { silence } }) => ({ silence })
)(Alert);
