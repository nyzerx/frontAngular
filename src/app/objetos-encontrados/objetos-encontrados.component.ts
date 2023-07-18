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

  hideHeaderr() {
    this.headerService.setVisibilitd(true);
  }

  constructor(private sss:ObtienePublicacionService, private headerService: HeaderService,private route: ActivatedRoute,
    private us:UsuariosService, private router: Router) { }

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

  botonmasinfo(id: number){
    this.headerService.Idpub(id);
    this.router.navigate(['/masinfo']);

  }
}

