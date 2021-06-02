import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

import { Subscriber } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { HttpClient } from '@angular/common/http';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers:[TodoService]
})
export class TodolistComponent implements OnInit {
  status!: string;
  closeResult = '';

  constructor(private todoService:TodoService,private http: HttpClient,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
  entry = "Yapılacaklar Listesi"
  hourglassLink = "https://cdn.pixabay.com/photo/2016/06/20/10/09/hourglass-1468474_960_720.png"
  possitiveLink = "https://cdn.pixabay.com/photo/2016/06/16/02/33/thumb-up-1460528_960_720.png"
  todos?: Todo[];
  path = "http://localhost:5000/"
  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.todoService.getTodo().subscribe(data=>{this.todos=data});
  }
  delete(_id:any){
    this.http.delete(this.path+'/delete/'+_id)
        .subscribe(() => {this.getAll()});
    
  }
  update(_id:any){
    this.http.put<any>(this.path+'/update', {"_id":_id,"is_completed": true})
        .subscribe(() => {this.getAll()});
    
  }
  
  open(content:any) {
    this.modalService.open(content);
  }
  
  
}
