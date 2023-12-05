import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesService } from '../../services/buses.service';
import { Buses } from '../../models/buses';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-buses.component.html',
  styleUrl: './list-buses.component.css'
})
export class ListBusesComponent {
  public listaBuses: Buses[] = [];

  constructor(private router: Router,
    private busesService: BusesService) { }

  ngOnInit() {
    this.busesService.getBuses().
      subscribe((resp: any) => {
        debugger
      this.listaBuses = resp.data;
    });
  }

  borrarBuses(buses: any) {
    this.busesService.deleteBuses(buses.ID).
      subscribe((buses: any) => {
        console.log('elemento borrado: ', buses);
        // Actualizar la lista de buses en el front-end
        this.listaBuses = this.listaBuses.filter(r => r.ID !== buses.message);
      });
  }

  hacerAlgoOtro(buses: any) {
    this.router.navigate([`./administration/buses/${buses.ID}`]);
  }
}
