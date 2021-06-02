import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Todo } from '../todolist/todo';
import { Observable , throwError} from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodo():Observable<Todo[]>{
    return this.http.get<Todo[]>("http://localhost:5000/").pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addTodo(todo:Todo):Observable<Todo>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'

      })
    }
    return this.http.post<Todo>("http://localhost:5000/add",todo,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
    



  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    
    if(err.error instanceof ErrorEvent){
    let errorMessage = 'hata var '+err.error.message
    }else{
      errorMessage='sistem hatası'
    }
    return throwError(errorMessage);
  }
}
