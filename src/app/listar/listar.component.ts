import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../servicios/service.service";
import {Categories} from "../interface/interface.categories";
import {Observable} from "rxjs";
import {LogicalFileSystem} from "@angular/compiler-cli";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  productos : any[] = [];
  categorias: any[] = [];
  constructor(private service: ServiceService) {
  }
  ngOnInit(): void {
  this.getProducts();
  }

  getProducts(){
    this.service.getInfo().subscribe(data=> {
          for (let cat of data["categories"]){
            this.categorias.push(cat)
          }
      console.log(this.categorias)

    });
  }
  verProductos(productos: any) {
    console.log(productos);
    this.productos= [];
    for (let prod of productos["products"]){
      this.productos.push(prod);
    }
  }
}
