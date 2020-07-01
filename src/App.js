import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import store from "./Redux/Store";
import setAuthToken from "./Component/setAuth/setAuthToken";

import PrivateRoute from "./Component/Routes/PrivateRoute";
import LoginComponent from "./Component/AuthComponent/LoginComponent";
import RegisterComponent from "./Component/AuthComponent/RegisterComponent";
import Header from "./Component/Commons/Header/Header";
import Footer from "./Component/Commons/Footer/Footer";
import { setCurrentUser } from "./Redux/Action/AuthActions";

import HomeComponent from "./Component/HomePage/HomeComponent";
import JobDetails from "./Component/JobDetails/JobDetails";
import Profile from "./Component/Profile/Profile";
import DisplayProfile from "./Component/Profile/DisplayProfile";
import EducationalInfromational from "./Component/Profile/CreateProfile/EducationalInfromational";
import ProfessionalInformational from "./Component/Profile/CreateProfile/ProfessionalInformational";
import PersonalInfromation from "./Component/Profile/CreateProfile/PersonalInfromation";
import Company from "./Component/Company/Company";
import ApplyJob from "./Component/ApplyJob/ApplyJob";
import ListApplyJobs from "./Component/ApplyJob/ListApplyJobs";
import ListSaveJob from "./Component/SaveJob/ListSaveJob";
import SaveJobs from "./Component/SaveJob/SaveJobs";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    localStorage.removeItem("jwtToken");
    window.location = "/sign-in";
  }
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />

          <Route path="/job-details/:jobId" component={JobDetails} />
          <Route path="/sign-in" exact component={LoginComponent} />
          <Route path="/sign-up" exact component={RegisterComponent} />
          <Route path="/" exact component={HomeComponent} />
          <Switch>
            <PrivateRoute path="/list-save-job" exact component={ListSaveJob} />
          </Switch>
          <Switch>
            <PrivateRoute path="/save-job/:id" exact component={SaveJobs} />
          </Switch>
          <Switch>
            <PrivateRoute
              path="/list-apply-job"
              exact
              component={ListApplyJobs}
            />
          </Switch>
          <Switch>
            <PrivateRoute path="/apply-job/:id" exact component={ApplyJob} />
          </Switch>
          <Switch>
            <PrivateRoute path="/company" exact component={Company} />
          </Switch>
          <Switch>
            <PrivateRoute
              path="/professional/:proId"
              exact
              component={ProfessionalInformational}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              path="/education/:eduId"
              exact
              component={EducationalInfromational}
            />
          </Switch>
          <Switch>
            <PrivateRoute path="/profile" exact component={Profile} />
          </Switch>
          <Switch>
            <PrivateRoute
              path="/profile-info/:profileId"
              exact
              component={DisplayProfile}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              path="/cerate-profile/:profileId"
              exact
              component={PersonalInfromation}
            />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
