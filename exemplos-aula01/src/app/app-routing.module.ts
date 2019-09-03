import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploPipeComponent } from './exemplo-pipe/exemplo-pipe.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component'
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path: '', component: TemplateFormComponent },
  { path: 'exemplo', component: ExemploPipeComponent },
  { path: 'property', component: PropertyBindingComponent },
  { path: 'templateForm', component: TemplateFormComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
