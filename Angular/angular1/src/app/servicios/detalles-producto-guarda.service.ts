import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DetallesProductoGuardaService {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(isNaN(+route.params['id'])){
      this.router.navigate(['/productos']);
      return false;
    }
    return true;
  }
}
