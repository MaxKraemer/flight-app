import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';

export const routes: Routes = [
    { path: '', redirectTo: 'flights', pathMatch: 'full' },
    { path: 'flights', component: FlightSearchComponent },
   
];
