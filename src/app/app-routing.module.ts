import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ObjetosEncontradosComponent } from './objetos-encontrados/objetos-encontrados.component';
import { NuevoUserComponent } from './nuevo-user/nuevo-user/nuevo-user.component';
import { LoginComponent } from './login/login/login.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { PFrecuentesComponent } from './pfrecuentes/pfrecuentes.component';

const routes: Routes = [
  {path:'',component:ObjetosEncontradosComponent},
  {path:'home',component:ObjetosEncontradosComponent},
  {path:'Home',component:ObjetosEncontradosComponent},
  {path:'reportes',component:ListaReportesComponent},
  {path:'reporte/:idUser',component:FormularioComponent},
  {path:'Reporte/:idUser',component:FormularioComponent},
  {path:'reporte',component:FormularioComponent},
  {path:'Pfrecuentes',component:PFrecuentesComponent},
  {path:'newUser',component:NuevoUserComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:ObjetosEncontradosComponent}
];
export const appRoutingProviders: any[] = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
