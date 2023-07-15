import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_ENDPOINT } from 'src/app/config/config';
import { Usuario } from '../Clases/Usuario';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlEndPoint: string = environment.usuariosUrl ;
  //private urlEndPoint: string = 'http://localhost:7122/objetosUbb/usuario/';
  private urlApi: string = environment.api;
  public user: Usuario;

  constructor(
    private httpClient:HttpClient
  ) { }

  getAllUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.urlEndPoint);
  }

  getUserByEmailAndPswd(email:String, pswd:String): Observable<any> {
    return this.httpClient.get<Usuario>(this.urlEndPoint+email+'/'+pswd).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError('Consulta no encontrada');
        } else {
          return throwError('Error en la solicitud');
        }
      })
    );
  }

  newUsuario(user:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.urlEndPoint,user);
  }
  idUser(id:number):number{
    return id;
  }
}
