import { Component, OnInit, Inject } from '@angular/core'; // Importa Inject
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../Service/usuarios.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUsuario, Publib } from '../Clases/Publi';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evaluacion-flotante',
  templateUrl: './evaluacion-flotante.component.html',
  styleUrls: ['./evaluacion-flotante.component.css']
})
export class EvaluacionFlotanteComponent implements OnInit {
  evaluacion: string = '';
  formulario: FormGroup;
  usuarioLogueado: boolean = false;
  comentario: string = '';
  // Agrega aquí las propiedades y el formulario necesario para la evaluación
  // Puedes usar el mismo enfoque que en FormularioFlotanteComponent para obtener y enviar los datos del formulario.

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private usuariosService: UsuariosService,
    private dialogRef: MatDialogRef<EvaluacionFlotanteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { /* Agrega aquí los datos que necesites para la evaluación */ }
  ) {
    // Inicializa el formulario y las propiedades necesarias para la evaluación
  }

  ngOnInit(): void {
    // Código de inicialización si es necesario
  }

  // Agrega aquí las funciones necesarias para el proceso de evaluación

  enviarEvaluacion(): void {
    // Código para enviar la evaluación al backend
    // Puedes usar HttpClient para realizar una petición POST o PUT según sea necesario

    // Después de enviar la evaluación y recibir una respuesta exitosa del servidor,
    // muestra un SweetAlert de éxito y cierra el formulario de evaluación.
    Swal.fire({
      icon: 'success',
      title: 'Evaluación enviada',
      text: 'Gracias por su evaluación.',
    }).then(() => {
      // Cierra el formulario de evaluación
      this.dialogRef.close();
    });
  }

  cerrarEvaluacion(): void {
    // Cerrar el formulario de evaluación sin restablecerlo
    this.dialogRef.close();
  }
}
