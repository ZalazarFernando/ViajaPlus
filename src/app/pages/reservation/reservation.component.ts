import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../models/reserva';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public listaReservas: Reserva[] = [];

  constructor( private reservaService: ReservaService) { }

  ngOnInit() {
    this.reservaService.getReservas().
      subscribe((reservas: any) => {
      this.listaReservas = reservas.reservas;
    });
  }

  borrarReserva(reserva: any) {
    this.reservaService.deleteReserva(reserva.ID).
      subscribe((reservas: any) => {
        console.log('elemento borrado: ', reserva);
        // Actualizar la lista de reservas en el front-end
        this.listaReservas = this.listaReservas.filter(r => r.ID !== reserva.ID);
      });
  }

  hacerAlgoOtro(reserva: any) {
    console.log('Hiciste clic en el botón 2 del elemento: ', reserva);
  }

}
