import { Component, OnInit } from '@angular/core';
import{ ApiService} from '../../servicios/api/api.service';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css'],
})
export class TablaUsuariosComponent implements OnInit {

  title = 'capi_examen_front_gerardo_villamor';
  public personas:Array<any>=[]

  constructor(
    private apiService:ApiService
  ){
    this.apiService.getPersonas().subscribe((resp:any)=>{
      let persons=resp.usuarios;
      console.log(resp)
      const resultArray = Object.keys(persons).map(index => {
        let person = persons[index];
        return person;
      });

      this.personas=resultArray
    })
  }

  ngOnInit(){}

}
