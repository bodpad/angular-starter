/**
 *  Модель погоды города
 */
export class Weather {
  constructor(
    public city: string,         // название города
    public temperature: number,  // температура
    public pressure: number,     // давление
    public humidity: number,     // влажность
    public windSpeed: number    // скорость ветра
  ) {}
}
