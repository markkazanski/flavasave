import React from "react";
import PropTypes from "prop-types";
import validateInput from "../../actions/validations/login";
import TextFieldGroup from "./TextFieldGroup";
import { connect } from "react-redux";
import { loginAction } from "../../actions/loginActions";
import axios from "axios";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    errors: {},
    isLoading: false
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    // if not valid, set and populate state with errors
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit = event => {
    event.preventDefault();

    axios.post("api/login", { email: this.state.username, password: this.state.password });

    /*
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.loginAction(this.state).then(
        res => this.context.router.history.push("/userpage"),
        error =>
          this.setState({
            errors: error.response.data.errors,
            isLoading: false
          })
      );
    }
    */
  };

  render() {
    const { errors, username, password, isLoading } = this.state;
    return (
      <div className="sign-up-form">
        <form className="loginForm" onSubmit={this.onSubmit}>
          {errors.form && (
            <div className="alert alert-danger">{errors.form}</div>
          )}
          <TextFieldGroup
            error={errors.username}
            label="Username"
            onChange={this.onChange}
            value={username}
            field="username"
          />
          <TextFieldGroup
            error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={password}
            field="password"
            type="password"
          />
          <button
            type="submit"
            className="btn btn-primary btn-lg login-button"
            disabled={isLoading}
          >
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginAction: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { loginAction })(LoginForm);
