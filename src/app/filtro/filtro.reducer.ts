import { Action, createReducer, on } from '@ngrx/store';
import { FiltrosValidos, setFiltro } from './filtro.actions';

export const initialState: FiltrosValidos = 'todos';

const _filterReducer = createReducer<FiltrosValidos, Action>(initialState,
  on(setFiltro, (state, { filtro }) => filtro ),
);

export function filterReducer(state: FiltrosValidos | undefined, action: Action) {
  return _filterReducer(state, action);
}
