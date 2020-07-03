import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { getCurrentInfo, deleteApplyJob } from "../../Redux/Action/InfoAction";

class ListApplyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppliedJob: [],
    };
    this.DeleteClick = this.DeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentInfo();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      AppliedJob: nextProps.info.info.applyjob,
    });
  }

  DeleteClick(id) {
    this.props.deleteApplyJob(id);
  }

  render() {
    let display;
    if (this.state.AppliedJob.length === 0) {
      display = (
        <div>
          <p style={{ fontSize: "18px", textAlign: "center" }}>
            No Apply Job In List
          </p>
        </div>
      );
    } else {
      display = (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Position</th>
              <th>Company</th>
              <th>Experience</th>
              <th>Apply Date</th>
              <th>Join Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.AppliedJob.map((item, index) => (
              <tr key={index}>
                <td>{item.position}</td>
                <td>{item.company}</td>
                <td>{item.experience}</td>
                <td>
                  <Moment format="YYYY/MM/DD">{item.date}</Moment>
                </td>
                <td>
                  {" "}
                  <Moment format="YYYY/MM/DD">{item.joinDate}</Moment>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) => {
                      this.DeleteClick(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return (
      <div className="ApplyedJoblist" style={{ margin: "35px 0px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p style={{ fontSize: "24px", fontWeight: "600" }}>Apply Jobs</p>
              <hr />
              {display}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListApplyJobs.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentInfo: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired,
  deleteApplyJob: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  info: state.info,
});

export default connect(mapStateToProps, { getCurrentInfo, deleteApplyJob })(
  ListApplyJobs
);
