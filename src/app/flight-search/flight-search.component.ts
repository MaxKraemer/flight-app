import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { ApiService } from '../services/api.service';

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

  fligthData: any;

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.apiService.callApiHandler().subscribe(data => {
      this.fligthData = data[0];
      console.log(this.fligthData, 'flights data');
    });
  }
}
