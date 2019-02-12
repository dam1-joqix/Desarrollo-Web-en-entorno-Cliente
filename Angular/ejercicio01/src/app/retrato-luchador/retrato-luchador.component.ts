import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILuchador} from "../interfaces/iluchador";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'retrato-luchador',
  templateUrl: './retrato-luchador.component.html',
  styleUrls: ['./retrato-luchador.component.css']
})
export class RetratoLuchadorComponent implements OnInit {
  @Input () luchador:ILuchador;
  imagePath;

  seleccionado=false;
  mantener=false;

 @Input ()indiceSeleccionado:number;
 @Input()numLuchador:number;
 @Output() luchadorSeleccionado=new EventEmitter<number>();

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.luchador.retrato);


  }

  entrar(){
      this.seleccionado=true;
  }
  salir(){

      this.seleccionado=false;

  }
  seleccionar(){
    if(this.numLuchador==this.indiceSeleccionado){
      this.mantener=false;
      this.luchadorSeleccionado.emit(-1);
    }else {
      this.mantener=true;
      this.luchadorSeleccionado.emit(this.numLuchador);
    }
  }


}
