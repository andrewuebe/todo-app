import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() onSubmitTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updateTodoFeeling: EventEmitter<Todo> = new EventEmitter();

  todo: Todo = {
      id: 99999,
      text: '',
      deadline: '',
      feeling: 'undefined'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: any){
    var inputValue: string = event.target.value;
    var inputCategory: string = event.srcElement.id;
    if(inputCategory === "time"){
      document.getElementById("time")?.classList.remove("error");
      this.todo.deadline = inputValue;
    } else {
      document.getElementById("text")?.classList.remove("error");
      this.todo.text = inputValue;
    }
  }

  onUpdateTodoFeeling(feeling: string) {
    this.todo.feeling = feeling;
    this.updateTodoFeeling.emit(this.todo);
  }

  onSubmit(todo: Todo) {
    if(this.todo.text.length > 0 && this.todo.deadline.length > 0){
      this.onSubmitTodo.emit(todo);
    }
    if(this.todo.text.length === 0){
      document.getElementById("text")?.classList.add("error");
    }
    if(this.todo.deadline.length === 0){
      document.getElementById("time")?.classList.add("error");
    }
  }

}
