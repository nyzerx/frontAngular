import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISolicitud } from './Clases/Publi';

@Injectable({
  providedIn: 'root'
})
export class FormularioSolicitudService {
  url = 'https://objetosback-production-f24d.up.railway.app/objetosUbb/formulario-solicitud/guardar';

  constructor(private http: HttpClient) {}

  crearSolicitud(formularioData: any): Observable<any> {
    const solicitud: ISolicitud = {
      nombre: formularioData.nombre,
      apellido: formularioData.apellido,
      correo: formularioData.correo,
      motivo: formularioData.motivo
    };

    return this.http.post(this.url, solicitud);
  }
}
