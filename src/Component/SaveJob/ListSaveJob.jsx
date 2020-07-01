import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { getCurrentInfo, deleteSaveJob } from "../../Redux/Action/InfoAction";

class ListSaveJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SaveJobs: [],
    };
    this.DeleteClick = this.DeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentInfo();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      SaveJobs: nextProps.info.info[0].savejob,
    });
  }

  DeleteClick(id) {
    this.props.deleteSaveJob(id);
  }

  render() {
    console.log();
    return (
      <div className="ApplyedJoblist" style={{ margin: "35px 0px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p style={{ fontSize: "24px", fontWeight: "600" }}>Save Jobs</p>
              <hr />
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Company</th>
                    <th>Experience</th>
                    <th>Save Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.SaveJobs.map((item, index) => (
                    <tr key={index}>
                      <td>{item.position}</td>
                      <td>{item.company}</td>
                      <td>{item.experience}</td>
                      <td>
                        <Moment format="YYYY/MM/DD">{item.date}</Moment>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListSaveJob.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentInfo: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired,
  deleteSaveJob: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  info: state.info,
});

export default connect(mapStateToProps, { getCurrentInfo, deleteSaveJob })(
  ListSaveJob
);
