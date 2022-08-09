import { Component, OnInit } from '@angular/core';
import{ ApiService} from '../../servicios/api/api.service';


@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.onLoad('data').subscribe(data =>{
      console.log(data);
    })
  }

}
