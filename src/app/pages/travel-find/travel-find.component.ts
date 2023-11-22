import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-find',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-find.component.html',
  styleUrl: './travel-find.component.css'
})
export class TravelFindComponent {
  @Input() messageGet: any="";

  info_travels: any[] = [
    { 
      service : 'test 1',
      origin_city : 'city 1',
      destination_city : 'city 2',
      departure_hour : 'hour 1',
      arrival_hour : 'hour 2',
      quality : 'test quality',
      cost : '1500',
      quantity_seat : '6'
    },
    {
      service : 'test 2',
      origin_city : 'city 1',
      destination_city : 'city 2',
      departure_hour : 'hour 1',
      arrival_hour : 'hour 2',
      quality : 'test quality',
      cost : '1000',
      quantity_seat : '4'
    },
    {
      service : 'test 3',
      origin_city : 'city 1',
      destination_city : 'city 2',
      departure_hour : 'hour 1',
      arrival_hour : 'hour 2',
      quality : 'test quality',
      cost : '2000',
      quantity_seat : '10'
    }
  ];
}
