import {RouterModule} from "@angular/router";
import {NameFormComponent} from "./name-form.component";

const routes = [
    {path: '', component: NameFormComponent},
];

export default RouterModule.forChild(routes);