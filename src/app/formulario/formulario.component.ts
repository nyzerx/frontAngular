import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPubli } from '../Clases/Publi';
import { Router } from '@angular/router';
import { PublicacionService } from '../Service/publicacion.service';
import { UsuariosService } from '../Service/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  titulo:string = 'Reporte de perdida'

  newPublicacion!: IPubli;
  formularioPubli!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,public _userS:UsuariosService, public _publiS:PublicacionService) { 
    console.log( _userS.user);
  }

  ngOnInit() {
    this.formularioPubli = this.fb.group({
      nombreObj: ['', Validators.required],
      descObj: ['', Validators.required],
      tipoObj: ['', Validators.required],
      tipoRep: ['', Validators.required],
      imagenObj: ['', Validators.required],
      fechaH: ['',[Validators.required]]
    });

    this.newPublicacion = {
      usuario: 0,
      fechaHora: '',
      tipoPublicacion: 0,
      estado_pu: 0,
      objeto: {
        nombre_obj: '',
        descripcion_obj: '',
        imagen_obj: '',
        id_cat: 0,
        misUbicaciones: []
      },
      comentarios: []
  }
  }


  crearPublicacion(){
    this.newPublicacion.usuario = this._userS.user.id;
    let fecha = new Date();
    this.newPublicacion.fechaHora = this.formatDate(fecha);
    this.newPublicacion.tipoPublicacion = this.formularioPubli.get('tipoRep')?.value;
    this.newPublicacion.objeto.nombre_obj = this.formularioPubli.get('nombreObj')?.value;
    this.newPublicacion.objeto.descripcion_obj = this.formularioPubli.get('descObj')?.value;
    this.newPublicacion.objeto.imagen_obj = this.formularioPubli.get('n')?.value;
    this.newPublicacion.objeto.id_cat = this.formularioPubli.get('tipoObj')?.value;

    

    this._publiS.postPublicacion(this.newPublicacion).subscribe(
      (res)=>{
        this.showSuccess()
        this.formularioPubli.reset();
      },
      (error) =>{
         this.showError();
      }
    );

    
  }
  showSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha creado el reporte con exito',
      showConfirmButton: false,
      timer: 2500
    })
  }

  showError(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Ha ocurrido un error al crear el reporte',
      showConfirmButton: false,
      timer: 2500
    })
  }

 

  formatDate(date: Date): string {
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
   
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  
}
