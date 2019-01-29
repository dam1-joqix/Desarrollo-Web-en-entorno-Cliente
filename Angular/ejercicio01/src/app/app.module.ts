import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaSeleccionComponent } from './area-seleccion/area-seleccion.component';
import { RetratoLuchadorComponent } from './retrato-luchador/retrato-luchador.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaSeleccionComponent,
    RetratoLuchadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
