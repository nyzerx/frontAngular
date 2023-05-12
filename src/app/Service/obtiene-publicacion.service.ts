import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Publi } from '../Clases/Publi';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ObtienePublicacionService {


  constructor(private http:HttpClient) { }
  url= environment.publicacionesUrl;

  url2:string= "https://backgps-production.up.railway.app/objetosUbb/publicacion/Eliminar";

  public getPubli(){
    return this.http.get<Publi[]>(this.url);
  }

  public addPubli(publi:Publi){
    return this.http.post<Publi>(this.url,publi);
  }

  deletePublicacionByAdmin(idPublicacion: number, idUsuario: number) {
    let url = `${this.url2}/${idPublicacion}/${idUsuario}`;
    return this.http.delete(url);
  }
}
