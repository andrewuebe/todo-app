import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Todo } from '../Todo';
// import { TODOS } from '../demo-todos'; uncomment if not using json-server

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://localhost:5000/todos';

  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todo[]> {

    // fake json db using json-server:
    return this.http.get<Todo[]>(this.apiUrl)
    
    // uncomment to use static todo data:
    // const todos = of(TODOS);
    // return todos;
  }

  saveTodo(todo: Todo): Observable<Todo> {
    console.log(todo);
    const url = `${this.apiUrl}`;
    return this.http.post<Todo>(url, todo);
  }

  updateTodoFeeling(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`
    return this.http.patch<Todo>(url, todo)
  }

  completeTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url);
  }

}
