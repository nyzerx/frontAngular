import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  isVisibled = true;
  isVisible = true;

  rol:number = -1;
  pub:number = -1;

  setVisibilitd(value: boolean) {
    this.isVisibled = value;
  }
  setVisibility(value: boolean) {
    this.isVisible = value;
  }
  modoadmin(value: number) {
    this.rol = value;
  }

  Idpub(value: number) {
    this.pub = value;
  }

  homeVisible:boolean = false;
  homeVisibleSI() {
    this.homeVisible = true;
  }
  homeVisibleNO() {
    this.isVisible = false;
  }
  
}
