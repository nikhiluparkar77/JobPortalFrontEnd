import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCurrentInfo,
  deleteInfo,
  deleteProfessional,
  deleteEducation,
} from "../../Redux/Action/InfoAction";
import { deleteUser } from "../../Redux/Action/AuthActions";

class DisplayProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: [],
      email: "",
    };
    this.DeleteInfo = this.DeleteInfo.bind(this);
    this.DeleteUser = this.DeleteUser.bind(this);
    this.DeleteProfessional = this.DeleteProfessional.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.info.length === 0) {
      const id = nextProps.auth.user.id;
      window.location = `/cerate-profile/${id}`;
    }
    const dataSet = this.state.information;
    dataSet.push(nextProps.info);
    this.setState({
      information: dataSet,
      id: nextProps.auth.user.id,
    });
  }

  DeleteInfo() {
    this.props.deleteInfo();
  }
  DeleteProfessional(id) {
    this.props.deleteProfessional(id);
  }
  DeleteEducation(id) {
    this.props.deleteEducation(id);
  }
  DeleteUser(id) {
    this.props.deleteUser(id);
  }
  render() {
    const { user } = this.props.auth;
    const { info } = this.props;

    const informationData = (
      <div className="DisplayProfile">
        {this.state.information.map((item, index) => (
          <div key={index}>
            <div className="row">
              <div className="col-md-8">
                <p style={{ fontSize: "24px", fontWeight: "600" }}>
                  Personal Info
                </p>
              </div>
              <div className="col-md-4">
                <button
                  onClick={(e) => {
                    this.DeleteInfo(item._id);
                    this.DeleteUser(user.id);
                  }}
                  type="button"
                  className="btn btn-outline-danger"
                  style={{ display: "block", width: "100%" }}
                >
                  Delete Profile
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>First Name:- {item.FirstName}</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Last Name:- {item.LastName}</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email id.:- {item.EmailId}</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Phone:- {item.Phone}</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Date Of Birth:-{item.DateOfBirth}</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Current City:- {item.CurrentCity}</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Permanent Address:- {item.PermanentAddress}</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>State:- {item.State}</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Nationality:- {item.Nationality}</label>
                </div>
              </div>
            </div>
            <hr style={{ marginBottom: "30px" }} />
            <div className="row">
              <div className="col-md-6">
                <p style={{ fontSize: "24px", fontWeight: "600" }}>
                  Professional Info
                </p>
              </div>
              <div className="col-md-6">
                <div className="form-group text-right">
                  {item.professional.length === 0 ? (
                    <Link
                      to={`/professional/${item._id}`}
                      className="btn btn-outline-dark"
                    >
                      Add Details{" "}
                    </Link>
                  ) : (
                    <button
                      className="btn btn-outline-danger"
                      onClick={(e) => {
                        this.DeleteProfessional(item._id);
                      }}
                    >
                      Delete Details{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>
                    Skills:-{" "}
                    {item.professional.length === 1
                      ? item.professional[0].Skills
                      : null}
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Company:-{" "}
                    {item.professional.length === 1
                      ? item.professional[0].Company
                      : null}
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Position:-{" "}
                    {item.professional.length === 1
                      ? item.professional[0].Position
                      : item.professional}
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Experience:-{" "}
                    {item.professional.length === 1
                      ? item.professional[0].Experience
                      : item.professional}
                  </label>
                </div>
              </div>
            </div>
            <hr style={{ marginBottom: "30px" }} />
            <div className="row">
              <div className="col-md-6">
                <p style={{ fontSize: "24px", fontWeight: "600" }}>
                  Educational Info
                </p>
              </div>
              <div className="col-md-6">
                <div className="form-group text-right">
                  {item.educational.length === 0 ? (
                    <Link
                      to={`/education/${item._id}`}
                      className="btn btn-outline-dark"
                    >
                      Add Details
                    </Link>
                  ) : (
                    <button
                      className="btn btn-outline-danger"
                      onClick={(e) => {
                        this.DeleteEducation(item._id);
                      }}
                    >
                      Delete Details{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    SSC Bord Name:-{" "}
                    {item.educational.length === 1
                      ? item.educational[0].SSCBordName
                      : item.educational}
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Year:-{" "}
                    {item.educational.length === 1
                      ? item.educational[0].SSCYear
                      : item.educational}
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Percentage:-{" "}
                    {item.educational.length === 1
                      ? item.educational[0].SSCPercentage
                      : item.educational}
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    HSC Bord Name:-{" "}
                    {item.educational.length === 1
                      ? item.educational[0].HSCBordName
                      : item.educational}
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Year:-{" "}
                    {item.educational.length === 1
                      ? item.educational[0].HSCYear
                      : item.educational}
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Percentage:-{" "}
                    {item.educational.length === 1
                      ? item.educational[0].HSCPercentage
                      : item.educational}
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Graduation UniverSity:-{" "}
                    {item.educational.length === 1
                      ? item.educational[0].GraduationUniverSity
                      : item.educational}
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Year:-{" "}
                    {item.educational.length === 1
                      ? item.educational[0].GraduationYear
                      : item.educational}
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Percentage:-{" "}
                    {item.educational.length === 1
                      ? item.educational[0].GraduationPercentage
                      : item.educational}
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div>
        {this.state.information.length === 0 ? (
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
        ) : (
          informationData
        )}
      </div>
    );
  }
}

DisplayProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  info: PropTypes.array.isRequired,
  getCurrentInfo: PropTypes.func.isRequired,
  deleteInfo: PropTypes.func.isRequired,
  deleteProfessional: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  info: state.info.info,
});

export default connect(mapStateToProps, {
  getCurrentInfo,
  deleteInfo,
  deleteProfessional,
  deleteEducation,
  deleteUser,
})(DisplayProfile);
