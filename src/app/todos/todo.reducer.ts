import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo("Salvar el mundo"),
    new Todo("Salvar el mundo2"),
    new Todo("Salvar el mundo3")
];

const _todoReducer = createReducer(initialState, 
    on(actions.create, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
    return _todoReducer(state, action);
}