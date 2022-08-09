import { Injectable } from '@angular/core';
import {ResponseI} from '../../modelos/response.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="http://localhost:8000/"

  constructor( private http:HttpClient) { }

  onLoad(data:string):Observable<ResponseI>{
    let usuarios = this.url;
    return this.http.get<ResponseI>(this.url);
  }
}
