import { CREATE_JOB, DELETE_JOB, UPDATE_JOB } from "../constants/jobConstants";

const initialState = [];

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_JOB:
      const job = action.payload;
      return [...state, job];
    case DELETE_JOB:
      const filteredJobList = state.filter((job) => job.id !== action.payload);
      return [...filteredJobList];
    case UPDATE_JOB:
      const updatedJobList = state.map((job) => {
        const jobId = action.payload.id;
        const newPriority = action.payload.priority;
        if (job.id === jobId) {
          return { ...job, priority: newPriority };
        }
        return job;
      });
      return [...updatedJobList];

    default:
      return state;
  }
};

export default jobReducer;
