import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SignIn } from "../../Redux/Action/AuthActions";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.OnSubmit = this.OnSubmit.bind(this);
    this.OnChange = this.OnChange.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticat) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (localStorage.jwtToken) {
      this.props.history.push("/");
    }
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  OnSubmit(e) {
    e.preventDefault();
    const SignInData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.SignIn(SignInData);
  }

  render() {
    return (
      <div className="SignIn" style={{ margin: "30px 0px 45px" }}>
        <div className="container pt-3">
          <div className="row justify-content-sm-center">
            <div className="col-sm-6 col-md-6">
              <div className="card border-info text-center">
                <div
                  className="card-header"
                  style={{ fontSize: "22px", fontWeight: "500" }}
                >
                  Sign In
                </div>
                <div className="card-body">
                  <form className="form-signin" onSubmit={this.OnSubmit}>
                    <div
                      className="form-group"
                      style={{ margin: "15px 0px 25px" }}
                    >
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Email"
                        name="email"
                        value={this.state.value}
                        onChange={this.OnChange}
                        required
                        style={{ height: "45px" }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ margin: "15px 0px 25px" }}
                    >
                      <input
                        type="password"
                        className="form-control mb-2"
                        placeholder="Password"
                        name="password"
                        value={this.state.value}
                        onChange={this.OnChange}
                        required
                        style={{ height: "45px" }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ margin: "15px 0px 25px" }}
                    >
                      <button
                        className="btn btn-lg btn-primary btn-block mb-1"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                    <label className="checkbox float-left">
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    <Link to="/sign-up" className="float-right">
                      Sign Up{" "}
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  SignIn: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { SignIn })(LoginComponent);
