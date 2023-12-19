import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo("Salvar el mundo"),
    new Todo("Salvar el mundo2"),
    new Todo("Salvar el mundo3")
];

const _todoReducer = createReducer(initialState, 
    on(actions.create, (state, { text }) => [...state, new Todo(text)]),
    on(actions.toggleCompleted, (state, { id }) => {
        return state.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }

            return todo;
        });
    }),
    on(actions.edit, (state, { id, text }) => {
         return state.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    text: text
                }
            }

            return todo;
        });
    }),
    on(actions.remove, (state, { id }) => state.filter(todo => todo.id != id))
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
    return _todoReducer(state, action);
}