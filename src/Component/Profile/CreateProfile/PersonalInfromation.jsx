import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createInfo } from "../../../Redux/Action/InfoAction";

class PersonalInfromation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      FirstName: "",
      LastName: "",
      EmailId: "",
      Phone: "",
      DateOfBirth: "",
      CurrentCity: "",
      PermanentAddress: "",
      State: "",
      Nationality: "",
    };
    this.OnChange = this.OnChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }

  OnSubmit(e) {
    e.preventDefault();
    const infoData = {
      userId: this.props.auth.user.id,
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      EmailId: this.state.EmailId,
      Phone: this.state.Phone,
      DateOfBirth: this.state.DateOfBirth,
      CurrentCity: this.state.CurrentCity,
      PermanentAddress: this.state.PermanentAddress,
      State: this.state.State,
      Nationality: this.state.Nationality,
    };

    this.props.createInfo(infoData);
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="PersonalInfo" style={{ margin: "35px 0px" }}>
        <div className="container">
          <p style={{ fontSize: "24px", fontWeight: "600" }}>Personal Info</p>
          <hr />
          <form onSubmit={this.OnSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>First Name:-</label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    value={this.state.FirstName}
                    className="form-control"
                    required
                    onChange={this.OnChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Last Name:-</label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    className="form-control"
                    required
                    value={this.state.LastName}
                    onChange={this.OnChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Email id.:-</label>
                  <input
                    type="text"
                    id="EmailId"
                    name="EmailId"
                    value={this.state.EmailId}
                    className="form-control"
                    required
                    onChange={this.OnChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Phone:-</label>
                  <input
                    type="text"
                    value={this.state.Phone}
                    name="Phone"
                    onChange={this.OnChange}
                    id="Phone"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Date Of Birth:-</label>
                  <input
                    type="text"
                    value={this.state.DateOfBirth}
                    id="DateOfBirth"
                    className="form-control"
                    name="DateOfBirth"
                    onChange={this.OnChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Current City:-</label>
                  <input
                    type="text"
                    value={this.state.CurrentCity}
                    id="CurrentCity"
                    className="form-control"
                    name="CurrentCity"
                    onChange={this.OnChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Permanent Address:-</label>
                  <textarea
                    rows="3"
                    value={this.state.PermanentAddress}
                    id="PermanentAddress"
                    className="form-control"
                    name="PermanentAddress"
                    onChange={this.OnChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>State:-</label>
                  <input
                    type="text"
                    value={this.state.State}
                    id="State"
                    className="form-control"
                    name="State"
                    onChange={this.OnChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Nationality:-</label>
                  <input
                    type="text"
                    id="Nationality"
                    className="form-control"
                    value={this.state.Nationality}
                    name="Nationality"
                    onChange={this.OnChange}
                    required
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <button
                    type="submit"
                    style={{ width: "20%" }}
                    className="btn btn-outline-info"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <hr />
      </div>
    );
  }
}

PersonalInfromation.propTypes = {
  auth: PropTypes.object.isRequired,
  createInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { createInfo })(PersonalInfromation);
