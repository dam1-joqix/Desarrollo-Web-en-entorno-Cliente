import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { ItemProductoComponent } from './item-producto/item-producto.component';

import { FormsModule} from "@angular/forms";
import { FiltroProductoPipe } from './pipes/filtro-producto.pipe';
import { PintaEstrellasPipe } from './pipes/pinta-estrellas.pipe';
import { EstrellasRatingComponent } from './estrellas-rating/estrellas-rating.component';
import {CargaProductoService} from "./servicios/carga-producto.service";
import {HttpClientModule} from "@angular/common/http";
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import {RouterModule} from "@angular/router";
import {DetallesProductoGuardaService} from "./servicios/detalles-producto-guarda.service";
import { EditarDetallesProductoComponent } from './editar-detalles-producto/editar-detalles-producto.component';
import {DetallesProductoResolveService} from "./servicios/detalles-producto-resolve.service";


@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    ItemProductoComponent,
    FiltroProductoPipe,
    PintaEstrellasPipe,
    EstrellasRatingComponent,
    BienvenidaComponent,
    DetallesProductoComponent,
    EditarDetallesProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:'bienvenida',component:BienvenidaComponent},
        {path:'productos',component:ListarProductosComponent},
        {path:'productos/:id',
          component:DetallesProductoComponent,
        canActivate:[DetallesProductoGuardaService],
        resolve:{
          producto:DetallesProductoResolveService
        }},
        {path:'productos/editar/:id',
          component:EditarDetallesProductoComponent,
          canActivate:[DetallesProductoGuardaService],
          resolve:{
            producto:DetallesProductoResolveService
          }
        },
        {path:'',redirectTo:'/bienvenida',pathMatch:'full'},
        {path: '**',redirectTo:'/bienvenida',pathMatch:'full'},
      ]
    )
  ],
  providers:[CargaProductoService,
    Title,
  DetallesProductoGuardaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
