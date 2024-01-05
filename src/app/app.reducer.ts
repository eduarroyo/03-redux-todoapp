import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { FiltrosValidos } from "./filtro/filtro.actions";
import { filterReducer } from "./filtro/filtro.reducer";

export interface AppState {
    todos: Todo[],
    filtro: FiltrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filterReducer
}
