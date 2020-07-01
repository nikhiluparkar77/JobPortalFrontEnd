import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { jobDetails } from "../../Redux/Action/JobListingAction";

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newJob: {},
    };
  }

  componentDidMount() {
    this.props.jobDetails(this.props.match.params.jobId);
  }

  render() {
    const { job } = this.props.job;
    const { user, isAuthenticated } = this.props.auth;
    const JobDetail = job.map((item, index) => (
      <div className="row" key={index}>
        <div className="col-md-7">
          <div className="row" style={{ margin: "15px 0px" }}>
            <div className="col-lg-3">
              <h5 style={{ fontSize: "18px" }}>Position:- </h5>
            </div>
            <div className="col-lg-6" id="position">
              {item.position}
            </div>
          </div>
          <div className="row" style={{ margin: "15px 0px" }}>
            <div className="col-lg-3">
              <h5 style={{ fontSize: "18px" }}>Company:- </h5>
            </div>
            <div className="col-lg-6">{item.company}</div>
          </div>
          <div className="row" style={{ margin: "15px 0px" }}>
            <div className="col-lg-3">
              <h5 style={{ fontSize: "18px" }}>Openings:- </h5>
            </div>
            <div className="col-lg-6">{item.opening}</div>
          </div>
          <div className="row" style={{ margin: "15px 0px" }}>
            <div className="col-lg-3">
              <h5 style={{ fontSize: "18px" }}>Experience:- </h5>
            </div>
            <div className="col-lg-6">{item.experience}</div>
          </div>
          <div className="row" style={{ margin: "15px 0px" }}>
            <div className="col-lg-3">
              <h5 style={{ fontSize: "18px" }}>Salary:- </h5>
            </div>
            <div className="col-lg-6">{item.salary}</div>
          </div>
          <div className="row" style={{ margin: "15px 0px" }}>
            <div className="col-lg-3">
              <h5 style={{ fontSize: "18px" }}>Skill:- </h5>
            </div>
            <div className="col-lg-6">{item.skill}</div>
          </div>
          <div className="row" style={{ margin: "15px 0px" }}>
            <div className="col-lg-3">
              <h5 style={{ fontSize: "18px" }}>Location:- </h5>
            </div>
            <div className="col-lg-6">{item.location}</div>
          </div>
        </div>
        <div className="col-lg-3 text-right">
          {isAuthenticated ? (
            <Link to={`/save-job/${item._id}`}>
              <button className="btn btn-outline-primary">SAVE</button>
            </Link>
          ) : (
            <Link to="/sign-in">
              <button className="btn btn-outline-primary">SAVE</button>
            </Link>
          )}

          {isAuthenticated ? (
            <Link to={`/apply-job/${item._id}`}>
              <button
                className="btn btn-outline-secondary"
                style={{ marginLeft: "25px" }}
              >
                APPLY
              </button>
            </Link>
          ) : (
            <Link to="/sign-in">
              <button
                className="btn btn-outline-secondary"
                style={{ marginLeft: "25px" }}
              >
                APPLY
              </button>
            </Link>
          )}
        </div>
      </div>
    ));

    return (
      <div className="JobDetails">
        <div className="container">
          <div className="col-md-12">
            <h3 style={{ margin: "15px 0px" }}>Job Details:-</h3>
            <hr />
            {JobDetail}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

JobDetails.propTypes = {
  jobDetails: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.jobs,
  auth: state.auth,
});

export default connect(mapStateToProps, { jobDetails })(JobDetails);
