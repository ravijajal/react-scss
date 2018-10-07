import { connect } from "react-redux";
import LoginComponent from "../components/Login/LoginComponent";
import { loginUserIfNeeded } from "../actions/user";

const mapDispatchToProps = {
  loginUserIfNeeded
};

const mapStateToProps = state => {
  const { user } = state;
  const { isLogging, isLoggedIn, item: userData } = user || {
    isLogging: false,
    isLoggedIn: false
  };

  return {
    userData,
    isLoggedIn,
    isLogging
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);
