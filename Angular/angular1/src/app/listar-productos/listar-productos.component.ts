import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  titulo= 'productos';
  cabeceras= {
    descripcion: "Producto",
    precio: "Precio",
    disponibilidad: "Disponibilidad"
  };
  constructor() {

  }

  ngOnInit() {
  }

}
