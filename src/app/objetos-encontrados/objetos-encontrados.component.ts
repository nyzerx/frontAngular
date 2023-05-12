import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObtienePublicacionService } from '../Service/obtiene-publicacion.service';
import { Publi } from '../Clases/Publi';
import { HeaderService } from 'src/header.service';

@Component({
  selector: 'app-objetos-encontrados',
  templateUrl: './objetos-encontrados.component.html',
  styleUrls: ['./objetos-encontrados.component.css']
})
export class ObjetosEncontradosComponent implements OnInit {

  titulo:string = 'Ultimos objetos reportados';
  datos: Publi[] = [];

  busqueda: string = '';

  hideHeader() {
    this.headerService.setVisibility(true);
  }

  hideHeaderr() {
    this.headerService.setVisibilitd(true);
  }

  constructor(private sss:ObtienePublicacionService, private headerService: HeaderService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.obtener();
    this.hideHeader();
    this.hideHeaderr();
  }

  public obtener () {
    this.sss.getPubli()
    .subscribe(respuesta =>{
      this.datos = respuesta;
      console.log(respuesta);
    })
  }
  get isadmin() {
    return this.headerService.rol;
  }

  eliminarPublicacion(idPublicacion: number, idUsuario: number):void {
    this.obtener();
    this.eliminarPublicacio(idPublicacion, idUsuario);
    this.obtener();
  }
  eliminarPublicacio(idPublicacion: number, idUsuario: number):void {
    this.sss.deletePublicacionByAdmin(idPublicacion, idUsuario)
    .subscribe(resp => {
          // La publicación se eliminó exitosamente
          console.log('Publicación eliminada');
          // Realiza cualquier otra acción necesaria, como actualizar la lista de publicaciones
        },
        error => {
          // Maneja el error en caso de que ocurra
          console.error('Error al eliminar la publicación', error);
        }
      );

  }
}

