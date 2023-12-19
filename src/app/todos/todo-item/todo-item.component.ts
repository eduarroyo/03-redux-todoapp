import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

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
  
    this.chkCompleted.valueChanges.subscribe(valor => 
      this.store.dispatch(actions.toggleCompleted({id: this.todo.id})));
  }

  startEditing() {
    this.editing = true;
    setTimeout(() => this.inputEdit.nativeElement.select(), 1);
  }

  finishEditing() {
    if(this.txtInput.invalid) {
      return;
    }

    this.editing = false;
    
    if(this.txtInput.value === this.todo.text) {
      return;
    }

    this.store.dispatch(actions.edit({id: this.todo.id, text: this.txtInput.value}))
    this.editing = false;
  }

  remove() {
    this.store.dispatch(actions.remove({id: this.todo.id}));
  }
}

