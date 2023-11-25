import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CiudadService } from '../../services/ciudad.service';
import { TravelFindComponent } from '../travel-find/travel-find.component';
import { FormControl, FormsModule } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TravelFindComponent,
    ReactiveFormsModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  public origin: string="";
  public destination: string="";
  public departureDate: Date | null = null;
  public backDate: Date | null = null;
  public passengers: string="";
  public radioOp1: string="";
  public radioOp2: string="";

  public messageToSend: any[] = [];
  filteredCities$: Observable<string[]>;
  cityControl = new FormControl();


  constructor(
    private router: Router,
    private cityService: CiudadService,
    //private itineraryService: ItinerarioService
    ) { 

      this.filteredCities$ = this.cityControl.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(city => this.cityService.getCiudades(city))
      );

    }

  /*ngOnInit(){
    this.cityService.getCiudades(this.origin).subscribe((value)=>{
      this.origin = value;
    });

    this.cityService.getCiudades(this.destination).subscribe((value)=>{
      this.destination = value;
    });

    this.itineraryService.getItinerario(this.origin, this.destination, this.departureDate.getTime()).subscribe((value)=>{

    })
  }*/

  dateBackDisabled: boolean = true;

  handleRadioChange(option: string) {
    if (option === 'op2') {
      this.dateBackDisabled = false; // Habilitar el input date "date_back"
    } else {
      this.dateBackDisabled = true; // Deshabilitar el input date "date_back"
    }
  }

  //Intento para obtener información de la bd
  SearchTravel() {
    /*const origin = (document.querySelector('input[name="origin"]') as HTMLInputElement).value;
    const destination = (document.querySelector('input[name="destination"]') as HTMLInputElement).value;
    const departureDate = (document.querySelector('input[name="hour_leaving"]') as HTMLInputElement).value;
    const arrivalDate = (document.querySelector('input[name="hour_arrival"]') as HTMLInputElement).value;
    const passengers = (document.querySelector('select') as HTMLSelectElement).value;
    const roundTrip = (document.querySelector('input[name="round-trip"]:checked') as HTMLInputElement).value;*/
    
    if (this.origin && this.destination && this.departureDate && this.passengers) {
      this.messageToSend.push(this.origin);
      this.messageToSend.push(this.destination);
      this.messageToSend.push(this.departureDate);
      this.messageToSend.push(this.backDate);
      this.messageToSend.push(this.passengers);
      this.messageToSend.push(this.radioOp1);
      this.messageToSend.push(this.radioOp2);

      this.router.navigate(['./travel-find']);
    }
  }

  //setter y getters
  get getOrigin(): string {
    return this.origin;
  }
  
  set setOrigin(value: string) {
    this.origin = value;
  }

  get getDestination(): string {
    return this.destination;
  }
  
  set setDestination(value: string) {
    this.destination = value;
  }

  get getRadioOp1(): string {
    return this.radioOp1;
  }
  
  set setRadioOp2(value: string) {
    this.radioOp2 = value;
  }

  get getDepartureDate(): Date | null{
    return this.departureDate;
  }
  
  set setDepartureDate(value: Date) {
    this.departureDate = value;
  }

  get getBackDate(): Date | null{
    return this.backDate;
  }
  
  set setBackDate(value: Date) {
    this.backDate = value;
  }

  get getPassengers(): string{
    return this.passengers;
  }
  
  set setPassengers(value: string) {
    this.passengers = value;
  }

  //hardcodeo
  title_destination : string[] = [
    'Brasil',
    'Argentina',
    'España',
    'EE.UU',
    'Irlanda',
    'Rusia'
  ]
  url_img : string[] = [
    'https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3428177/pexels-photo-3428177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19013731/pexels-photo-19013731/free-photo-of-blanco-y-negro-punto-de-referencia-espana-catolico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]
}
