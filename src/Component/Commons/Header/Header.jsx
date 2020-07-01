import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../Redux/Action/AuthActions";

class Header extends Component {
  OnClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { user, isAuthenticated } = this.props.auth;
    let InPutLink = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/sign-up">
            <i className="far fa-chart-bar"></i>Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sign-in">
            <i className="far fa-copy"></i>Sign In
          </Link>
        </li>
      </ul>
    );

    let OutPutLink = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/company">
            <i className="far fa-calendar-alt"></i>Company
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            {" "}
            <img
              src={user.avatar}
              className="rounded-circle"
              style={{ width: "25px", marginRight: "5px" }}
              alt={user.name}
            />{" "}
            {user.name}
          </a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
            <Link className="dropdown-item" to="/list-save-job">
              Save Jobs
            </Link>
            <Link className="dropdown-item" to="/list-apply-job">
              Apply Jobs
            </Link>
            <a
              className="dropdown-item"
              href="#"
              onClick={this.OnClick.bind(this)}
            >
              Logout
            </a>
          </div>
        </li>
      </ul>
    );

    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <Link className="navbar-brand navbar-logo" to="/">
              Job Application
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars text-white"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {isAuthenticated ? OutPutLink : InPutLink}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Header);
