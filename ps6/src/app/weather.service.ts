import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  res: restaurant_info[];
  weatherEndpoint = 'http://localhost:3000/ps4';

  constructor(private httpClient: HttpClient) {
  }


  getWeather(): Observable<weather_info[]> {
    return this.httpClient.get<weather_info[]>(this.weatherEndpoint);

  }
}
