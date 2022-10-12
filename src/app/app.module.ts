import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FullBannerComponent } from './shared/full-banner/full-banner.component';
import { ListTitlesComponent } from './shared/list-titles/list-titles.component';
import { FooterComponent } from './shared/footer/footer.component';
<<<<<<< HEAD
import { TitleComponent } from './shared/title/title.component';
=======
import { TitleComponent } from './shared/title/title.component'
>>>>>>> 78d8a6a3de9f258759d1e022b2f80da4d8b3d796

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavBarComponent, FullBannerComponent, ListTitlesComponent]
})
export class AppModule { }
