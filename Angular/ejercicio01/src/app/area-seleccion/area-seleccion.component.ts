import {Component, HostListener, OnInit, Output} from '@angular/core';
import {ILuchador} from "../interfaces/iluchador";
import {CargarLuchadoresService} from "../servicios/cargar-luchadores.service";
import {DomSanitizer, Title} from "@angular/platform-browser";

@Component({
  selector: 'area-seleccion',
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.css']
})
export class AreaSeleccionComponent implements OnInit {

  constructor(private cargador:CargarLuchadoresService,private _sanitizer: DomSanitizer,private titleServide:Title) { }
  luchadores:ILuchador[];
  indiceSeleccionado=-1;


  ngOnInit() {
    this.cargador.getLuchadores().subscribe(
      arrayLuchadores=>this.luchadores=arrayLuchadores,
      error => console.log(error),
      ()=>console.log("finalizado")
    );
    this.titleServide.setTitle("Seleccion de luchador");
  }
  getAnimacion(){
    return  this._sanitizer.bypassSecurityTrustResourceUrl(this.luchadores[this.indiceSeleccionado].animacion);
  }

  @HostListener('window:keyup',['$event'])
  keyEvent(event: KeyboardEvent){
    let nuevoIndice:number;
    if(this.indiceSeleccionado!=-1){
      switch (event.keyCode) {
        case KEY_CODE.DOWN_ARROW:
            nuevoIndice=this.indiceSeleccionado+2;
            if (!(nuevoIndice>3)){
              this.indiceSeleccionado=nuevoIndice;
            }

          break;
        case KEY_CODE.UP_ARROW:
          nuevoIndice=this.indiceSeleccionado-2;
          if(!(nuevoIndice<0)){
            this.indiceSeleccionado=nuevoIndice;
          }
          break;
        case KEY_CODE.LEFT_ARROW:
          nuevoIndice=this.indiceSeleccionado-1;
          if(!(nuevoIndice<0)){
            this.indiceSeleccionado=nuevoIndice;
          }
          break;
        case KEY_CODE.RIGTH_ARROW:
          nuevoIndice=this.indiceSeleccionado+1;
          if(!(nuevoIndice>3)){
            this.indiceSeleccionado=nuevoIndice;
          }

      }
    }
  }


}
export enum KEY_CODE{
  UP_ARROW=38,
  DOWN_ARROW=40,
  RIGTH_ARROW=39,
  LEFT_ARROW=37
}
