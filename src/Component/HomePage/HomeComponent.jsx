import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { jobListing, jobDetails } from "../../Redux/Action/JobListingAction";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchJob: [],
    };
  }
  componentDidMount() {
    this.props.jobListing();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      SearchJob: nextProps.jobs.jobs,
    });
  }

  OnClick(id) {
    this.props.jobDetails(id);
  }

  OnChange(e) {
    let SearchJob = this.props.jobs.jobs;
    let SearchResult = SearchJob.filter((NewItem) => {
      let SearchKey = e.target.value.toLowerCase();
      return NewItem.position.toLowerCase().search(SearchKey) !== -1;
    });
    this.setState({
      SearchJob: SearchResult,
    });
  }

  render() {
    const jobList = this.state.SearchJob.map((item, index) => (
      <tr key={index}>
        <td align="center">{item.position}</td>
        <td align="center">{item.company}</td>
        <td align="center">{item.experience}</td>
        <td align="center">
          <Link to={`/job-details/${item._id}`}>
            {" "}
            <button
              className="btn btn-outline-primary"
              onClick={this.OnClick.bind(this, item._id)}
            >
              View
            </button>
          </Link>
        </td>
      </tr>
    ));

    return (
      <div className="MainPage">
        <div className="container">
          <div style={{ margin: "35px 0" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Job Position"
              onChange={this.OnChange.bind(this)}
              style={{ height: "45px", borderRadius: "0px" }}
            />
            <br />
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th className="text-center">Position</th>
                  <th className="text-center">Company</th>
                  <th className="text-center">Experence</th>
                  <th className="text-center">View Jobs</th>
                </tr>
              </thead>
              <tbody>{jobList}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

HomeComponent.propTypes = {
  jobs: PropTypes.object.isRequired,
  jobListing: PropTypes.func.isRequired,
  jobDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps, { jobListing, jobDetails })(
  HomeComponent
);
