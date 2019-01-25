import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pintaEstrellas'
})
export class PintaEstrellasPipe implements PipeTransform {

  transform(numeroEstrellas: number,args?:any): string {
    const estrella='\u2605';
    const estrellaVacia='\u2730';
    let vacias=5-numeroEstrellas;
    let devuelve='';
    for(let i=0;i<numeroEstrellas;i++){
      devuelve+=estrella;
    }
    for(let i=0;i<vacias;i++){
      devuelve+=estrellaVacia;
    }
    return devuelve;
  }

}
