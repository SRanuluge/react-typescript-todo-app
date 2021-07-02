import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  ASCENDING_LIST,
  DESCENDING_LIST,
} from "../constants";

const initialState: TodoState = {
  todoList: []
};

export const TodoReducer = (
  state:TodoState = initialState,
  { type, payload  }: Action
) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };
    case DELETE_TASK:
      const newArry = state.todoList.filter((todo) => todo.id !== payload);
      return {
        ...state,
        todoList: newArry,
      };
    case COMPLETE_TASK:
      const newIndex = state.todoList.findIndex(
        (todo: Todo) => todo.id === payload
      );
      state.todoList[newIndex].status = !state.todoList[newIndex].status;
      return {
        ...state,
      };
    case ASCENDING_LIST:
      const sortAscArray =state.todoList.sort(
        (a: Todo, b: Todo) => +b.endDate - +a.endDate
      );
      return {
        ...state,
        todoList: sortAscArray,
      };
    case DESCENDING_LIST:
      const sortDesArray = state.todoList.sort(
        (a: Todo, b: Todo) => +a.endDate - +b.endDate 
      );
      return {
        ...state, 
        todoList: sortDesArray,
      };
    default:
      return state;
  }
};
