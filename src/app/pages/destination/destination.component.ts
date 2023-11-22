import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  title_destination : string[] = [
    'Brasil',
    'Argentina',
    'España'
  ]
  url_img : string[] = [
    'https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3428177/pexels-photo-3428177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19013731/pexels-photo-19013731/free-photo-of-blanco-y-negro-punto-de-referencia-espana-catolico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]
}
