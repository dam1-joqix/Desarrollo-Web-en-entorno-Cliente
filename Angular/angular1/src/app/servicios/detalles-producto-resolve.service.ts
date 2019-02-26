import { Injectable } from '@angular/core';
import {CargaProductoService} from "./carga-producto.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {IProducto} from "../interfaces/i-producto";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DetallesProductoResolveService {

  constructor(private cargaProducto:CargaProductoService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<IProducto>{
    return this.cargaProducto.getProducto(route.params["id"]).pipe(
      catchError(error=>{
        this.router.navigate(["/bienvenida"]);
        return of(null);
      })
    );
  }
}
