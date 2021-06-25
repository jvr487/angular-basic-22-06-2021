import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  

  nuevo: Personaje = {
    nombre: 'Trunks xD',
    poder: 1400
  }

  constructor(private dbzService:DbzService){

  }
}
