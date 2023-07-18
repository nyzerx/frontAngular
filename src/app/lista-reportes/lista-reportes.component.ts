import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuariosService } from '../Service/usuarios.service';
import { PublicacionService } from '../Service/publicacion.service';
import { IPubliGET } from '../Clases/Publi';

@Component({
  selector: 'app-lista-reportes',
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.css']
})
export class ListaReportesComponent implements OnInit, OnDestroy {
  reportes: IPubliGET[] = [];
  cont: number = 0;
  
  constructor(private userS: UsuariosService, private publiS: PublicacionService) {}
  
  ngOnDestroy(): void {
    this.cont = 0;
  }
  
  ngOnInit(): void {
    this.userS.user$.subscribe((user) => {
      if (user?.id != undefined) {
        this.publiS.getPostByIdUser(user.id).subscribe(
          (res) => {
            this.reportes = res;
            console.log(this.reportes);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log('error');
      }
    });
  }
}
