import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL_ENDPOINT } from 'src/app/config/config';
import { Usuario } from '../Clases/Usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlEndPoint: string = environment.usuariosUrl ;
  private urlApi: string = environment.api;
  public user: Usuario;

  constructor(
    private httpClient:HttpClient
  ) { }

  getAllUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.urlEndPoint);
  }

  getUserByEmailAndPswd(email:String, pswd:String): Observable<any> {
    return this.httpClient.get<Usuario>('http://localhost:7122/objetosUbb/usuario/'+email+'/'+pswd);
  }

  newUsuario(user:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.urlEndPoint,user);
  }
}
