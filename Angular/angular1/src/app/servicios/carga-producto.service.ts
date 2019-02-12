import { Injectable } from '@angular/core';
import {IProducto} from "../interfaces/i-producto";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {listener} from "@angular/core/src/render3";

@Injectable({
  providedIn: 'root'
})
export class CargaProductoService {
  private URLProductos="http://localhost:3000/productos";
  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get<IProducto[]>(this.URLProductos).pipe(
      catchError((HttpResponse)=>of([
        {
          "id":4,
          "descripcion":"Producto-Prueba",
          "disponibilidad": new Date("2000-01-01T01:01:01.511Z"),
          "precio":99.99,
          "imagenUrl":"assets/placa-base.png",
          "puntuacion":1
        }
      ])),
      tap(lista=>console.log(lista)),
      map(lista=>lista.filter(
        p=>p.puntuacion<5
      )),
      tap(lista=>console.log(lista))
    );
  }
}
