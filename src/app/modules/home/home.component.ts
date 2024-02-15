import { Component, OnInit, inject } from '@angular/core';
import { HousingLocation } from 'src/app/interface/housing-location.interface';
import { HousingLocationService } from 'src/app/services/housing-location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  housingLocationService: HousingLocationService = inject(
    HousingLocationService
  );

  async ngOnInit() {
    //fetch all housing location
    this.housingLocationList =
      await this.housingLocationService.getAllHousingLocations();
  }
}
