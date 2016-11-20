import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { WikiService } from './wiki-service/wiki-service';
import { WikiImageService } from './wiki-service/wiki-image-service';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { NameFormComponent } from './name-form/name-form.component';
import appRoutes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NameFormComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule, 
    ChartsModule
  ],
  providers: [WikiService, WikiImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
