import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
 export class AppHeroeComponent{
    nombre: string= 'Iron Man';
    edad: number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    DisplayName():string{
        return `${this.edad} - ${this.nombre}`;
    }

    CambiarHeroe():void{
        this.nombre = 'Spider Man'
    }
    CambiarEdad():void{
        this.edad = 27;
    }
 }