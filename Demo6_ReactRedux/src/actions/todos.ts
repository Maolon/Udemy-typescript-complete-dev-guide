import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes, URL } from "./types";

const url = URL;

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAciton {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAciton {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const resp = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAciton>({
      type: ActionTypes.FETCH_TODOS,
      payload: resp.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAciton => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id,
  };
};
