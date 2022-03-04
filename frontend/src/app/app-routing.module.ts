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

import { AuthGuard } from './guard/auth.guard';

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
    path: 'listTask', //por medio de listTask me permitira invocar la tarea
    component: ListTaskComponent,
    canActivate: [AuthGuard], //aqui estamos protegiendo el listtast, solo los que esten logueados podran verlo
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signUp',
    component: RegisterComponent,
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'listUser',
    component: ListUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
