import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesTravelsService } from '../../services/services-travels.service';
import { ServicesTravels } from '../../models/service-travel';

@Component({
  selector: 'app-services-travels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-travels.component.html',
  styleUrl: './services-travels.component.css'
})
export class ServicesTravelsComponent {
  public listaServicesTravels: ServicesTravels[] = [];

  constructor( private serviceTravelService: ServicesTravelsService) { }

  ngOnInit() {
    this.serviceTravelService.getServicesTravels().
      subscribe((serviceTravel: any) => {
      this.listaServicesTravels = serviceTravel.serviceTravel;
    });
  }

  borrarServiceTravel(serviceTravel: any) {
    this.serviceTravelService.deleteServicesTravels(serviceTravel.ID).
      subscribe((serviceTravel: any) => {
        console.log('elemento borrado: ', serviceTravel);
        // Actualizar la lista de service-travel en el front-end
        this.listaServicesTravels = this.listaServicesTravels.filter(r => r.ID !== serviceTravel.ID);
      });
  }

  hacerAlgoOtro(serviceTravel: any) {
    console.log('Hiciste clic en el botón 2 del elemento: ', serviceTravel);
  }
}
