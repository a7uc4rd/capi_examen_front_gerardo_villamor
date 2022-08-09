import { Injectable } from '@angular/core';
import {ResponseI} from '../../modelos/response.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 _url='http://localhost:8000/'
 constructor(private http:HttpClient){
  console.log('api service');
 }

 getPersonas(){
    let header = new HttpHeaders().set('type-content','aplication/json')
    
    return this.http.get(this._url,{
      headers:header
    });
 }
}
