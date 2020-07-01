import { GET_JOB, JOB_DETAILS } from "../Action/Types";

const initalState = {
  jobs: [],
  job: [],
};
export default function (state = initalState, action) {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        jobs: action.payload.jobs,
      };
    case JOB_DETAILS:
      return {
        ...state,
        job: [action.payload.job],
      };
    default:
      return state;
  }
}
