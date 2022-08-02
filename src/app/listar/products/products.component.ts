import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../servicios/service.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  productos : any[];
  products2: any[];
  categorias: any[];
  categorias2: any[];
  titleProducts: string;
  params: any;
  isImageClick: boolean;
  imagenPadre: any;
  constructor(private service: ServiceService, private router: ActivatedRoute) {
    this.categorias = [];
    this.categorias2 = [];
    this.productos = [];
    this.products2 = [];
    this.titleProducts = '';
    this.isImageClick = false;

  }
  ngOnInit(): void {
    this.getProducts();
    this.router.params.subscribe((params:Params) => {
      this.params = params['id'];
      console.log(params);
    })

  }

  getProducts(){
    this.service.getInfo().subscribe(data=> {
      this.categorias= [];
      for (let i = 0; i <data.categories.length ; i++) {
        this.categorias.push(data.categories[i]);
      }
      for (let i = 0; i <this.categorias.length ; i++) {
        console.log(this.categorias[i].id)
        if (this.categorias[i].id == this.params){
          this.categorias2.push(this.categorias[i]);
          this.titleProducts = this.categorias[i].name;
        }
      }
      for (let i = 0; i <this.categorias2.length ; i++) {
        this.productos=this.categorias2[i].products ;

      }


    });
  }

  verProductos(productos: any, name:string) {
    console.log(productos);
    this.productos = [];
    this.productos = productos.products;
    this.titleProducts = name

  }

  receiveMessage($event: boolean) {
    this.isImageClick = $event;
  }

  bigImage(thumbnail: any) {
    this.imagenPadre = thumbnail;
    this.isImageClick = true;

  }
}
