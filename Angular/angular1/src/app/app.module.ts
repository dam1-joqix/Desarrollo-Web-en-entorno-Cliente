import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { ItemProductoComponent } from './item-producto/item-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    ItemProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
