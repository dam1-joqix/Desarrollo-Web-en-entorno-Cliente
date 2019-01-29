import { Injectable } from '@angular/core';
import {IProducto} from "../interfaces/i-producto";

@Injectable({
  providedIn: 'root'
})
export class CargaProductoService {

  constructor() { }

  getProductos():IProducto[]{
    return [
      {
        id: 1,
        descripcion: 'Disco Duro SSD',
        precio: 70,
        disponibilidad: new Date('2018-12-02'),
        imagenUrl: 'assets/disco-duro.png',
        puntuacion: 5,
      },
      {
        id: 2,
        descripcion: 'Placa Base',
        precio: 100,
        disponibilidad: new Date('2017-10-09'),
        imagenUrl: 'assets/placa-base.jpg',
        puntuacion: 3,
      }
    ];
  }
}
