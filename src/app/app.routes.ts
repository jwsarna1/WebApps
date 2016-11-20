import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameFormComponent } from './name-form/name-form.component';

const routes: Routes = [
  {path: '', component: NameFormComponent},
  {path: 'route-test', loadChildren: 'app/route-test/route-test.module'}
];

export default RouterModule.forRoot(routes);
