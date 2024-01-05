import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as filterActions from '../../filtro/filtro.actions';
import * as todoActions from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html'
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filterActions.FiltrosValidos = 'todos';
  filtros: filterActions.FiltrosValidos[] = ['todos', 'pendientes', 'completados'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completed).length;
    });
  }

  cambiarFiltro(filtro: filterActions.FiltrosValidos) {
    this.store.dispatch(filterActions.setFiltro({ filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(todoActions.removeCompleted());
  }

}
