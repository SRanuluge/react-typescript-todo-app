import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  ASCENDING_LIST,
  DESCENDING_LIST,
} from "../constants";

export const addTask = (task: Todo) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
export const deleteTask = (id: string) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const completeTask = (id: string) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
};
export const ascendingList = () => {
  return {
    type: ASCENDING_LIST,
    payload: null,
  };
};
export const descendingList = () => {
  return {
    type: DESCENDING_LIST,
    payload: null,
  };
};
