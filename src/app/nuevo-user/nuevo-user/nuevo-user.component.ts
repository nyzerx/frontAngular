import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/Usuario';
import { UsuariosService } from 'src/app/Service/usuarios.service';

@Component({
  selector: 'app-nuevo-user',
  templateUrl: './nuevo-user.component.html',
  styleUrls: ['./nuevo-user.component.css']
})
export class NuevoUserComponent implements OnInit {
  user: Usuario;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ){
    console.log('se construyo');
  }
  ngOnInit(): void {

  }

  irAOtraPagina() {
    this.router.navigate(['/']);
  }

  crearUser(nombre:String,apellido:String,email:string,pswd:String,telefono:number):void{
    this.user ={
      nombre:nombre,
      apellido:apellido,
      email:email,
      pswd:pswd,
      telefono:telefono,
      rol:1
    }
    if((nombre==='')||(apellido==='')||(email==='')||(pswd==='')||(telefono===null)){
      console.log('error');
    }else if(!validarCorreo(email)){
      console.log('errorE');
    }else{
      this.usuariosService.newUsuario(this.user).subscribe(resp=>{
      console.log('resultado: ',resp);
      this.irAOtraPagina();

    });
    }
    function validarCorreo(correo: string): boolean {
      const expresionRegular = /^[a-zA-Z]+\.[a-zA-Z]+\d{4}@alumnos\.ubiobio\.cl$/;
      return expresionRegular.test(correo);
    }

}

  irALogin() {
  this.router.navigate(['/']);
  }
}
