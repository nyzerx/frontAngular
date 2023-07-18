import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , appRoutingProviders} from './app-routing.module';
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
import { PFrecuentesComponent } from './pfrecuentes/pfrecuentes.component';

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
    PFrecuentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    ObtienePublicacionService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
