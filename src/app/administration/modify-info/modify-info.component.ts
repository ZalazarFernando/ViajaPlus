import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modify-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modify-info.component.html',
  styleUrl: './modify-info.component.css'
})
export class ModifyInfoComponent {
  city_info : any[] = [
    {
      name : "Buenos Aires",
      id : 1
    },
    {
      name : "Resistencia",
      id : 2
    },
    {
      name : "Rosario",
      id : 3
    }
  ]

  section_info : any[] = [
    {
      id : 1,
      city_one : "Resistencia",
      city_two : "Rosario"
    },
    {
      id : 2,
      city_one : "Rosario",
      city_two : "Buenos Aires"
    },
    {
      id : 3,
      city_one : "Buenos Aires",
      city_two : "La pampa"
    }
  ]

  itinerary_info : any[] = [
    {
      id : 1,
      city_one : "Resistencia",
      city_two : "La Pampa"
    }
  ]
}
