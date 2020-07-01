import axios from "axios";
import { GET_JOB, JOB_LOADING, JOB_DETAILS } from "./Types";

export const jobListing = () => (dispatch) => {
  dispatch(setJobLoading());
  axios
    .get("http://localhost:5000/api/job")
    .then((res) =>
      dispatch({
        type: GET_JOB,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const jobDetails = (id) => (dispatch) => {
  dispatch(setJobLoading());
  axios
    .get(`http://localhost:5000/api/job/${id}`)
    .then((res) =>
      dispatch({
        type: JOB_DETAILS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setJobLoading = () => {
  return {
    type: JOB_LOADING,
  };
};
