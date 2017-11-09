import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Weather } from '../weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherListComponent implements OnInit {

  @Input() citiesWeather: Weather[];

  constructor() { }

  ngOnInit() { }

}
