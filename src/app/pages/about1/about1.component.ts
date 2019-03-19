import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service'; 

@Component({
  selector: 'app-about1',
  templateUrl: './about1.component.html',
  styleUrls: ['./about1.component.css']
})
export class About1Component implements OnInit {

  constructor( public infoService: InfoPaginaService ) { }

  ngOnInit() {
  }

}
