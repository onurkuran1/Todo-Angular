import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './todolist/todo-add/todo-add.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path:"todolist",component:TodolistComponent},
  {path:'',redirectTo:'todolist',pathMatch:'full'},
  {path:'add',component:TodoAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
