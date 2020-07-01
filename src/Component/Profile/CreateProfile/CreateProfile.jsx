import React, { Component } from "react";
import PersonalInfromation from "./PersonalInfromation";
import ProfessionalInformational from "./ProfessionalInformational";
import EducationalInfromational from "./EducationalInfromational";

class CreateProfile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-tabs" style={{ margin: "25px 0px" }}>
                <li className="nav-item">
                  <a
                    href="#PersonalInfo"
                    data-toggle="tab"
                    className="nav-link active"
                  >
                    Personal Info
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#ProfessionalInfo"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Professional Info
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#EducationalInfo"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Educational Info
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="PersonalInfo">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Personal Info
                  </p>
                  <PersonalInfromation />
                </div>
                <div className="tab-pane fade" id="ProfessionalInfo">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Professional Info
                  </p>
                  <ProfessionalInformational />
                </div>
                <div className="tab-pane fade" id="EducationalInfo">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Educational Info
                  </p>
                  <EducationalInfromational />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProfile;
