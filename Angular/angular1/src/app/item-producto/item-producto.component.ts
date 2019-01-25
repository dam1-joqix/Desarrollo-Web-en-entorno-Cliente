import {Component, Input, OnInit} from '@angular/core';
import {IProducto} from "../interfaces/i-producto";


@Component({
  selector: 'item-producto, [item-producto]',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {
  @Input () producto: IProducto;
  @Input () verImagenes:boolean;

  constructor() { }

  ngOnInit() {
  }

}
