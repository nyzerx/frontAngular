import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ISolicitud } from '../Clases/Publi';
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
    private dialogRef: MatDialogRef<FormularioFlotanteComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { idp: number },
    private formularioSolicitudService: FormularioSolicitudService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      motivo: ['', Validators.required]
    });
  }

  cerrarFormulario(): void {
    this.dialogRef.close();
  }

  enviarFormularioFlotante(): void {
    if (this.formulario.valid) {
      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Su objeto lo puede recuperar en Lab Centrales Fdo. May.'
      }).then(() => {
        // Cierra el formulario flotante sin restablecerlo
        this.dialogRef.close();
      });

      this.formularioSolicitudService.crearSolicitud(this.formulario.value).subscribe(
        respuesta => {
          console.log('Formulario de solicitud guardado correctamente:', respuesta);
        },
        error => {
          console.error('Error al guardar el formulario de solicitud:', error);
        }
      );
    }
  }
}
