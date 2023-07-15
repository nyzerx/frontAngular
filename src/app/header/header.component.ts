import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/header.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
    dropdown:any = document.getElementById('dropdownMenuButton');
    id = this.idUser;
   constructor(private headerService: HeaderService, private router: Router,private route: ActivatedRoute){}

   ngOnInit(): void {
    let id = localStorage.getItem('usuarioID');
   }
   navegar() {
    this.router.navigate(['/login']);
    }
    irANuevoUser() {
      this.router.navigate(['/newUser']);
    }
   get isVisible() {
     return this.headerService.isVisible;
   }

   get isadmin() {
    return this.headerService.rol;
  }
  get idUser(){
    return localStorage.getItem('usuarioID');
  }
  salir(){
    Swal.fire({
      title: '¿Esta seguro de cerrar sesión?',
      //text: "Si acepta cerrará sesión",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesión!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        let id = localStorage.getItem('usuarioID'); 
        Swal.fire(
          'Sesión cerrada exitosamente!',
          ' ',
          'success'
        )
        this.router.navigate(['/login']);
      }
    })
  }
  ingresar(){
    this.router.navigate(['/login']);
  }
}

