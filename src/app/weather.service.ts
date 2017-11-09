import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  private API_BASE_URL: string = 'http://api.openweathermap.org/data/2.5/group';
  private API_TOKEN: string = 'abf20beff1a67d40a29a101fdad93e58';

  constructor(private http: HttpClient) {}

  /**
   *  Метод возвращает список погодных данных городов.
   *  Использует метод API для получения погодных данных
   *  по нескольким городам сразу перечисленных через запятую.
   */
  public getWeatherDataByCityIDs(IDs: number[]): Observable<Weather[]> {

    let url = `${this.API_BASE_URL}?id=${IDs}&units=metric&appid=${this.API_TOKEN}`;

    return this.http.get<any>(url).map((response) => {

      // Для кадого города полученого из API,
      // создаем и помещаем в массив экземляр класса Weather
      let citiesWeather: Weather[] = [];
      response.list.forEach((city) => {
        citiesWeather.push(new Weather(
          city.name,
          city.main.temp,
          city.main.pressure,
          city.main.humidity,
          city.wind.speed
        ));
      });

      return citiesWeather;

    });
  }

}
