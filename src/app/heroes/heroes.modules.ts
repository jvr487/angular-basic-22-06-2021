import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppHeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        AppHeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}