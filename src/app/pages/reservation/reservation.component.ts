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

  hacerAlgo(reserva: any) {
    console.log('Hiciste clic en el botón 1 del elemento: ', reserva);
  }

  hacerAlgoOtro(reserva: any) {
    console.log('Hiciste clic en el botón 2 del elemento: ', reserva);
  }

}
