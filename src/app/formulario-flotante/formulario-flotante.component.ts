import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../Service/usuarios.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Importa MatDialog
import { IUsuario, Publib } from '../Clases/Publi';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ISolicitud } from '../Clases/Publi';
import { EvaluacionFlotanteComponent } from '../evaluacion-flotante/evaluacion-flotante.component';
import { ObtienePublicacionService } from '../Service/obtiene-publicacion.service';
import { FormularioSolicitudService } from '../formulario-flotante.service';

@Component({
  selector: 'app-formulario-flotante',
  templateUrl: './formulario-flotante.component.html',
  styleUrls: ['./formulario-flotante.component.css']
})
export class FormularioFlotanteComponent implements OnInit {
  formulario: FormGroup;
  newSolicitud: ISolicitud;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private usuariosService: UsuariosService,
    private dialogRef: MatDialogRef<FormularioFlotanteComponent>,
    private dialog: MatDialog, // Agrega el servicio MatDialog
    @Inject(MAT_DIALOG_DATA) public data: { idp: number },
    private obtienePublicacionService: ObtienePublicacionService,
    private formularioSolicitudService: FormularioSolicitudService
  ) {
    
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      motivo: ['', Validators.required]
    });
  this.newSolicitud = {
    nombre: '',
    apellido: '',
    correo: '',
    motivo: '',
    idPublicacion: 0
  };
  }

  cerrarFormulario(): void {
    // Cerrar el formulario flotante sin restablecerlo
    this.dialogRef.close();
  }

enviarFormularioFlotante(): void {
  if (this.formulario.valid) {
    // ...

    // Mostrar SweetAlert de éxito
    Swal.fire({
      icon: 'success',
      title: 'Exito',
      text: 'Su objeto lo puede recuperar en Lab Centrales Fdo. May.'
    }).then(() => {
      // Abre EvaluacionFlotanteComponent utilizando MatDialog
      this.abrirEvaluacion();
      // Cierra el formulario flotante sin restablecerlo
      this.dialogRef.close();
    });

    this.actualizarEstadoPublicacion();
    this.formularioSolicitudService.crearSolicitud(
      this.formulario.value.nombre,
      this.formulario.value.apellido,
      this.formulario.value.email,
      this.formulario.value.motivo,
      this.data.idp
    ).subscribe(
      respuesta => {
        console.log('Solicitud guardada correctamente:', respuesta);
      },
      error => {
        console.error('Error al guardar la solicitud:', error);
      }
    );
  }
}



actualizarEstadoPublicacion() {
  this.obtienePublicacionService.actualizarEstadoPublicacion(this.data.idp, 1).subscribe(
    respuesta => {
      console.log('Estado de publicación actualizado correctamente:', respuesta);
    },
    error => {
      console.error('Error al actualizar el estado de publicación:', error);
    }
  );
}

guardarFormularioSolicitud() {
  const formularioSolicitud = {
    nombre: 'Nombre del solicitante', // Aquí debes pasar el nombre del solicitante
    apellido: 'Apellido del solicitante', // Aquí debes pasar el apellido del solicitante
    correo: 'correo@solicitante.com', // Aquí debes pasar el correo del solicitante
    motivo: 'Motivo de la solicitud', // Aquí debes pasar el motivo de la solicitud
    idPublicacion: this.data.idp
  };

  this.formularioSolicitudService.guardarFormularioSolicitud(formularioSolicitud).subscribe(
    respuesta => {
      console.log('Formulario de solicitud guardado correctamente:', respuesta);
    },
    error => {
      console.error('Error al guardar el formulario de solicitud:', error);
    }
  );
}

abrirEvaluacion() {
  // Abre EvaluacionFlotanteComponent utilizando MatDialog
  this.dialog.open(EvaluacionFlotanteComponent, {
    width: '400px',
    data: {
      // Puedes pasar cualquier dato necesario al componente de evaluación utilizando la propiedad "data"
      // Por ejemplo, si necesitas el id de la publicación, podrías pasarlo aquí.
    }
  });
}

// ...
}