import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  welcome: string = 'Bienvenido al crud de Esteban Guerra';
  constructor() { }

  ngOnInit(): void {
  }

}
