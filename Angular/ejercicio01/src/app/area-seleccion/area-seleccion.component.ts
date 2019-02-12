import {Component, HostListener, OnInit, Output} from '@angular/core';
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

  @HostListener('window:keyup',['$event'])
  keyEvent(event: KeyboardEvent){
    switch (event.keyCode) {
      case KEY_CODE.DOWN_ARROW:
        if(this.indiceSeleccionado!=-1){
          let nuevoIndice=this.indiceSeleccionado+2;
          if (!(nuevoIndice>3)){
            this.indiceSeleccionado=nuevoIndice;
          }
        }
        break;

    }

  }


}
export enum KEY_CODE{
  UP_ARROW=38,
  DOWN_ARROW=40,
  RIGTH_ARROW=39,
  LEFT_ARROW=37
}
