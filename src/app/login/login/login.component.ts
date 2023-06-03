import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, NavigationExtras} from '@angular/router';
import { Usuario } from 'src/app/Clases/Usuario';
import { UsuariosService } from 'src/app/Service/usuarios.service';
import { HeaderService } from 'src/header.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  listaUsuarios:Usuario[]=[];
  user: Usuario;

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
      this.user=resp;
      if(this.user!=null){
        this.headerService.modoadmin(this.user.rol);
        localStorage.setItem('usuarioID', JSON.stringify(this.user.id));
        localStorage.setItem('usuarioROL', JSON.stringify(this.user.rol));
        this.userCorrecto();
        this.irAOtraPagina();
      }
    },(error)=>
      this.userIncorrecto()
    );
  }

  irANuevoUser() {
    this.router.navigate(['/newUser']);
  }
hideHeader() {
  this.headerService.setVisibility(false);
}

irAOtraPagina() {
  this.router.navigate(['/home']); 
}


hideHeaderr() {
  this.headerService.setVisibilitd(false);
}
userCorrecto(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Inicio correcto de sesión!',
    showConfirmButton: false,
    timer: 1500
  })
  }
  userIncorrecto(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Correo o contraseña incorrecta',
      showConfirmButton: false,
      timer: 1500,
      width: '500px'
    })
  }
}

