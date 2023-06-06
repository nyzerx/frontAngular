import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ObjetosEncontradosComponent } from './objetos-encontrados/objetos-encontrados.component';
import { NuevoUserComponent } from './nuevo-user/nuevo-user/nuevo-user.component';
import { LoginComponent } from './login/login/login.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:ObjetosEncontradosComponent},
  {path:'Home',component:ObjetosEncontradosComponent},
  {path:'reportes',component:ListaReportesComponent},
  {path:'reporte/:idUser',component:FormularioComponent},
  {path:'Reporte/:idUser',component:FormularioComponent},
  {path:'reporte',component:FormularioComponent},
  {path:'newUser',component:NuevoUserComponent},
  {path:'**',component:ObjetosEncontradosComponent}
];
export const appRoutingProviders: any[] = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
