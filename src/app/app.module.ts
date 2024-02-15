import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/user/user.module';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, UserCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
    UserCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
