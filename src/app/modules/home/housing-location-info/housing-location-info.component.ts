import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HousingLocation } from 'src/app/interface/housing-location.interface';
import { HousingLocationService } from 'src/app/services/housing-location.service';

@Component({
  selector: 'app-housing-location-info',
  templateUrl: './housing-location-info.component.html',
  styleUrls: ['./housing-location-info.component.css'],
})
export class HousingLocationInfoComponent implements OnInit {
  locationId!: number;
  housingLocation!: HousingLocation;
  housingLocationService: HousingLocationService = inject(
    HousingLocationService
  );
  constructor(private route: ActivatedRoute, private router: Router) {}
  async ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.locationId = +params['id'];
    });
    this.housingLocation =
      await this.housingLocationService.getHousingLocationById(this.locationId);
  }

  deleteLocation() {
    this.housingLocationService.deleteLocationById(this.locationId).then(() => {
      this.router.navigateByUrl('/home');
    });
  }
}
