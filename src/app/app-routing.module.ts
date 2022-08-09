import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  {path:'',redirectTo:'tabla-usuarios', pathMatch: 'full'},
  {path:'tabla-usuarios', component:TablaUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
