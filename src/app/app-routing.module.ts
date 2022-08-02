import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListarComponent} from "./listar/listar.component";
import {CrearComponent} from "./crear/crear.component";
import {ActualizarComponent} from "./actualizar/actualizar.component";
import {ProductsComponent} from "./listar/products/products.component";
import {ModalImagenComponent} from "./listar/modal-imagen/modal-imagen.component";

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'listar',component: ListarComponent},
  {path: 'listar/:id',component: ProductsComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'actualizar',component: ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
