import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: Array<string> = ['Iron Man', 'Hulk', 'Thor', 'Thanos'];
  heroeBorrado: string = '';

  EliminarHeroe():void{
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
