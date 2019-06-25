import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weather_info } from './model';
import { Observable } from 'rxjs';

import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";

import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  private weatherEndpoint = 'http://localhost:3000/ps4'


  getWeathers(): Observable<weather_info[]> {
    return this.httpClient.get<weather_info[]>(this.weatherEndpoint);

  }




}