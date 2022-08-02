import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Categories} from "../interface/interface.categories";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API_URI: string = '/api/v1_1/categories/92';

  constructor( private http: HttpClient) {
  }
  $modal = new EventEmitter
  getInfo(): Observable<Categories>{
    return this.http.get<Categories>(`${this.API_URI}`);
  }
}
