import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Publib, IPubliGET, Publi } from '../Clases/Publi';

@Injectable({
  providedIn: 'root'
})
export class MasinfoService {
  url = 'https://objetosback-production-f24d.up.railway.app/objetosUbb/publicacion/datos/';
  
  constructor(private http: HttpClient) {}
  
  public getPublib(id_pu: number): Observable<Publib> {
    return this.http.get<IPubliGET>(this.url + id_pu).pipe(
      map((respuesta: IPubliGET) => {
        const publib: Publib = {
          idp: respuesta.idp,
          fechaHoraString: respuesta.fechaHora,
          objeto: {
            nombre_obj: respuesta.objeto.nombre_obj,
            imagen_obj: respuesta.objeto.imagen_obj,
            descripcion_obj: respuesta.objeto.descripcion_obj,
          },
          estado_pu: respuesta.estado_pu,
          idu: respuesta.idu,
          nombreUsuario: respuesta.nombreUsuario,
          apellidoUsuario: respuesta.apellidoUsuario,
          categoria: respuesta.categoria
        };
        return publib;
      })
    );
  }
  
  
  PublicacionMasInfo: Publi;

  ObtenerPMI(P: Publi) {
    this.PublicacionMasInfo = P;
  }
}
