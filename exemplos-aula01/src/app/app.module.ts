import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Componente01Component } from './componente01/componente01.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ChildComponent } from './input-binding/child/child.component';
import { CiclovidaComponent } from './ciclovida/ciclovida.component';
import { ExemploPipeComponent } from './exemplo-pipe/exemplo-pipe.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Componente01Component,
    StringInterpolationComponent,
    PropertyBindingComponent,
    NgIfComponent,
    NgcontentComponent,
    NgtemplateComponent,
    InputBindingComponent,
    ChildComponent,
    CiclovidaComponent,
    ExemploPipeComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
