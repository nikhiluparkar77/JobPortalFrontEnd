import {
  GET_INFO,
  ADD_INFO,
  DELETE_INFO,
  ADD_PROFESSIONAL,
  APPLY_JOBS,
} from "../Action/Types";

const initalState = {
  info: [],
  sinfo: {},
  professional: null,
  applyJob: null,
};
export default function (state = initalState, action) {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        info: action.payload.info,
      };
    case ADD_INFO:
      return {
        ...state,
        sinfo: [action.payload.info],
      };
    case DELETE_INFO:
      return {
        ...state,
        sinfo: [],
      };
    case APPLY_JOBS:
      return {
        ...state,
        applyJob: [action.payload.info],
      };

    default:
      return state;
  }
}
