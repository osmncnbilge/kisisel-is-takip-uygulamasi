import { CREATE_JOB, DELETE_JOB, UPDATE_JOB } from "../constants/jobConstants";

export const createJob = (job) => ({
  type: CREATE_JOB,
  payload: job,
});

export const deleteJob = (jobIb) => ({
  type: DELETE_JOB,
  payload: jobIb,
});

export const updateJob = (job) => ({
  type: UPDATE_JOB,
  payload: job,
});
