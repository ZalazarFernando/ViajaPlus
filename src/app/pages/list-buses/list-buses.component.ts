import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesService } from '../../services/buses.service';
import { Buses } from '../../models/buses';

@Component({
  selector: 'app-buses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-buses.component.html',
  styleUrl: './list-buses.component.css'
})
export class ListBusesComponent {
  public listaBuses: Buses[] = [];

  constructor( private busesService: BusesService) { }

  ngOnInit() {
    this.busesService.getBuses().
      subscribe((buses: any) => {
      this.listaBuses = buses.buses;
    });
  }

  borrarBuses(buses: any) {
    this.busesService.deleteBuses(buses.ID).
      subscribe((buses: any) => {
        console.log('elemento borrado: ', buses);
        // Actualizar la lista de buses en el front-end
        this.listaBuses = this.listaBuses.filter(r => r.nroUnidad !== buses.ID);
      });
  }

  hacerAlgoOtro(buses: any) {
    console.log('Hiciste clic en el botón 2 del elemento: ', buses);
  }
}
