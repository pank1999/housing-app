import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HousingLocation } from 'src/app/interface/housing-location.interface';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  constructor(private router: Router) {}
  handleClick() {
    this.router.navigateByUrl(
      `home/housing-location/${this.housingLocation.id}`
    );
  }
}
