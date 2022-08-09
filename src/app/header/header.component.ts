import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../servicios/service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {

  }

}
