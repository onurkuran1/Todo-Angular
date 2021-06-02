import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
  providers:[TodoService]
})
export class TodoAddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private todoService:TodoService,
    private alertifyService:AlertifyService ) { }
  
  todoAddForm!: FormGroup; 

  todo:Todo=new Todo();
  createForm(){
    this.todoAddForm=this.formBuilder.group({
      title:["",Validators.required],
      description:["",Validators.required],
    });
  }
  ngOnInit(): void {
    this.createForm();
  }

  add(){
  
    if(this.todoAddForm?.valid){
      this.todo=Object.assign({},this.todoAddForm.value);
    }
    this.todoService.addTodo(this.todo).subscribe(data => {
      this.alertifyService.success(" Görev başarıyla eklendi");
    });
  }

}
