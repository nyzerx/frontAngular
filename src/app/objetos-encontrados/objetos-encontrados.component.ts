import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObtienePublicacionService } from '../Service/obtiene-publicacion.service';
import { Publi } from '../Clases/Publi';
import { HeaderService } from 'src/header.service';
import { UsuariosService } from '../Service/usuarios.service';
import { Usuario } from '../Clases/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-objetos-encontrados',
  templateUrl: './objetos-encontrados.component.html',
  styleUrls: ['./objetos-encontrados.component.css']
})
export class ObjetosEncontradosComponent implements OnInit {

  titulo:string = 'Ultimos objetos reportados';
  datos: Publi[] = [];
  usu:Usuario;
  ultPub: Publi[] = [];
  categoria: string = '';
  busqueda: string = '';

  hideHeader() {
    this.headerService.setVisibility(true);
  }

  hideHeaderr() {
    this.headerService.setVisibilitd(true);
  }

  constructor(private sss:ObtienePublicacionService, private headerService: HeaderService,private route: ActivatedRoute,
    private us:UsuariosService) { }

  ngOnInit() {
    this.obtener();
    this.hideHeader();
    this.hideHeaderr();
    this.ultimasPublis();
  }

  public obtener () {
    this.sss.getPubli()
    .subscribe(respuesta =>{
      this.datos = respuesta;
      console.log(respuesta);
    })
  }
  get isadmin() {
    const rol1 = localStorage.getItem('usuarioROL'); 
    const rol2=parseInt(rol1 || '{}',10);
    return rol2;
  }
  get idUser(){
    const id = localStorage.getItem('usuarioID'); 
    const id2=parseInt(id || '{}',10);
    return id2;
  }  
  FiltarCategoria(Categoraia: string) {
    if(this.categoria != Categoraia){
      this.categoria = Categoraia;
    }else{
      this.categoria = '';
    }
    console.log(this.categoria);
  }

  eliminarPublicacion(idPublicacion: number, rol: number):void {
    this.obtener();
    this.eliminarPublicacio(idPublicacion, rol);
    this.obtener();
  }
  eliminarPublicacio(idPublicacion: number, rol: number):void {
    this.sss.deletePublicacionByAdmin(idPublicacion, rol)
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
  eliminarPorUser(idPublicacion: number, idUsuario: number):void{
    const id = localStorage.getItem('usuarioID'); 
    const id2=parseInt(id || '{}',10);
    idUsuario=id2;
    this.sss.deleteByUsuario(idPublicacion,idUsuario)
  }
  ePorUser(idPublicacion: number, idUsuario: number):void{
    Swal.fire({
      title: '¿Esta seguro?',
      text: "Si acepta no podrá revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarPublicacion(idPublicacion, idUsuario);
        this.eliminarPublicacion(idPublicacion, idUsuario);
        Swal.fire(
          'Eliminado!',
          'La publicación fue eliminada exitosamente',
          'success'
        )
      }
    })
  }
  ultimasPublis(){
      this.sss.ultimasPublis().subscribe((resp)=>{
        this.ultPub = resp;
      },
      err =>{
        console.log(err);
      })
  }
}

/*

<div class="row">
    <div class="col-md-2">
        <h4>{{titulo}}</h4>
     </div>
     <div class="col-md-6">

      </div>
     <div class="col-md-2">
        <h5>Filtro por nombre de objeto:</h5>
      </div>
     <div class="col-md-2">
        <input type="text" [(ngModel)]="busqueda">
    </div>
</div>
<div class="search-bar">
    <div class="search-item" (click)="FiltarCategoria('Documentos personales')">
      <img src="../../assets/icono/reanudar.png" alt="Objeto 1">
      <p>Documentos personales</p>
    </div>
    <div class="search-item" (click)="FiltarCategoria('Dispositivos electrónicos')">
      <img src="../../assets/icono/auriculares.png" alt="Objeto 2">
      <p>Dispositivos electrónicos</p>
    </div>
    <div class="search-item" (click)="FiltarCategoria('Artículos de valor')">
      <img src="../../assets/icono/joyas.png" alt="Objeto 31">
      <p>Artículos de valor</p>
    </div>
    <div class="search-item" (click)="FiltarCategoria('Equipos deportivos')">
      <img src="../../assets/icono/deportes-con-balones.png" alt="Objeto 4">
      <p>Equipos deportivos</p>
    </div>
    <div class="search-item" (click)="FiltarCategoria('Material de estudio')">
      <img src="../../assets/icono/libro.png" alt="Objeto 5">
      <p>Material de estudio</p>
    </div>
    <div class="search-item" (click)="FiltarCategoria('Ropa y accesorios')">
      <img src="../../assets/icono/ropa.png" alt="Objeto 6">
      <p>Ropa y accesorios</p>
    </div>
    <div class="search-item" (click)="FiltarCategoria('Tarjetas de transporte')">
      <img src="../../assets/icono/tarjeta.png" alt="Objeto 7">
      <p>Tarjetas de transporte</p>
    </div>
    <div class="search-item" (click)="FiltarCategoria('Otros')">
      <img src="../../assets/icono/mas.png" alt="Objeto 8">
      <p>Otros</p>
    </div>
  </div>
<div class="container mx-auto mt-4">
    <div class="row">
        <div class="col-md-3 mb-2"  *ngFor="let publi of datos | filtro: busqueda">
            <div *ngIf="categoria== '' || categoria == publi.nombre "   class="card">
                <img src={{publi.imagen}} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{publi.nombre}}</h5>
                    <a  (click)="botonmasinfo(publi.idp)" class="btn btn-primary">Más información</a>
                    <p class="card-text">{{publi.fechaHora}}</p>
                    <a *ngIf="isadmin == 2" (click)="eliminarPublicacion(publi.idp, 2)" class="btn btn-danger">Eliminar</a>
                </div>
            </div>
        </div>
    </div>
</div>





*/