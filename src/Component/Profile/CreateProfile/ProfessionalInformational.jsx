import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addProfessional,
  getCurrentInfo,
} from "../../../Redux/Action/InfoAction";

class ProfessionalInformational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Skills: "",
      Company: "",
      Position: "",
      Experience: "",
    };

    this.OnChange = this.OnChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentInfo();
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  OnSubmit(e) {
    e.preventDefault();
    const eduData = {
      Skills: this.state.Skills,
      Company: this.state.Company,
      Position: this.state.Position,
      Experience: this.state.Experience,
    };

    this.props.addProfessional(this.props.info.info._id, eduData);
  }

  render() {
    const { info } = this.props.info;

    return (
      <div className="ProfessionalInfo" style={{ margin: "35px 0px" }}>
        <div className="container">
          <p style={{ fontSize: "24px", fontWeight: "600" }}>
            Professional Info
          </p>
          <hr />
          <form onSubmit={this.OnSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Skills:-</label>
                  <textarea
                    rows="3"
                    id="Skills"
                    name="Skills"
                    className="form-control"
                    value={this.state.Skills}
                    required
                    onChange={this.OnChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Company:-</label>
                  <input
                    type="text"
                    name="Company"
                    value={this.state.Company}
                    id="Company"
                    className="form-control"
                    required
                    onChange={this.OnChange}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Position:-</label>
                  <input
                    type="text"
                    id="Position"
                    className="form-control"
                    name="Position"
                    required
                    value={this.state.Position}
                    onChange={this.OnChange}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Experience:-</label>
                  <input
                    type="text"
                    id="Experience"
                    className="form-control"
                    name="Experience"
                    required
                    value={this.state.Experience}
                    onChange={this.OnChange}
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

ProfessionalInformational.propTypes = {
  auth: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  addProfessional: PropTypes.func.isRequired,
  getCurrentInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  info: state.info,
});

export default connect(mapStateToProps, { addProfessional, getCurrentInfo })(
  ProfessionalInformational
);
