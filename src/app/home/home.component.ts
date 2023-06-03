import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public titulo:string = "Objetos encontrados";

    constructor(private headerService: HeaderService, private route: ActivatedRoute) {}

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
    salir(){
      localStorage.clear();
    }
}


