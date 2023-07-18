import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Importa Observable
import { map } from 'rxjs/operators'; // Importa el operador map
import { Publib, IPubliGET } from '../Clases/Publi';

@Injectable({
  providedIn: 'root'
})
export class MasinfoService {
  url = 'http://localhost:5478/objetosUbb/publicacion/nf/';
  
  constructor(private http: HttpClient) {}
  
  public getPublib(id_pu: number): Observable<Publib> {
    return this.http.get<IPubliGET>(this.url + id_pu).pipe(
      map((respuesta: IPubliGET) => {
        // Aquí puedes realizar cualquier transformación necesaria en la respuesta
        const publib: Publib = {
          id_pu: respuesta.id_pu,
          fechaHora: respuesta.fechaHora,
          estado_pu: respuesta.estado_pu,
          objeto: {
            nombre_obj: respuesta.objeto.nombre_obj,
            imagen_obj: respuesta.objeto.imagen_obj,
          },
          usuario: {
            nombre: respuesta.usuario?.nombre || 'Sin usuario',
            apellido: respuesta.usuario?.apellido || '',
          },
        };
        return publib;
      })
    );
  }
}