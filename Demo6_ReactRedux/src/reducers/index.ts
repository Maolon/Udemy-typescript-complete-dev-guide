import {combineReducers} from 'redux';
import { todosReducer } from './todo'
import { Todo } from '../actions';

//discrip entire state of store
// will check whether the return type of combine reducers is correct or not
// E.g. return type: todos: Todo[]
// if we return a number it will inform us error
export interface StoreState{
    todos: Todo[];
}

export const reducers = combineReducers({
    todos:todosReducer,
})