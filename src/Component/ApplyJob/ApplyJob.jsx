import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { jobDetails } from "../../Redux/Action/JobListingAction";
import { applyJob, getCurrentInfo } from "../../Redux/Action/InfoAction";

class ApplyJob extends Component {
  componentDidMount() {
    this.props.jobDetails(this.props.customprops.match.params.id);
    this.props.getCurrentInfo();
  }

  constructor(props) {
    super(props);
    this.state = {
      jobId: "",
      position: "",
      company: "",
      experience: "",
      joinDate: "",
      resinDate: "",
    };
    this.OnSubmit = this.OnSubmit.bind(this);
    this.OnChange = this.OnChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      jobId: nextProps.job.job[0]._id,
      position: nextProps.job.job[0].position,
      company: nextProps.job.job[0].company,
    });
  }

  OnSubmit(e) {
    e.preventDefault();
    const ApplyData = {
      jobId: this.state.jobId,
      position: this.state.position,
      company: this.state.company,
      experience: this.state.experience,
      joinDate: this.state.joinDate,
      resinDate: this.state.resinDate,
    };
    this.props.applyJob(ApplyData, this.props.customprops.history);
  }
  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { job } = this.props.job;
    const { user } = this.props.auth;
    let display;

    if (this.props.info.info.length === 0) {
      display = (
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "24px", fontWeight: "600" }}>Apply Job</p>
            <hr />
            <h4 style={{ margin: "15px 0px 30px", fontWeight: "normal" }}>
              If you want to Apply your job for future reference.
              <br /> Frist create your profile
            </h4>
            <Link
              className="btn btn-outline-primary"
              to={`/cerate-profile/${user.id}`}
            >
              {" "}
              Create Profile
            </Link>
          </div>
        </div>
      );
    } else {
      display = (
        <form onSubmit={this.OnSubmit}>
          <div className="row">
            <div className="col-md-8 m-auto">
              <p style={{ fontSize: "24px", fontWeight: "600" }}>Apply Job</p>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Position:-</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      className="form-control"
                      value={this.state.position}
                      required
                      onChange={this.OnChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Company:-</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-control"
                      value={this.state.company}
                      onChange={this.OnChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Experience:-</label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      className="form-control"
                      value={this.state.experience}
                      onChange={this.OnChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Join Date:-</label>
                    <input
                      type="date"
                      id="joinDate"
                      name="joinDate"
                      className="form-control"
                      value={this.state.joinDate}
                      required
                      onChange={this.OnChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Resign Date:-</label>
                    <input
                      type="date"
                      id="resinDate"
                      name="resinDate"
                      className="form-control"
                      value={this.state.resinDate}
                      onChange={this.OnChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-info">
                      Apply Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    }
    return (
      <div className="ApplyJobs" style={{ margin: "35px 0px" }}>
        <div className="container">{display}</div>
      </div>
    );
  }
}

ApplyJob.propTypes = {
  auth: PropTypes.object.isRequired,
  jobDetails: PropTypes.func.isRequired,
  applyJob: PropTypes.func.isRequired,
  getCurrentInfo: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.jobs,
  auth: state.auth,
  info: state.info,
});

export default connect(mapStateToProps, {
  jobDetails,
  applyJob,
  getCurrentInfo,
})(ApplyJob);
