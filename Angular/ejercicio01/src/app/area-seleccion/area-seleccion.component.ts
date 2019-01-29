import { Component, OnInit } from '@angular/core';
import {ILuchador} from "../interfaces/iluchador";
import {CargarLuchadoresService} from "../servicios/cargar-luchadores.service";

@Component({
  selector: 'area-seleccion',
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.css']
})
export class AreaSeleccionComponent implements OnInit {

  constructor(private cargador:CargarLuchadoresService) { }
  luchadores:ILuchador[];

  ngOnInit() {
    this.luchadores=this.cargador.getLuchadores();
  }

}
