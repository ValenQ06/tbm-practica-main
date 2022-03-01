import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { LoginComponent } from './home/login/login.component';

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
    path:'listTask', //por medio de lintTask me permitira invocar la tarea
    component: ListTaskComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
