import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './listar/products/products.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { ModalImagenComponent } from './listar/modal-imagen/modal-imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListarComponent,
    CrearComponent,
    ActualizarComponent,
    ProductsComponent,
    UppercasePipe,
    ModalImagenComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
