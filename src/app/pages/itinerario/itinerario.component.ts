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
    this.itinerarioService.getItinerarios().
      subscribe((itinerarios: any) => {
        debugger
      this.listaItinerarios = itinerarios.data;
    });
  }

  borrarItinerario(itinerario: any) {
    debugger
    this.itinerarioService.deleteItinerario(itinerario.IDItinerario).
      subscribe((data: any) => {
        debugger
        console.log('elemento borrado: ', itinerario);
        // Actualizar la lista de reservas en el front-end
        this.listaItinerarios = this.listaItinerarios.filter(r => r.IDItinerario !== itinerario.IDItinerario);
      });
  }

  hacerAlgoOtro(itinerario: any) {
    console.log('Hiciste clic en el botón 2 del elemento: ', itinerario);
  }
} 
