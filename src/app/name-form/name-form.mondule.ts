import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NameFormComponent} from "./name-form.component";
import fooRoutes from "./name-form.routes"

@NgModule({
    imports:[CommonModule, fooRoutes],
    declarations:[NameFormComponent]
})
export default class RouteTestModule {} 
