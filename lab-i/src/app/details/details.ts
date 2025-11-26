import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})

export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(Housing);
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
  const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
    this.housingLocation = housingLocation;
  });
  }

}
