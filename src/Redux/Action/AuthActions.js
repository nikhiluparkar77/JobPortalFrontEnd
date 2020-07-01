import axios from "axios";
import { CURRENT_USER, DELETE_USER } from "./Types";
import setAuthToken from "../../Component/setAuth/setAuthToken";
import jwt_decode from "jwt-decode";

export const SignUp = (SignUpData, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/SignUp", SignUpData)
    .then(
      (res) =>
        dispatch({
          type: CURRENT_USER,
          payload: res.data,
        }),
      history.push("/sign-in")
    )
    .catch((err) => console.log(err));
};

export const SignIn = (userData) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/SignIn", userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => console.log(err));
};

export const deleteUser = (userId) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/DeleteUser/${userId}`)
    .then((res) =>
      dispatch({
        type: DELETE_USER,
        payload: res.data,
      })((window.history = "/sign-up"))(localStorage.removeItem("jwtToken"))
    )
    .catch((err) => console.log(err));
};

export const setCurrentUser = (decoded) => {
  return {
    type: CURRENT_USER,
    payload: decoded,
  };
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser(false));
};
