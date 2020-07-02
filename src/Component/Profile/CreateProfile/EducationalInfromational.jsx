import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addEducation,
  deleteEducation,
  getCurrentInfo,
} from "../../../Redux/Action/InfoAction";

class EducationalInfromational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SSCBordName: "",
      SSCYear: "",
      SSCPercentage: "",
      HSCBordName: "",
      HSCYear: "",
      HSCPercentage: "",
      GraduationUniverSity: "",
      GraduationYear: "",
      GraduationPercentage: "",
    };
    this.OnChange = this.OnChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentInfo();
  }
  OnSubmit(e) {
    e.preventDefault();
    const EduData = {
      SSCBordName: this.state.SSCBordName,
      SSCYear: this.state.SSCYear,
      SSCPercentage: this.state.SSCPercentage,
      HSCBordName: this.state.HSCBordName,
      HSCYear: this.state.HSCYear,
      HSCPercentage: this.state.HSCPercentage,
      GraduationUniverSity: this.state.GraduationUniverSity,
      GraduationYear: this.state.GraduationYear,
      GraduationPercentage: this.state.GraduationPercentage,
    };

    this.props.addEducation(this.props.info.info._id, EduData);
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div style={{ margin: "35px 0px" }}>
        <div className="EducationalInfo container">
          <p style={{ fontSize: "24px", fontWeight: "600" }}>
            Educational Info
          </p>
          <hr />
          <form onSubmit={this.OnSubmit}>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label>SSC Bord Name:-</label>
                  <input
                    type="text"
                    id="SSCBordName"
                    name="SSCBordName"
                    onChange={this.OnChange}
                    value={this.state.SSCBordName}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Year:-</label>
                  <input
                    type="text"
                    id="SSCYear"
                    name="SSCYear"
                    onChange={this.OnChange}
                    value={this.state.SSCYear}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Percentage:-</label>
                  <input
                    type="text"
                    id="SSCPercentage"
                    name="SSCPercentage"
                    onChange={this.OnChange}
                    value={this.state.SSCPercentage}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label>HSC Bord Name:-</label>
                  <input
                    type="text"
                    id="HSCBordName"
                    className="form-control"
                    name="HSCBordName"
                    onChange={this.OnChange}
                    value={this.state.HSCBordName}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Year:-</label>
                  <input
                    type="text"
                    id="HSCYear"
                    name="HSCYear"
                    onChange={this.OnChange}
                    value={this.state.HSCYear}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Percentage:-</label>
                  <input
                    type="text"
                    id="HSCPercentage"
                    name="HSCPercentage"
                    onChange={this.OnChange}
                    value={this.state.HSCPercentage}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Graduation UniverSity:-</label>
                  <input
                    type="text"
                    id="GraduationUniverSity"
                    name="GraduationUniverSity"
                    onChange={this.OnChange}
                    value={this.state.GraduationUniverSity}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Year:-</label>
                  <input
                    type="text"
                    id="GraduationYear"
                    className="form-control"
                    name="GraduationYear"
                    onChange={this.OnChange}
                    value={this.state.GraduationYear}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Percentage:-</label>
                  <input
                    type="text"
                    id="GraduationPercentage"
                    className="form-control"
                    name="GraduationPercentage"
                    onChange={this.OnChange}
                    value={this.state.GraduationPercentage}
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
          <hr />
        </div>
      </div>
    );
  }
}
EducationalInfromational.propTypes = {
  auth: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  addEducation: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  getCurrentInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  info: state.info,
});

export default connect(mapStateToProps, {
  getCurrentInfo,
  addEducation,
  deleteEducation,
})(EducationalInfromational);
