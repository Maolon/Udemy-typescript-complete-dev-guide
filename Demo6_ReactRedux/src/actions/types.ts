
import {  FetchTodosAciton, DeleteTodoAciton } from './todos'


export enum ActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    DELETE_TODO = 'DELETE_TODO',
}

export type Action = FetchTodosAciton| DeleteTodoAciton

export const URL = "http://jsonplaceholder.typicode.com/todos";