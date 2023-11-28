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
  itineraries: any[] = [];
  midwayCities: any[]  = [];
  
  departureTime: Time | null = null;
  arrivalTime: Time | null = null;
  departureCity: string="";
  arrivalCity: string="";

  itinerarySelected: string="";
  midwayCity: string="";
  newItinerary: string="";
  
  isModified: boolean = false; //tiene que ser un array de booleans
  showAddItinerary: boolean = true;

  onChange() {
    this.isModified = true;
  }

  onSave(value: number) {
    if(value === 0){
      this.isModified = false; // Reseteamos la bandera ya que se ha guardado
    }
    else if(value === 1){
      if(this.midwayCities.findIndex(ciudad => ciudad === this.midwayCity) === -1){
        this.midwayCities.push(this.midwayCity);
        this.midwayCity = "";
      }
    }
    else if(value === 2){
      this.itineraries.push(this.newItinerary);
      this.newItinerary = "";
    }
  }

  onDelete(value: number){
    if(value === 0){
      if(this.itineraries.findIndex(ciudad => ciudad === this.itinerarySelected) !== -1){
        this.itineraries.splice(this.itineraries.findIndex(ciudad => ciudad === this.itinerarySelected),1);
        this.isModified = false;
        console.log(this.itineraries); 
      }
    }
    else if(value === 1){
      if(this.midwayCities.findIndex(ciudad => ciudad === this.midwayCity) !== -1){
        this.midwayCities.splice(this.midwayCities.findIndex(ciudad => ciudad === this.midwayCity),1);
        this.midwayCity = "";
        this.isModified = false;
      }
    }
  }

  onNewItinerary(){
    this.showAddItinerary = true;
  }
  onCancelnewItinerary(){
    this.showAddItinerary = false;
  }

  //getters y setters
  get getItinerarySelect(){
      return this.itinerarySelected;
  }

  set setItinerarySelect(value: string){
    this.itinerarySelected = value;
  }

  get getNewItinerary(){
    return this.newItinerary;
  }

  set setNewItinerary(value: string){
    this.newItinerary = value;
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
