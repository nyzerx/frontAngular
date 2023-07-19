import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISolicitud } from './Clases/Publi';

@Injectable({
  providedIn: 'root'
})
export class FormularioSolicitudService {
  url = 'https://objetosback-production-f24d.up.railway.app/objetosUbb/solicitud/';

  constructor(private http: HttpClient) {}

  guardarFormularioSolicitud(solicitud: ISolicitud): Observable<any> {
    return this.http.post(this.url, solicitud);
  }

  crearSolicitud(nombre: string, apellido: string, correo: string, motivo: string, idPublicacion: number): Observable<any> {
    const solicitud: ISolicitud = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      motivo: motivo,
      idPublicacion: idPublicacion
    };

    return this.http.post(this.url, solicitud);
  }
}
