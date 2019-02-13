import {Component, Input, OnInit} from '@angular/core';
import {IProducto} from "../interfaces/i-producto";
import {CargaProductoService} from "../servicios/carga-producto.service";


@Component({
  selector: 'item-producto, [item-producto]',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {
  @Input () producto: IProducto;
  @Input () verImagenes:boolean;

  constructor(private cargarProductos: CargaProductoService) { }

  ngOnInit() {
  }

  cambioEstrellas(nuevaPuntuacion: number) {
    this.producto.puntuacion=nuevaPuntuacion;
    this.cargarProductos.guardarProducto(this.producto).subscribe(
      p=>console.log('Actualizado el producto '+ p),
      error=>console.log(error)
    );
  }
}
