import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../Todo';
import {TODOS} from '../../demo-todos';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  @Input() isFormOpen!: boolean;
  @Output() closeForm: EventEmitter<string> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // fires on component load
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    })
  }

  saveTodo(todo: Todo) {
    todo.id = this.generateUniqueId();
    this.todos.push(todo);
    this.todoService.saveTodo(todo).subscribe((response) => {
      this.closeForm.emit("close");
    })
  }

  // Stopgap solution for creating unique ID in fake db
  generateUniqueId(){
    var randIdNum: number = Math.floor(1000 + Math.random() * 9000);
    this.todos.forEach(todo => {
      if(todo.id === randIdNum){this.generateUniqueId()}
    })
    return randIdNum;
  }

  updateTodoFeeling(todo: Todo) {
    this.todoService.updateTodoFeeling(todo).subscribe((response) => {
      console.log(response);
    })
  }

  completeTodo(todo: Todo) {
    this.todoService.completeTodo(todo).subscribe(() => {
      this.todos = this.todos.filter((curTodo) => {
        if(curTodo.id === todo.id){ return false } // this is the todo we deleted
        else { return true }
      })
    })
  }

}
