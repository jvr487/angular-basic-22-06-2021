import { NgModule } from "@angular/core";
import { AppContadorComponent } from './contador/app-contador.component';

@NgModule({
    declarations: [
        AppContadorComponent
    ],
    exports:[
        AppContadorComponent
    ]

    }
)
export class ContadorModule{

}