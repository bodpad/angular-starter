import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherPageComponent implements OnInit {

  public citiesWeather: Weather[];

  // Список идентификаторов городов,
  // по которым необходимо получить данные о погоде.
  private cityIDs: number[] = [524901, 703448, 2643743];

  constructor(private weatherService: WeatherService) {}

  public ngOnInit() {
    this.weatherService
        .getWeatherDataByCityIDs(this.cityIDs)
        .subscribe((citiesWeather) => this.citiesWeather = citiesWeather);
  }

}
