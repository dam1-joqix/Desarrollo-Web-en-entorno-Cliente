import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AntesLucharGuardaService {

  constructor(private router) { }
  canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(isNaN(+route.params['id'])){
      this.router.navigate(['/seleccion']);
      return false;
    }
    return true;
  }
}
