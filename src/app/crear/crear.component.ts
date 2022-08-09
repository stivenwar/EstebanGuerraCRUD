import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  datosForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(datosForm: NgForm) {

  }
}
