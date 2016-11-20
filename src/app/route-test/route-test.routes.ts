import {RouterModule} from "@angular/router";
import {RouteTestComponent} from "./route-test.component";

const routes = [
    {path: '', component: RouteTestComponent},
];

export default RouterModule.forChild(routes);