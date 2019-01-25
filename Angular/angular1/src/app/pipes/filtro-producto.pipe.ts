import { Pipe, PipeTransform } from '@angular/core';
import {IProducto} from "../interfaces/i-producto";

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(arrayProductos: IProducto[], cadenaFiltro: string): IProducto[] {
    return arrayProductos.filter(producto=>{
      return producto.descripcion.toLowerCase().includes(cadenaFiltro.toLowerCase());
    });
  }

}
