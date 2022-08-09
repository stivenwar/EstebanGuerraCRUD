import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormGroup, NgForm} from "@angular/forms";
import {ServiceService} from "../servicios/service.service";
import {Categories} from "../interface/interface.categories";

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  datosFormActualizar: Categories[];
  datos: Categories[];
  params:any;
  recogerDatos: any[];
  introducir_titulo: any;
  introducir_precio: any;
  introducir_peso: any;
  introducir_formato: any;
  introducir_url: any;

  constructor(private router: ActivatedRoute, private service:ServiceService) {
    this.datosFormActualizar = [];
    this.datos = [];
    this.recogerDatos = [];

  }

  ngOnInit(): void {
    this.router.params.subscribe((params:Params) => {
      this.params = params['id'];
    })
    this.getInfo();
  }

  getInfo(){
    this.service.getInfo().subscribe(res => {
      this.datosFormActualizar = res.categories;
      for (let i = 0; i <this.datosFormActualizar.length ; i++) {
        for (let j = 0; j <this.datosFormActualizar[i].products.length ; j++) {
         this.datos.push(this.datosFormActualizar[i].products[j]);
        }
      }
      for (let k = 0; k <this.datos.length ; k++) {
        if (this.params == this.datos[k].id){
          console.log(this.datos[k])
            this.introducir_titulo = this.datos[k].display_name;
          this.introducir_formato = this.datos[k].packaging;
          this.introducir_url = this.datos[k].share_url;
          console.log(this.datos[k].price_instructions);
          Object.entries(this.datos[k].price_instructions).forEach(([key, value]) => {
            if (key == 'unit_price'){
              this.introducir_precio = value;
            }else if (key == 'size_format'){
              this.introducir_peso = value;
            }
          });
        }


      }
    })

  }

  ngOnsubmit(form: FormGroup) {
    console.log(form);
  }
}
