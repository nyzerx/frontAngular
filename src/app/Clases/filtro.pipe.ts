import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], busqueda: string): any[] {
    if (!busqueda) {
      return arreglo;
    }
    return arreglo.filter(elemento => elemento.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  }

}