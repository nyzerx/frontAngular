import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/header.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
    dropdown:any = document.getElementById('dropdownMenuButton');

   constructor(private headerService: HeaderService, private router: Router,private route: ActivatedRoute){}

   navegar() {
    this.router.navigate(['/login']);
    }
    irANuevoUser() {
      this.router.navigate(['/newUser']);
    }
   get isVisible() {
     return this.headerService.isVisible;
   }

   get isadmin() {
    return this.headerService.rol;
  }
}

