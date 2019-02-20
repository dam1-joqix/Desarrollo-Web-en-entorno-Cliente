import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaSeleccionComponent } from './area-seleccion/area-seleccion.component';
import { RetratoLuchadorComponent } from './retrato-luchador/retrato-luchador.component';
import { AtributosLuchadorComponent } from './atributos-luchador/atributos-luchador.component';
import {HttpClientModule} from "@angular/common/http";
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AntesLucharComponent } from './antes-luchar/antes-luchar.component';
import {RouterModule} from "@angular/router";
import {CargarLuchadoresService} from "./servicios/cargar-luchadores.service";

@NgModule({
  declarations: [
    AppComponent,
    AreaSeleccionComponent,
    RetratoLuchadorComponent,
    AtributosLuchadorComponent,
    BienvenidaComponent,
    AntesLucharComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'bienvenida',component:BienvenidaComponent},
      {path:'seleccion',component:AreaSeleccionComponent},
      {path:'antes-luchar/:id',component:AntesLucharComponent},
      {path:'',redirectTo:'/bienvenida',pathMatch:'full'},
      {path: '**',redirectTo:'/bienvenida',pathMatch:'full'},
    ])
  ],
  providers: [CargarLuchadoresService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
