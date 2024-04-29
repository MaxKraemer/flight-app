import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent implements OnInit {

  flights : Flight = {
    id: 1,
    from: 'Mumbai',
    to: 'Delhi',
    date: '2021-12-12',
    delayed: false
  };

  constructor() { }


  ngOnInit(): void {
   
  }
}
