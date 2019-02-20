import { Component, OnInit } from '@angular/core';
import {IProducto} from "../interfaces/i-producto";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {CargaProductoService} from "../servicios/carga-producto.service";

@Component({
  selector: 'editar-detalles-producto',
  templateUrl: './editar-detalles-producto.component.html',
  styleUrls: ['./editar-detalles-producto.component.css']
})
export class EditarDetallesProductoComponent implements OnInit {
  idProducto: number;
  producto:IProducto;
  constructor(private titleServide:Title,
              private route: ActivatedRoute,
              private service:CargaProductoService) { }

  ngOnInit() {
    this.idProducto=this.route.snapshot.params['id'];
    this.titleServide.setTitle('Editar producto '+this.idProducto);
    this.service.getProducto(this.idProducto).subscribe(
      p=>this.producto=p,
      error1 => console.log(error1)
    );
  }
  guardar(){
    console.log("guardar");
    this.service.guardarProducto(this.producto).subscribe(
      p=>console.log(p),
      e=>console.log(e)
    );

  }

}
