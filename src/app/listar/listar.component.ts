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

  productos : any[];
  categorias: any[];
  allProducts: any[];
  isImageClick: boolean;
  imagenPadre: string;
  isActive: boolean = false;

  constructor(private service: ServiceService) {
    this.categorias = [];
    this.productos = [];
    this.allProducts = [];
    this.isImageClick = false;
    this.imagenPadre = '';
  }
  ngOnInit(): void {
  this.getProducts();
  }

  getProducts(){
    console.log(this.imagenPadre)
    this.service.getInfo().subscribe(data=> {
          for (let cat of data["categories"]){
            this.categorias.push(cat)
          }
          this.insertAllProducts(this.categorias);
    });
  }
  insertAllProducts(categorias: any[]){
    console.log(categorias)
    for (let prod of categorias){
      for (let p of prod.products){
        this.allProducts.push(p);
      }
    }
  }
  // verProductos(productos: any) {
  //   this.productos= [];
  //   for (let prod of productos["products"]){
  //     this.productos.push(prod);
  //   }
  // }

  bigImage(thumbnail: any) {
    console.log(thumbnail);
    this.imagenPadre = thumbnail;
    this.isImageClick = true;
  }

  receiveMessage($event: boolean) {
    this.isImageClick = $event;
  }

  active() {
    this.isActive = true;
    this.service.setIsActive(this.isActive);
  }
}
