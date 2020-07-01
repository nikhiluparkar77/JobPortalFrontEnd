import axios from "axios";
import {
  GET_INFO,
  INFO_LOADING,
  ADD_INFO,
  DELETE_INFO,
  ADD_PROFESSIONAL,
  DELETE_PROFESSIONAL,
  ADD_EDUCATION,
  APPLY_JOBS,
  DELETE_JOBS,
  SAVE_JOBS,
} from "./Types";

// Get Info
export const getCurrentInfo = () => (dispatch) => {
  dispatch(setInfoLoading());
  axios
    .get("http://localhost:5000/api/profile")
    .then((res) =>
      dispatch({
        type: GET_INFO,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// Create Info
export const createInfo = (infoData) => (dispatch) => {
  dispatch(setInfoLoading());
  axios
    .post("http://localhost:5000/api/profile", infoData)
    .then(
      (res) =>
        dispatch({
          type: ADD_INFO,
          payload: res.data,
        }),
      (window.location = "/profile")
    )
    .catch((err) => console.log(err));
};

// Delete Info
export const deleteInfo = (id, userId) => (dispatch) => {
  dispatch(setInfoLoading());
  axios
    .delete(`http://localhost:5000/api/profile/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_INFO,
        payload: res.data,
      })((window.location = `/cerate-profile/${userId}`))
    )
    .catch((err) => console.log(err));
};

// Add Professional
export const addProfessional = (id, eduData) => (dispatch) => {
  axios
    .post(`http://localhost:5000/api/profile/professional/${id}`, eduData)
    .then((res) =>
      dispatch({
        type: ADD_PROFESSIONAL,
        payload: res.data,
      })((window.location = "/profile"))
    )
    .catch((err) => console.log(err));
};

// Delete Professional
export const deleteProfessional = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/profile/professional/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_PROFESSIONAL,
        payload: res.data,
      })((window.location = "/profile"))
    )
    .catch((err) => console.log(err));
};

// Add Education
export const addEducation = (id, EduData) => (dispatch) => {
  axios
    .post(`http://localhost:5000/api/profile/educational/${id}`, EduData)
    .then((res) =>
      dispatch({
        type: ADD_EDUCATION,
        payload: res.data,
      })((window.location = "/profile"))
    )
    .catch((err) => console.log(err));
};

// Delete Education
export const deleteEducation = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/profile/educational/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_PROFESSIONAL,
        payload: res.data,
      })((window.location = "/profile"))
    )
    .catch((err) => console.log(err));
};

// Profile Loading
export const setInfoLoading = () => {
  return {
    type: INFO_LOADING,
  };
};

// Apply Job
export const applyJob = (applyJobData, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/profile/applyjob/", applyJobData)
    .then(
      (res) =>
        dispatch({
          type: APPLY_JOBS,
          payload: res.data,
        }),
      history.push("/list-apply-job")
    )
    .catch((err) => console.log(err));
};

// Delete ApplyJob
export const deleteApplyJob = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/profile/applyjob/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_JOBS,
        payload: res.data,
      })((window.location = "/list-apply-job"))
    )
    .catch((err) => console.log(err));
};

// Svae Job
export const saveJob = (saveJobData, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/profile/savejob/", saveJobData)
    .then(
      (res) =>
        dispatch({
          type: SAVE_JOBS,
          payload: res.data,
        }),
      history.push("/list-save-job")
    )
    .catch((err) => console.log(err));
};

// Delete ApplyJob
export const deleteSaveJob = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/profile/savejob/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_JOBS,
        payload: res.data,
      })((window.location = "/list-save-job"))
    )
    .catch((err) => console.log(err));
};
