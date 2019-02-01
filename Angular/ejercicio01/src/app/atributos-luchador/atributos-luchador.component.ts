import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'atributos-luchador',
  templateUrl: './atributos-luchador.component.html',
  styleUrls: ['./atributos-luchador.component.css']
})
export class AtributosLuchadorComponent implements OnInit {
  @Input() nombreAtributo:string;
  @Input () valorAtributo:number;
  constructor() { }

  ngOnInit() {

  }


}
