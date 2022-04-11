import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationEditComponent } from './configuration-edit/configuration-edit.component';

const routes: Routes = [
  {path: '', component: ConfigurationEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
