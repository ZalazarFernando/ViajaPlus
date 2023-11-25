import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services-travels',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './services-travels.component.html',
  styleUrl: './services-travels.component.css'
})
export class ServicesTravelsComponent {
  selectedIdService: number=0;
  selectedItinerary: string="";

  idService: number[] = [];
  itineraries: string[] = [];

  qualityService: string="";
  avalability: string="";
  departureDate: Date | null = null;
  arrivalDate: Date | null = null;
  departureHour: Time | null = null;
  arrivalHour: Time | null = null;
  cost: string="";
}
