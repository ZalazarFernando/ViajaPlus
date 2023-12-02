import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajeService } from '../../services/opciones.service';
import { ReservaRequestBody } from '../../models/reserva';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-ticket-sales',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './ticket-sales.component.html',
  styleUrl: './ticket-sales.component.css'
})
export class TicketSalesComponent implements OnInit{
  name: string="";
  lastname: string="";
  dni: string="";

  public origin:number = 0;
  public destination:number = 0;
  public departureDate :string = "";
  public serviceID:number = 0;
  public vehicleID:number = 0;
  public asientoID:number = 0;
  public IDTramoOrigen:number = 0;
  public IDTramoDestino:number = 0;
  public costo:number = 0;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private reservaService: ReservaService){}

  async ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.origin = params['origin'] as number;
    //   this.destination = params['destination'] as number;
    //   // this.departureDate = params['departureDate'];
    //   this.vehicleID = params['vehicleID'] as number;
    //   this.serviceID = params['serviceID'] as number;
    //   this.asientoID = params['asientoID'] as number;
    //   this.IDTramoOrigen = params['IDTramoOrigen'] as number;
    //   this.IDTramoDestino = params['IDTramoDestino'] as number;
    //   this.costo = params['costo'] as number
    // });

    this.route.queryParams.subscribe(params => {
      this.origin = Number(params['origin']);
      this.destination = Number(params['destination']);
      this.vehicleID = Number(params['vehicleID']);
      this.serviceID = Number(params['serviceID']);
      this.asientoID = Number(params['asientoID']);
      this.IDTramoOrigen = Number(params['IDTramoOrigen']);
      this.IDTramoDestino = Number(params['IDTramoDestino']);
      this.costo = Number(params['costo']);
    });
  
  }


  reservar(){
debugger
      const data: ReservaRequestBody = {
        nombre: this.name,
        apellido: this.lastname,
        dni: this.dni,
        service:  this.serviceID,
        transporte: this.vehicleID,
        asiento: this.asientoID,
        origen: this.origin,
        destino: this.destination,
        IDTramoOrigen: this.IDTramoOrigen,
        IDTramoDestino: this.IDTramoDestino,
        Costo: this.costo
      };

      this.reservaService.createReserva(data)
      .subscribe({
        next: (respuesta: any) => {
          console.log(respuesta);
        },
        error: (error) => {
          console.error('Ocurrió un error al crear una nueva reserva:', error);
        }
      });
  }


  comprar(){
  
  }

  //
  get getName(){
    return this.name;
  }

  set setName(value: string){
    this.name = value;
  }

  get getLastName(){
    return this.lastname;
  }

  set setLastName(value: string){
    this.lastname = value;
  }

  get geDni(){
    return this.dni;
  }

  set setDni(value: string){
    this.dni = value;
  }
}
