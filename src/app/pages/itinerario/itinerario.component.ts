import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItinerarioService } from '../../services/itinerario.service';
import { Itinerario } from '../../models/itinerario';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrl: './itinerario.component.css'
})
export class ItinerarioComponent implements OnInit {
  public listaItinerarios: Itinerario[] = [];

  constructor( private itinerarioService: ItinerarioService) { }

  ngOnInit() {
    this.itinerarioService.getReservas().
      subscribe((itinerarios: any) => {
      this.listaItinerarios = itinerarios.itinerarios;
    });
  }

  hacerAlgo(itinerario: any) {
    console.log('Hiciste clic en el botón 1 del elemento: ', itinerario);
  }

  hacerAlgoOtro(itinerario: any) {
    console.log('Hiciste clic en el botón 2 del elemento: ', itinerario);
  }
} 
