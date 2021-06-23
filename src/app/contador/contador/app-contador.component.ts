import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `
        <h1>Hola {{ titulo }}</h1>
        <h3>la base es {{base}}</h3>
        <button (click)="acumular(base)"> aumentar en {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)"> disminuir en -{{base}}</button>
    `
})
export class AppContadorComponent{
    titulo: string = 'Contador';
    numero: number = 10;
    base : number = 5;
    
    acumular(valor:number){
        this.numero += valor;
  }
}
