import { Injectable } from '@angular/core';
import { URL_Spring } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { IPubli, ResponseObject } from '../Clases/Publi';



@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  URL:string = URL_Spring.url + URL_Spring.savePublic;

  constructor(private _http:HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  
  postPublicacion(publicacion:IPubli): Observable<ResponseObject>{
    const URL:string = URL_Spring.url + URL_Spring.savePublic;
    return this._http.post<ResponseObject>(URL,publicacion,
    this.httpOptions,
    ).pipe();

  }
  
  

  getCategoria(id:number){
    return this._http.get(URL_Spring.url+URL_Spring.getCategoria+'/'+id);
  }

  getTipoPu(id:number){
    return this._http.get(URL_Spring.url+URL_Spring.getTipoPu+'/'+id);
  }

}
