import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { UserComponent } from './modules/user/user.component';
import { HousingLocationInfoComponent } from './modules/home/housing-location-info/housing-location-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'home/housing-location/:id',
    component: HousingLocationInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
