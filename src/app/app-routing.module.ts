import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:"dashboard",
    loadChildren: ()=>
    import('./pages/folder/dashboard/dashboard.module').then(m =>
    m.DashboardModule)
  },
  {
    path:"profile",

    loadChildren: ()=>
    import('./pages/folder/profile/profile.module').then(m =>
    m.ProfileModule)
  },
  {
    path:"users",

    loadChildren: ()=>
    import('./pages/folder/users/users.module').then(m =>
    m.UsersModule)
  },
  {
    path:"configuration",

    loadChildren: ()=>
    import('./pages/folder/configuration/configuration.module').then(m =>
    m.ConfigurationModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
