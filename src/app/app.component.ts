import { Component } from '@angular/core';
import { ApiService } from './servicios/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capi_examen_front_gerardo_villamor';

  constructor(
    private apiService:ApiService
  ){
    this.apiService.getPersonas().subscribe(resp=>{
      console.log(resp)
    })
  }
}
