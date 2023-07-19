import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../Service/usuarios.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Importa MatDialog
import { IUsuario, Publib } from '../Clases/Publi';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { EvaluacionFlotanteComponent } from '../evaluacion-flotante/evaluacion-flotante.component';

@Component({
  selector: 'app-formulario-flotante',
  templateUrl: './formulario-flotante.component.html',
  styleUrls: ['./formulario-flotante.component.css']
})
export class FormularioFlotanteComponent implements OnInit {
  formulario: FormGroup;
  usuarioLogueado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private usuariosService: UsuariosService,
    private dialogRef: MatDialogRef<FormularioFlotanteComponent>,
    private dialog: MatDialog, // Agrega el servicio MatDialog
    @Inject(MAT_DIALOG_DATA) private data: { usuario: IUsuario , idp: number}
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      motivo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data.usuario) {
      this.usuarioLogueado = true;
      this.formulario.patchValue({
        nombre: this.data.usuario.nombre,
        apellido: this.data.usuario.apellido,
        email: this.data.usuario.email
      });
    }
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
  }
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