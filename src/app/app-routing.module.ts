import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ObjetosEncontradosComponent } from './objetos-encontrados/objetos-encontrados.component';
import { NuevoUserComponent } from './nuevo-user/nuevo-user/nuevo-user.component';
import { LoginComponent } from './login/login/login.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { MasinfoComponent } from './masinfo/masinfo.component';
import { PFrecuentesComponent } from './pfrecuentes/pfrecuentes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; // Importa el módulo MatCardModule
import { MatInputModule } from '@angular/material/input'; // Importa el módulo MatInputModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioFlotanteComponent } from './formulario-flotante/formulario-flotante.component';
import { EvaluacionFlotanteComponent } from './evaluacion-flotante/evaluacion-flotante.component';

const routes: Routes = [
  {path:'',component:ObjetosEncontradosComponent},
  {path:'home',component:ObjetosEncontradosComponent},
  {path:'Home',component:ObjetosEncontradosComponent},
  {path:'reportes',component:ListaReportesComponent},
  {path:'reporte/:idUser',component:FormularioComponent},
  {path:'Reporte/:idUser',component:FormularioComponent},
  {path:'masinfo',component:MasinfoComponent},
  {path:'Masinfo',component:MasinfoComponent},
  {path:'pfrecuentes',component:PFrecuentesComponent},
  {path:'PFrecuentes',component:PFrecuentesComponent},
  {path:'reporte',component:FormularioComponent},
  {path:'formularioFlotante',component:FormularioFlotanteComponent},
  {path:'evaluacionFlotante',component:EvaluacionFlotanteComponent},
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
