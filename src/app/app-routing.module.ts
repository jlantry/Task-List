import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  { path:'', redirectTo:"list", pathMatch:"full"},
  { path:"list", component:TaskListComponent},
  { path:"add", component:TaskAddComponent},
  { path:"edit/:id", component:TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
