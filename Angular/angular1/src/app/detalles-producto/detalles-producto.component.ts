import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {IProducto} from "../interfaces/i-producto";
import {CargaProductoService} from "../servicios/carga-producto.service";

@Component({
  selector: 'detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {
  idProducto: number;
  producto:IProducto;
  constructor(private titleServide:Title,private route: ActivatedRoute,private service:CargaProductoService) { }

  ngOnInit() {
    this.titleServide.setTitle('Detalles producto');
    this.idProducto=this.route.snapshot.params['id'];
    this.service.getProducto(this.idProducto).subscribe(
      a=>this.producto=a,
      error1 => console.log(error1)
    );
  }

}
