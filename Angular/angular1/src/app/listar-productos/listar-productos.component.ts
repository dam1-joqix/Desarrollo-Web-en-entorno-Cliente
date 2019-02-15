import { Component, OnInit } from '@angular/core';
import {IProducto} from "../interfaces/i-producto";
import {CargaProductoService} from "../servicios/carga-producto.service";
import {Title} from "@angular/platform-browser";

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
    disponibilidad: "Disponibilidad",
    puntuacion:"Puntuación"
  };
  filtroBusqueda= '';

  productos:IProducto[];
  constructor(private cargador:CargaProductoService,private titleServide:Title) {

  }

  ngOnInit() {
    this.cargador.getProductos().subscribe(
      arrayProductos=>this.productos=arrayProductos,
      error=>console.log(error),
      ()=>console.log('Fin del observable')
    );
    this.titleServide.setTitle('Lista de productos');

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
