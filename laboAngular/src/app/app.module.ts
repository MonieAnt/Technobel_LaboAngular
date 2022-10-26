import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Structure :
import { HomeComponent } from './Home/home.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CoopHomeComponent } from './coop/coop-home/coop-home.component';


// Autres

@NgModule({
  declarations: [
    AppComponent,

    // Structures
    HomeComponent,

    // 404
    ErrorPageComponent,

    // Shared
    NavbarComponent,
    FooterComponent,

    // Cooperatives
    CoopHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
