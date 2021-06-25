import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

// @Output() onNuevoPErsonaje:EventEmitter<Personaje> = new EventEmitter<Personaje>();
constructor(private dbzService:DbzService){

}

  agregar():void{
    console.log('Agregar')
    // this.onNuevoPErsonaje.emit(this.nuevo);
this.dbzService.AgregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
    poder: 0
    }
  }

}
