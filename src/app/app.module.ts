import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
=======
import { FullBannerComponent } from './shared/full-banner/full-banner.component';
import { ListTitlesComponent } from './shared/list-titles/list-titles.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
<<<<<<< Updated upstream
  bootstrap: [AppComponent, NavBarComponent]
=======
  bootstrap: [AppComponent, NavBarComponent, FullBannerComponent, ListTitlesComponent]
>>>>>>> Stashed changes
})
export class AppModule { }
