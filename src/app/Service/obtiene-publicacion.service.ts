import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Publi } from '../Clases/Publi';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ObtienePublicacionService {

  publi:Publi;
  constructor(private http:HttpClient) { }
  url= environment.publicacionesUrl;

  url2:string= "https://objetosback-production.up.railway.app/objetosUbb/publicacion/Eliminar/";
 
  public getPubli(){
    return this.http.get<Publi[]>(this.url);
  }

  public addPubli(publi:Publi){
    return this.http.post<Publi>(this.url,publi);
  }

  deletePublicacionByAdmin(idPublicacion: number, rol: number){
    return this.http.delete(this.url2+idPublicacion+'/'+rol);
  }
  deleteByUsuario(idPublicacion:number, idUsuario:number){
    if(this.publi.idp==idPublicacion && this.publi.idu==idUsuario){
      return this.http.delete(this.url2+idPublicacion+'/'+idUsuario);
    }else{
      return console.error();
      ;
    }
    
  }
}
