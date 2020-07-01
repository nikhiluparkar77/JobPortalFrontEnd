import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SignUp } from "../../Redux/Action/AuthActions";

class RegisterComponent extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticat) {
      this.props.history.push("/");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.OnChange = this.OnChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }

  OnSubmit(e) {
    e.preventDefault();
    const SignUpData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.SignUp(SignUpData, this.props.history);
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                  Sign Up
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
                        placeholder="Name"
                        name="name"
                        onChange={this.OnChange}
                        value={this.state.name}
                        required
                        style={{ height: "45px" }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ margin: "15px 0px 25px" }}
                    >
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Email"
                        name="email"
                        onChange={this.OnChange}
                        value={this.state.email}
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
                        onChange={this.OnChange}
                        value={this.state.password}
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
                        Sign Up
                      </button>
                    </div>
                    <label className="checkbox float-left">
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    <Link to="/sign-in" className="float-right">
                      Sign In{" "}
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

RegisterComponent.propTypes = {
  SignUp: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { SignUp })(RegisterComponent);
