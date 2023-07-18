import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MasinfoService } from '../Service/masinfo.service';
import { Publib } from '../Clases/Publi';
import { HeaderService } from 'src/header.service';
import { FormularioFlotanteComponent } from '../formulario-flotante/formulario-flotante.component';
import { EvaluacionFlotanteComponent } from '../evaluacion-flotante/evaluacion-flotante.component';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.component.html',
  styleUrls: ['./masinfo.component.css']
})
export class MasinfoComponent implements OnInit {
  titulo: string = 'Objetos encontrados';
  datos: Publib;
  nombreCompleto: string = '';
  detalle: string = '';

  constructor(
    private sss: MasinfoService,
    private headerService: HeaderService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtener();
  }

  public obtener() {
    this.sss.getPublib(this.headerService.pub).subscribe(respuesta => {
      this.datos = respuesta;
    });
  }

  // Método para abrir el formulario flotante
  abrirFormulario(id_pu: number) {
    const dialogRef = this.dialog.open(FormularioFlotanteComponent, {
      width: '400px',
      data: {
        nombreCompleto: this.nombreCompleto,
        detalle: this.detalle,
        idPublicacion: id_pu, // Pasamos el ID de la publicación al formulario flotante
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'correcto') {
        // Muestra la notificación de solicitud correcta
        alert('¡Solicitud correcta!');

        // Abre la ventana de evaluación después de un segundo (puedes ajustar el tiempo según tus necesidades)
        setTimeout(() => {
          this.abrirEvaluacion();
        }, 1000);
      } else if (result === 'erroneo') {
        // Si la solicitud es errónea, no necesitas hacer nada aquí ya que el componente del formulario mostrará el mensaje de error.
      }
    });
  }

  // Método para abrir la ventana de evaluación
  abrirEvaluacion() {
    this.dialog.open(EvaluacionFlotanteComponent, {
      width: '400px'
    });
  }
}
