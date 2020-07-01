import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { jobListing } from "../../Redux/Action/JobListingAction";
import CompanyList from "./CompanyList";
import OpeningPosition from "./OpeningPosition";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListOfCompany: CompanyList,
      Result: [],
      DataShow: [],
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.jobListing();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      Result: nextProps.jobs.jobs,
    });
  }

  onClick(name, e) {
    let value = document.querySelector("input");

    this.props.jobs.jobs.filter((item) => {
      console.log((value.checked = true));
      if ((value.checked = true)) {
        if (item.company == name) {
          const addItem = this.state.Result;
          addItem.push(item);
          this.setState({
            Result: addItem,
          });
        }
      } else {
        const removeItem = this.state.Result;
        removeItem.splice(item, item.length);
        this.setState({
          Result: removeItem,
        });
      }
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { jobs } = this.props.jobs;
    // console.log(this.state.DataShow);
    return (
      <div className="Company" style={{ margin: "35px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={{ borderRight: "1px solid #ddd" }}>
              {this.state.ListOfCompany.map((item, index) => (
                <div
                  key={index}
                  className="form-check"
                  style={{ margin: "15px 0" }}
                >
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={item.name}
                      onChange={this.onChange}
                      onClick={(e) => {
                        this.onClick(item.name);
                      }}
                    />
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="col-md-7">
              <OpeningPosition Result={this.state.Result} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Company.propTypes = {
  auth: PropTypes.object.isRequired,
  jobListing: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  auth: state.auth,
});

export default connect(mapStateToProps, { jobListing })(Company);
