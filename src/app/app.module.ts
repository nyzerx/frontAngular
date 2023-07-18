import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; // Importa el módulo MatInputModule
import { MatSelectModule } from '@angular/material/select'; // Importa el módulo MatSelectModule

import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ObjetosEncontradosComponent } from './objetos-encontrados/objetos-encontrados.component';
import { ObtienePublicacionService } from './Service/obtiene-publicacion.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from './Clases/filtro.pipe';
import { NuevoUserComponent } from './nuevo-user/nuevo-user/nuevo-user.component';
import { LoginComponent } from './login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosService } from './Service/usuarios.service';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { MasinfoComponent } from './masinfo/masinfo.component';
import { Router } from '@angular/router';
import { FormularioFlotanteComponent } from './formulario-flotante/formulario-flotante.component';
import { EvaluacionFlotanteComponent } from './evaluacion-flotante/evaluacion-flotante.component';
import { PFrecuentesComponent } from './pfrecuentes/pfrecuentes.component'; // Importa el módulo Router desde '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HomeComponent,
    HeaderComponent,
    ObjetosEncontradosComponent,
    FiltroPipe,
    NuevoUserComponent,
    LoginComponent,
    ListaReportesComponent,
    MasinfoComponent,
    FormularioFlotanteComponent,
    EvaluacionFlotanteComponent,
    PFrecuentesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule, // Agrega MatInputModule aquí
    MatSelectModule, // Agrega MatSelectModule aquí
  ],
  providers: [
    appRoutingProviders,
    ObtienePublicacionService,
    UsuariosService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
