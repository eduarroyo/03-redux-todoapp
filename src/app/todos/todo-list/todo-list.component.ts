import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { FiltrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  todos: Todo[] = [];
  filtroActual: FiltrosValidos = 'todos';

  constructor(private store: Store<AppState>) {
    this.store
      .subscribe(({todos, filtro}) => {
        this.todos = todos;
        this.filtroActual = filtro;
      } );
  }
}
