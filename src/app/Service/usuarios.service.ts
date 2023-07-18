import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_ENDPOINT } from 'src/app/config/config';
import { Usuario } from '../Clases/Usuario';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlEndPoint: string = environment.usuariosUrl;
  private urlApi: string = environment.api;
  private _user: Usuario | null = null;
  private userSubject: BehaviorSubject<Usuario | null> = new BehaviorSubject<Usuario | null>(this._user);

  public user$: Observable<Usuario | null> = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.urlEndPoint);
  }

  getUserByEmailAndPswd(email: string, pswd: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.urlEndPoint + email + '/' + pswd).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError('Consulta no encontrada');
        } else {
          return throwError('Error en la solicitud');
        }
      })
    );
  }

  newUsuario(user: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.urlEndPoint, user);
  }

  setUser(user: Usuario | null): void {
    this._user = user;
    this.userSubject.next(this._user);
  }
}
