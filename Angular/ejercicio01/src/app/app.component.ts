import { Component } from '@angular/core';
import {CargarLuchadoresService} from "./servicios/cargar-luchadores.service";

@Component({
  selector: 'app-root',
  providers:[CargarLuchadoresService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio01';
}
