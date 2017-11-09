import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',        component: HomeComponent },
  { path: 'weather', component: WeatherPageComponent },
  { path: '**',      component: NoContentComponent },
];
