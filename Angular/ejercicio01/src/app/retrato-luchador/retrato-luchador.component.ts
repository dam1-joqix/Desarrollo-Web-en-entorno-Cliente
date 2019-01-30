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
  @Output () luchadorSeleccionado=new EventEmitter<string>();

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.luchador.retrato);
  }
  entrar(){
      this.seleccionado=true;
  }
  salir(){
    if(!this.mantener){
      this.seleccionado=false;
    }
  }
  seleccionar(){
    this.mantener=!this.mantener;
    if(this.mantener){
      this.seleccionado=true;
      this.setSeleccionado();
    }else {
      this.seleccionado=false;
    }
  }
  setSeleccionado(){
    this.luchadorSeleccionado.emit(this.luchador.nombre);
  }

}
