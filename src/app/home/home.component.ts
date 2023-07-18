import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/header.service';
import { UsuariosService } from '../Service/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public titulo:string = "Objetos encontrados";

    constructor(public userS: UsuariosService, private headerService: HeaderService, private route: ActivatedRoute, public router:Router) {}

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const datos = params.get('datos');
        console.log(datos); // Aquí puedes utilizar los datos pasados
      });
      localStorage.getItem('usuarioID');
    }
    get isVisible() {
      return this.headerService.isVisibled;
    }

    isLoginPage(): boolean {
      return this.router.url === '/login';
    }
    
    salir(){
      localStorage.clear();
    }
}


