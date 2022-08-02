import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styleUrls: ['./modal-imagen.component.scss']
})
export class ModalImagenComponent implements OnInit {
  childMessage!: boolean;

  @Output() messageEvent = new EventEmitter<boolean>();
  @Input() imagenHijo:string;
  constructor(private router: ActivatedRoute) {
    this.imagenHijo = '';
  }

  ngOnInit(): void {
  }
  sendMessage(){
    this.childMessage = false;
    this.messageEvent.emit(this.childMessage)
  }
}
