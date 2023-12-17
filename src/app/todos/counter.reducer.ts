import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar el mundo')
];

const _todoReducer = createReducer(initialState, 
    on(actions.create, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state: Todo[], action: Action) {
    return _todoReducer(state, action);
}