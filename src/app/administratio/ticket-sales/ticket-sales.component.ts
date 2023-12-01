import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajeService } from '../../services/opciones.service';

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

  public origin:string = "";
  public destination:string = "";
  public departureDate :string = "";
  public passengers:number = 0;
  public service:number = 0;
  public IDTramoOrigen:number = 0;
  public IDTramoDestino:number = 0;
  public costo:number = 0;

  allData: string[] = [];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private viajeService: ViajeService){}

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.origin = params['origin'];
      this.destination = params['destination'];
      this.departureDate = params['departureDate'];
      this.passengers = params['passengers'];
      this.service = params['service'];
      this.IDTramoOrigen = params['IDTramoOrigen'];
      this.IDTramoDestino = params['IDTramoDestino'];
      this.costo = params['costo']
    });
   
    //await this.getSeatsOptions(this.service);

  }


  reservar(){
    this.allData.push(this.name);
    this.allData.push(this.lastname);
    this.allData.push(this.dni);
  }
  comprar(){
    this.allData.push(this.name);
    this.allData.push(this.lastname);
    this.allData.push(this.dni);
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
