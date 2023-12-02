import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChooseChairComponent } from '../choose-chair/choose-chair.component';
import { ViajeService } from '../../services/opciones.service';
import { Respuesta } from '../../models/respuesta';
import { Opciones } from '../../models/opciones';

@Component({
  selector: 'app-travel-find',
  standalone: true,
  imports: [
    ChooseChairComponent,
    CommonModule],
  templateUrl: './travel-find.component.html',
  styleUrl: './travel-find.component.css'
})
export class TravelFindComponent implements OnInit {
  @Input() messageGet: any="";
  public optionList: Respuesta;
  public origin:string = "";
  public destination:string = "";
  public originID:number = 0;
  public destinationID:number = 0;
  public departureDate :string = "";
  // public passengers:string = "";
  public service:number = 0;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private viajeService: ViajeService){
      
      this.optionList = {
        opciones: []
      }
    }

  ngOnInit() {
    debugger
    this.route.queryParams.subscribe(params => {
      let origin = params['origin'];
      let destination = params['destination'];
      let departureDate = params['departureDate'];

      this.originID = Number(origin)
      this.destinationID = Number(destination)
  
      this.getTravelOptions(this.originID, this.destinationID, departureDate);
    });
  }

  redirectChair(serviceID:number,vehicleID:number,IDTramoOrigen:number,IDTramoDestino:number,costo:number){
    debugger
    this.router.navigate(['./choose-chair'], { 
      queryParams: { 
        origin: this.originID, 
        destination: this.destinationID, 
        departureDate: this.departureDate, 
        vehicleID: vehicleID,
        serviceID: serviceID,
        IDTramoOrigen: IDTramoOrigen,
        IDTramoDestino: IDTramoDestino,
        costo: costo
      } 
    });
  }

  getTravelOptions(origin: number, destination: number, departureDate: string) {
    let date = new Date(departureDate);
    debugger
    let timestamp = Math.floor(date.getTime() / 1000);
    this.viajeService.getOpciones(origin, destination, timestamp.toString())
    .subscribe({
      next: (respuesta) => {
        // Maneja la respuesta aquí
        console.log(respuesta);
        this.optionList = respuesta
      },
      error: (error) => {
        // Maneja el error aquí
        console.error('Ocurrió un error al obtener las opciones de viaje:', error);
      }
    });
  }
/*
  info_travels: any[] = [
    { 
      service : 'FlechaBus',
      origin_city : 'city 1',
      destination_city : 'city 2',
      departure_hour : 'hour 1',
      arrival_hour : 'hour 2',
      quality : 'test quality',
      cost : '1500',
      quantity_seat : '6'
    },
    {
      service : 'Ersa',
      origin_city : 'city 1',
      destination_city : 'city 2',
      departure_hour : 'hour 1',
      arrival_hour : 'hour 2',
      quality : 'test quality',
      cost : '1000',
      quantity_seat : '4'
    },
    {
      service : 'El Pulqui',
      origin_city : 'city 1',
      destination_city : 'city 2',
      departure_hour : 'hour 1',
      arrival_hour : 'hour 2',
      quality : 'test quality',
      cost : '2000',
      quantity_seat : '10'
    }
  ];*/
}
