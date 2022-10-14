import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoopLoginComponent } from './coop/coop-login/coop-login.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { HomeComponent } from "./Home/home.component";

const routes: Routes = [
  // Home Page :
  {path: "", component: HomeComponent},

  // 404 Error Page :
  {path: "404", component: ErrorPageComponent},

  // Path Imbriqué :
  {path: "coop", children : [
    {path: "coop-login", component: CoopLoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
