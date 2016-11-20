import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouteTestComponent} from "./route-test.component";
import fooRoutes from "./route-test.routes"

@NgModule({
    imports:[CommonModule, fooRoutes],
    declarations:[RouteTestComponent]
})
export default class RouteTestModule {} 
