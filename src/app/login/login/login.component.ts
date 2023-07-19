import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/Usuario';
import { UsuariosService } from 'src/app/Service/usuarios.service';
import { HeaderService } from 'src/header.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listaUsuarios: Usuario[] = [];

  title = 'usuarios';

  constructor(
    public fb: FormBuilder,
    public usuariosService: UsuariosService,
    private router: Router,
    private headerService: HeaderService,
    private cdRef: ChangeDetectorRef
  ) {
    console.log('se construyo');
  }

  ngOnInit(): void {
    this.headerService.homeVisibleNO();
    this.hideHeader();
    this.hideHeaderr();
  }

  obtenerTodosUser(): void {
    this.usuariosService.getAllUsuarios().subscribe(resp => {
      console.log('lista de usuarios: ', resp);
      this.listaUsuarios = resp;
    });
  }

  obtenerUser(email: string, pswd: string): void {
    this.usuariosService.getUserByEmailAndPswd(email, pswd).subscribe(
      (resp) => {
        console.log('resultado get: ', resp);
        this.usuariosService.setUser(resp); // Almacena el usuario en el servicio
        this.headerService.modoadmin(resp.rol);
        localStorage.setItem('usuarioID', String(resp.id));
        localStorage.setItem('usuarioROL', String(resp.rol));
        this.irAOtraPagina();
      },
      (error) => this.userIncorrecto()
    );
  }

  irANuevoUser() {
    this.router.navigate(['/newUser']);
  }

  hideHeader() {
    this.headerService.setVisibility(false);
  }

  irAOtraPagina() {
    this.userCorrecto();
    this.router.navigate(['/']);
    this.cdRef.detectChanges(); // Realizar detección de cambios después de la navegación
  }

  sinUser() {
    this.router.navigate(['/']);
    this.cdRef.detectChanges(); // Realizar detección de cambios después de la navegación
  }

  hideHeaderr() {
    this.headerService.setVisibilitd(false);
  }

  userCorrecto() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Inicio correcto de sesión!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  userIncorrecto() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Correo o contraseña incorrecta',
      showConfirmButton: false,
      timer: 1500,
      width: '500px'
    });
  }
}
