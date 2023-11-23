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
    'España',
    'EE.UU',
    'Irlanda',
    'Rusia'
  ]
  url_img : string[] = [
    'https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3428177/pexels-photo-3428177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19013731/pexels-photo-19013731/free-photo-of-blanco-y-negro-punto-de-referencia-espana-catolico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]
  description_destination: string[] = [
    'Con sus magnificas playas, Brasil te espera para poder caminar junto a vos y disfrutar de uno de los mejores soles que puede proporcionarnos la tierra',
    'Destino ideal apra todo viajero que le guste cambiar de vistas cada momento. Al ser un país tan amplio, los paisajes que se presentarán ante tus maravillados ojos serán incontables',
    'Con un rica cultura que supera por mucho los siglos y siglos, presentarse en este lugar te permitirá caminar por donde miles de vidas han pasado como si fuera un instante',
    'El capital que presenta este país le permite ofrecerte todo al alcance de tu mano. Podrías pasar de caminar por una piramide a conocer granjas, montañas y edificios lujosos',
    'El país de los guerreros, de los magos, de los seres fantásticos. Te espera para que puedas sentirte verdaderamente en un cuento de hagas',
    'Siendo uno de los paises más grandes del mundo y con una historia que se remonta hasta antes del 800 d.c, Rusia te permite pasear por sus ignotos caminos, brindando con un snodrovia'
  ]
}
