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
import { AppRoutingModule } from './app-routing.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

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
    CapitalizePipe,
    TemplateFormComponent,
    FormDebugComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
