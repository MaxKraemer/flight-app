import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { ApiService } from '../services/api.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, ReactiveFormsModule],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent implements OnInit {
  flights: Flight = {
    id: 1,
    from: 'Mumbai',
    to: 'Delhi',
    date: '2021-12-12',
    delayed: false
  };

  flightForm = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
  });

  flightData: Flight[] = [];
  filteredFlights: Flight[] = [];
  showflight: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.callApiHandler().subscribe(data => {
      this.flightData = data;
      this.filteredFlights = data;
      console.log(this.flightData, 'flights data');
    });
  }

  searchFlights() {
    const formValue = this.flightForm.value;
    this.filteredFlights = this.flightData.filter((flight: Flight) => {
      return flight.from === formValue.from && flight.to === formValue.to;
    });
    this.showflight = true;
  }
}
