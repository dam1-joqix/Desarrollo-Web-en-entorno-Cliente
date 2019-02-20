import { Component, OnInit } from '@angular/core';
import {ILuchador} from "../interfaces/iluchador";
import {DomSanitizer, Title} from "@angular/platform-browser";

import {ActivatedRoute} from "@angular/router";
import {CargarLuchadoresService} from "../servicios/cargar-luchadores.service";

@Component({
  selector: 'app-antes-luchar',
  templateUrl: './antes-luchar.component.html',
  styleUrls: ['./antes-luchar.component.css']
})
export class AntesLucharComponent implements OnInit {
  luchador:ILuchador;
  luchador2:ILuchador;

  idLuchador:number;
  constructor(private _sanitizer: DomSanitizer,
              private titleServide:Title,
              private route: ActivatedRoute,
              private service:CargarLuchadoresService) { }

  ngOnInit() {
    this.idLuchador=this.route.snapshot.params['id'];
    this.titleServide.setTitle('Antes de luchar '+this.idLuchador);
    this.service.getLuchador(this.idLuchador).subscribe(
      l=>this.luchador=l,
      error=>console.log(error)
    );

    let id=this.getRandomInt(1,5);
    this.service.getLuchador(id).subscribe(
      l=>this.luchador2=l,
      error1 => console.log(error1)
    );


  }
  getSrc1(){
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.luchador.animacion);
  }
  getSRC2(){
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.luchador2.animacion);
  }
  getRandomInt(min, max):number {
    let i=Math.floor(Math.random() * (max - min)) + min;
    console.log(i);
    return i;
  }
}
