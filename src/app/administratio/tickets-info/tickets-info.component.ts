import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tickets-info',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './tickets-info.component.html',
  styleUrl: './tickets-info.component.css'
})
export class TicketsInfoComponent {
  //info by buses
  idBuses : number[] = []
  idBusSelected: number=0
  countTicketsBus: number[] = []

  //info by itinerary
  idItineraries: number[] = []
  idItinerarySelected: number=0
  countTicketsItinerary: number[] = []

  //info by day
  dateSelected: Date | null = null
  countTicketsDay: number[] = []

  //info by month
  monthArray: string[] = ['Enero','Febrero','Marzo', 'Abril',
                          'Mayo', 'Junio', 'Julio', 'Agosto',
                          'Septiembre', 'Octubre', 'Noviembre',
                          'Diciembre']
  monthSelected: string="Enero";
  yearArray: number[] = [2010, 2011, 2012, 2013, 2014, 2015,
                        2016, 2017, 2018, 2019, 2020, 2021,
                        2022]
  yearSelected: number=2010;
  countTicketsMonth: number[] = []

  //info by year
  onlyYearArray: number[] = [2010, 2011, 2012, 2013, 2014, 2015,
    2016, 2017, 2018, 2019, 2020, 2021,
    2022]
  onlyYearSelected: number=2010;
  countTicketsYear: number[] = []
}
