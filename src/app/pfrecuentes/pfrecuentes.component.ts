import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pfrecuentes',
  templateUrl: './pfrecuentes.component.html',
  styleUrls: ['./pfrecuentes.component.css']
})
export class PFrecuentesComponent {
  ary: string[] = ["R0","R1","R2","R3","R4","R5","R6","R7"];

  mostrar(idpregunta: any) {
    let faqCards = null;
    for(let i = 0; i < this.ary.length; i++) {
      faqCards = document.getElementById(this.ary[i]);
      if(faqCards!=null){
        if(i==idpregunta){
          faqCards.classList.add("show");
        }else{
          faqCards.classList.remove("show");
        }
      }
    }
  }
}