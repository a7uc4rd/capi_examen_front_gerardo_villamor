import { Component } from '@angular/core';
import { ApiService } from './servicios/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capi_examen_front_gerardo_villamor';
  public personas:Array<any>=[]

  constructor(
    private apiService:ApiService
  ){
    this.apiService.getPersonas().subscribe((resp:any)=>{
      console.log(resp.usuarios)
      this.personas=resp.usuarios
    })
  }

  
}
