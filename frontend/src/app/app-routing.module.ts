import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

//Aqui invoco los componentes que quiero cargar en la pagina
const routes: Routes = [
  {
    path: '', //se pone vacio para que primero cargue los componentes principlaes (html)
    component: LoginComponent, //Ponemos primero el loguin para que sea lo primero que carga con el index
  },
  {
    path: 'login', //se pone vacio para que primero cargue los componentes principlaes (html)
    component: LoginComponent, //Ponemos primero el loguin para que sea lo primero que carga con el index
  },
  {
    path:'listTask', //por medio de listTask me permitira invocar la tarea
    component: ListTaskComponent,
  },
  {
    path:'saveTask',
    component: SaveTaskComponent,
  },
  {
    path:'signUp',
    component: RegisterComponent,
  },
  {
    path:'registerUser',
    component: RegisterUserComponent,
  },
  {
    path:'listUser',
    component: ListUserComponent,
  },
  {
    path:'updateUser',
    component: UpdateUserComponent,
  },
  {
    path:'registerRole',
    component: RegisterRoleComponent,
  },
  {
    path:'listRole',
    component: ListRoleComponent,
  },
  {
    path:'updateRole',
    component: UpdateRoleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
