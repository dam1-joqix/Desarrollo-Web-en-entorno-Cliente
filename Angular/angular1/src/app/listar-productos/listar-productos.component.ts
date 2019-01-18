import { Component, OnInit } from '@angular/core';
import {IProducto} from "../interfaces/i-producto";

@Component({
  selector: 'listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  altoImagen=80;
  titulo= 'productos';
  mostrar=true;
  //espar:boolean;
  //estiloComponente={'background-color':esPar ? 'green':'red'}
  textoBoton='Ocultar';
  cabeceras= {
    imagen: "Ocultar",
    descripcion: "Producto",
    precio: "Precio",
    disponibilidad: "Disponibilidad"
  };

  productos:IProducto[] = [
    {
      id: 1,
      descripcion: 'Disco Duro SSD',
      precio: 70,
      disponibilidad: new Date(),
      imagenUrl: 'assets/disco-duro.png',
      puntuacion: 4,
    },
    {
      id: 2,
      descripcion: 'Placa Base',
      precio: 100,
      disponibilidad: new Date(),
      imagenUrl: 'assets/placa-base.jpg',
      puntuacion: 10,
    }
  ];
  constructor() {

  }

  ngOnInit() {
  }

  pintarPrecio(indice:number){
    alert(this.productos[indice].precio);
  }
  cambiar(){

    this.mostrar=!this.mostrar;
    if(this.mostrar){
      this.textoBoton="Ocultar";
    }else{
      this.textoBoton="Mostrar";
    }

  }

}
