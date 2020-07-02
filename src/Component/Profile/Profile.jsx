import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DisplayProfile from "./DisplayProfile";

class Profile extends Component {
  render() {
    const { user } = this.props.auth;
    const { auth } = this.props;
    const { info } = this.props.info;

    const CreateProfile = (
      <Link to={`/cerate-profile/${user.id}`}>
        {" "}
        <button
          type="button"
          className="btn btn-outline-primary"
          style={{
            display: "block",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          Create Profile
        </button>
      </Link>
    );

    const EditProfile = (
      <>
        <Link to="/profile">
          {" "}
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{
              display: "block",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            Profile
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-outline-danger"
          style={{
            display: "block",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          Delete Account
        </button>
      </>
    );

    return (
      <div
        className="profile"
        className="profile"
        style={{ margin: "35px 0px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={user.avatar}
                    className="rounded-circle"
                    style={{ display: "block", margin: "auto", width: "100px" }}
                  />
                  <h5 className="p-2" style={{ textAlign: "center" }}>
                    {user.name}
                  </h5>
                </div>
                <div className="card-body">
                  {info.length > 0 ? CreateProfile : EditProfile}
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <DisplayProfile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  info: state.info,
});

export default connect(mapStateToProps)(Profile);
