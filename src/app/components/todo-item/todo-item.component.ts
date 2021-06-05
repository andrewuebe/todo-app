import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() onCompleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updateTodoFeeling: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateTodoFeeling(feeling: string) {
    this.todo.feeling = feeling;
    this.updateTodoFeeling.emit(this.todo);
  }

  onComplete(todo: Todo) {
    this.onCompleteTodo.emit(todo);
  }

}
