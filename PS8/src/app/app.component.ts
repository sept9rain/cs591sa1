import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {WeatherService} from './service';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";
import {weather_info} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
  name: string;
  title = 'PS6';
  weathers: weather_info[];
  cityName: string;

  constructor(private http_com: WeatherService) {
  }

  getWeather():void {
    this.http_com.getWeathers()
      .subscribe(data => this.weathers = data);

}

ngOnInit()
{

}

