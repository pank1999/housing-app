import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HousingLocationInfoComponent } from './housing-location-info/housing-location-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    HousingLocationComponent,
    HousingLocationInfoComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [HomeComponent, HousingLocationComponent],
})
export class HomeModule {}
