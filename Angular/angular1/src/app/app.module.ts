import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { ItemProductoComponent } from './item-producto/item-producto.component';

import { FormsModule} from "@angular/forms";
import { FiltroProductoPipe } from './pipes/filtro-producto.pipe';
import { PintaEstrellasPipe } from './pipes/pinta-estrellas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    ItemProductoComponent,
    FiltroProductoPipe,
    PintaEstrellasPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
