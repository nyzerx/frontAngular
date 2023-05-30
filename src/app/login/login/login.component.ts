import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, NavigationExtras} from '@angular/router';
import { Usuario } from 'src/app/Clases/Usuario';
import { UsuariosService } from 'src/app/Service/usuarios.service';
import { HeaderService } from 'src/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  listaUsuarios:Usuario[]=[];
  

  title = 'usuarios';

  constructor(
    public fb: FormBuilder,
    public usuariosService: UsuariosService,
    private router: Router,
    private headerService: HeaderService
  ){
    console.log('se construyo');
  }
  ngOnInit(): void {
    this.hideHeader();
    this.hideHeaderr();
  }
  obtenerTodosUser():void{
    this.usuariosService.getAllUsuarios().subscribe(resp=>{
      console.log('lista de usuarios: ',resp);
      this.listaUsuarios=resp;
    });
  }
  obtenerUser(email:String,pswd:String):void{
      this.usuariosService.getUserByEmailAndPswd(email,pswd).subscribe(resp=>{
      console.log('resultado get: ',resp);
      this.usuariosService.user=resp;
      console.log(this.usuariosService.user);
      if(this.usuariosService.user!=null){
        this.headerService.modoadmin(this.usuariosService.user.rol);
        this.irAOtraPagina();
        //return this.user;
      }else{
        alert( "No cumple con las validaciones indicadas" );
      }
    });
    //return this.user;
  }

  irANuevoUser() {
    this.router.navigate(['/newUser']);
  }
hideHeader() {
  this.headerService.setVisibility(false);
}

irAOtraPagina() {
  this.router.navigate(['/home']); //this.user
}


hideHeaderr() {
  this.headerService.setVisibilitd(false);
}
}

