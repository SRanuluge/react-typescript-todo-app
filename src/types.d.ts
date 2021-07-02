type Todo = {
  id:string;
  todo: string;
  status: boolean;
  endDate: number;
};

type Id ={
  id:string;
}

type Task = {
  task: string;
};

interface TodoState {
  todoList: Array<Todo>;
}

type TodoList = {
  todoList: Array<Todo>
}

interface AddTask {
  type: ADD_TASK;
  payload: Array<Todo>;
}
interface DeleteTask {
  type: DELETE_TASK;
  payload: Object<Id>;
}
interface CompleteTask {
  type: COMPLETE_TASK;
  payload: Object<Id>;
}
interface Ascending  {
  type: ASCENDING_LIST;
  payload:null
}
interface Descending  {
  type: DESCENDING_LIST;
  payload:null
}

type Action = AddTask | DeleteTask | UpdateTask | CompleteTask | Ascending | Descending;