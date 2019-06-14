import { Component } from '@angular/core';
import {weatherdata} from './Weatherdata-MOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS5: The city weather';
  mockData = weatherdata;
}
