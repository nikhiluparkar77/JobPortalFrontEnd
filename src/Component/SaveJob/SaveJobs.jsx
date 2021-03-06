import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { jobDetails } from "../../Redux/Action/JobListingAction";
import { saveJob, getCurrentInfo } from "../../Redux/Action/InfoAction";

class SaveJobs extends Component {
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
    };
    this.OnSubmit = this.OnSubmit.bind(this);
    this.OnChange = this.OnChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      jobId: nextProps.job.job[0]._id,
      position: nextProps.job.job[0].position,
      company: nextProps.job.job[0].company,
      experience: nextProps.job.job[0].experience,
    });
  }

  OnSubmit(e) {
    e.preventDefault();
    const saveJobData = {
      jobId: this.state.jobId,
      position: this.state.position,
      company: this.state.company,
      experience: this.state.experience,
    };
    this.props.saveJob(saveJobData, this.props.customprops.history);
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
            <p style={{ fontSize: "24px", fontWeight: "600" }}>Save Job</p>
            <hr />
            <h4 style={{ margin: "15px 0px 30px", fontWeight: "normal" }}>
              If you want to save your job for future reference.
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
              <p style={{ fontSize: "24px", fontWeight: "600" }}>Save Job</p>
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
                <div className="col-md-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-info">
                      Save Job
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

SaveJobs.propTypes = {
  auth: PropTypes.object.isRequired,
  jobDetails: PropTypes.func.isRequired,
  saveJob: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
  getCurrentInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.jobs,
  auth: state.auth,
  info: state.info,
});

export default connect(mapStateToProps, {
  jobDetails,
  saveJob,
  getCurrentInfo,
})(SaveJobs);
