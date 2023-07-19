import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormularioSolicitudService } from '../formulario-flotante.service';

@Component({
  selector: 'app-formulario-flotante',
  templateUrl: './formulario-flotante.component.html',
  styleUrls: ['./formulario-flotante.component.css']
})
export class FormularioFlotanteComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormularioFlotanteComponent>,
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
    
      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Su objeto lo puede recuperar en Lab Centrales Fdo. May.'
      }).then(() => {
        // Cierra el formulario flotante sin restablecerlo
        this.dialogRef.close();
      });
    
  }
}
