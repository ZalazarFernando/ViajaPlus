import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-itinerary-maintenance',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './itinerary-maintenance.component.html',
  styleUrl: './itinerary-maintenance.component.css'
})
export class ItineraryMaintenanceComponent {
  itineraries: any[] = ['example1', 'example2', 'example3'];
  midwayCities: any[]  = [];

  itinerary_select: string="";
  departureTime: Time | null = null;
  arrivalTime: Time | null = null;
  departureCity: string="";
  arrivalCity: string="";
  midwayCity: string="";
  
  isModified: boolean = false; //tiene que ser un array de booleans

  onDepartureTimeChange() {
    this.isModified = true;
  }

  onSave(verify: boolean) {
    this.isModified = false; // Reseteamos la bandera ya que se ha guardado
    if(verify){
      if(this.midwayCities.findIndex(ciudad => ciudad === this.midwayCity) === -1){
        this.midwayCities.push(this.midwayCity);
        this.midwayCity = "";
      }
    }
  }

  onDelete(value: number){
    if(value === 0){

    }
    else if(value === 1){
      if(this.midwayCities.findIndex(ciudad => ciudad === this.midwayCity) !== -1){
        this.midwayCities.splice(this.midwayCities.findIndex(ciudad => ciudad === this.midwayCity),1);
        this.midwayCity = "";
        this.isModified = false;
      }
    }
  }

  //getters y setters
  get getItinerarySelect(){
      return this.itinerary_select;
  }

  set setItinerarySelect(value: string){
    this.itinerary_select = value;
  }

  get getDepartureTime(){
    return this.departureTime;
  }

  set setDepartureTime(value: Time){
    this.departureTime = value;
  }

  get getArrivalTime(){
    return this.arrivalTime;
  }

  set setArrivalTime(value: Time){
    this.arrivalTime = value;
  }

  get getDepartureCity(){
    return this.departureCity;
  }

  set setDepartureCity(value: string){
    this.departureCity = value;
  }

  get getArrivalCity(){
    return this.arrivalCity;
  }

  set setArrivalCity(value: string){
    this.arrivalCity = value;
  }

  get getMidwayCity(){
    return this.midwayCity;
  }

  set setMidwayCity(value: string){
    this.midwayCity = value;
  }
}
