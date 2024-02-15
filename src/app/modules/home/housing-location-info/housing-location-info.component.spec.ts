import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationInfoComponent } from './housing-location-info.component';

describe('HousingLocationInfoComponent', () => {
  let component: HousingLocationInfoComponent;
  let fixture: ComponentFixture<HousingLocationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingLocationInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
