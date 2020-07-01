import HomeComponent from "../HomePage/HomeComponent";
import LoginComponent from "../AuthComponent/LoginComponent";
import RegisterComponent from "../AuthComponent/RegisterComponent";
import JobDetails from "../JobDetails/JobDetails";
import ProfileInfo from "../PersonalInfo/ProfileInfo";

const AppRoutes = [
  { path: "/profile", component: ProfileInfo },
  { path: "/job-details/:jobId", component: JobDetails },
  { path: "/sign-up", component: RegisterComponent },
  { path: "/sign-in", component: LoginComponent },
  { path: "/", component: HomeComponent },
];

export default AppRoutes;
