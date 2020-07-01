import { combineReducers } from "redux";
import JobReducer from "./JobReducer";
import InfoReducer from "./InfoReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  auth: AuthReducer,
  info: InfoReducer,
  jobs: JobReducer,
});
