import {Component, OnInit, Output} from '@angular/core';
import {ILuchador} from "../interfaces/iluchador";
import {CargarLuchadoresService} from "../servicios/cargar-luchadores.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'area-seleccion',
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.css']
})
export class AreaSeleccionComponent implements OnInit {

  constructor(private cargador:CargarLuchadoresService,private _sanitizer: DomSanitizer) { }
  luchadores:ILuchador[];
  indiceSeleccionado=-1;


  ngOnInit() {
    this.luchadores=this.cargador.getLuchadores();
  }
  getAnimacion(){
    return  this._sanitizer.bypassSecurityTrustResourceUrl(this.luchadores[this.indiceSeleccionado].animacion);
  }

}
