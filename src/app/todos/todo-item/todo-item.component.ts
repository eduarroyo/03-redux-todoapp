import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit {
  
  chkCompleted!: FormControl;
  txtInput!: FormControl;

  @ViewChild('inputEdit')
  inputEdit!: ElementRef;

  editing: boolean = false;
  
  @Input()
  todo!: Todo;

  constructor(private store: Store<AppState>) {
    
  }
  
  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.todo.completed = true;

    this.chkCompleted.valueChanges.subscribe(valor => 
      this.store.dispatch(toggleCompleted({id: this.todo.id})));
  }

  startEditing() {
    this.editing = true;
    setTimeout(() => this.inputEdit.nativeElement.focus(), 1);
  }

  finishEditing() {
    this.editing = false;
  }
}
