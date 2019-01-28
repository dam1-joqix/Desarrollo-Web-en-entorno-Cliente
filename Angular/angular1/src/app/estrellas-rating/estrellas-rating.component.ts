import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'estrellas-rating',
  templateUrl: './estrellas-rating.component.html',
  styleUrls: ['./estrellas-rating.component.css']
})
export class EstrellasRatingComponent implements OnInit {
  @Input () numEstrellas:number;
  private numEstrellasAux:number;
  @Output () numEstrellasCambiadas=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.restaurarEstrellas();
  }
  setPuntuacion(){
    this.numEstrellasCambiadas.emit(this.numEstrellasAux);
  }
 restaurarEstrellas() {
    this.numEstrellasAux=this.numEstrellas;
  }
}
