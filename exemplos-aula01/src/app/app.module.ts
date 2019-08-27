import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Componente01Component } from './componente01/componente01.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente01Component,
    StringInterpolationComponent,
    PropertyBindingComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
