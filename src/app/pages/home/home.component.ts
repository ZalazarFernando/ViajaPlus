import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CiudadService } from '../../services/ciudad.service';
import { TravelFindComponent } from '../travel-find/travel-find.component';
import { FormControl, FormsModule } from '@angular/forms';
import { Observable, catchError, debounceTime, distinctUntilChanged, map, of, startWith, switchMap, tap } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { Ciudad } from '../../models/ciudad';

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
  public origin: Ciudad={ID: 0, Nombre:""};
  public destination: Ciudad={ID: 0, Nombre:""};
  public departureDate: Date | null = null;
  public backDate: Date | null = null;
  public passengers: string="";
  public radioOp1: string="";
  public radioOp2: string="";

  public messageToSend: any[] = [];
  filteredOriginCities: Observable<Ciudad[]>;
  filteredDestinationCities: Observable<Ciudad[]>;
  //cities: Observable<Ciudad[]> | undefined
  public originCityControl = new FormControl();
  public destinationCityControl = new FormControl();

  public errorMessage: string = "";

  public originSelected: boolean = false;
  public destinationSelected: boolean = false;

  public originCities: string[] = [];

  public destinationCities: string[] = [];
  public today = new Date().toISOString().split('T')[0];

  constructor(
    private router: Router,
    private cityService: CiudadService,
    ) { 

      //todo guardar el id de la ciudad con el nombres
      this.filteredOriginCities = this.originCityControl.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(city => {
          return this.cityService.getCiudades(city).pipe(
            catchError(error => {
              console.error(error);
              this.errorMessage = 'Ocurrió un error al buscar las ciudades';
              return of([]); // Devuelve un arreglo vacío si hay un error
            })
          );
        }),
        //map(ciudades => ciudades.map(ciudad => {
        //  nombre:ciudad.Nombre
        //  id:ciudad.ID
        //})), // Transforma el arreglo de ciudades a un arreglo de nombres
        tap(ciudades => {
          this.originSelected = false
          if (ciudades.length === 0) {
            this.originSelected = false
            this.errorMessage = 'No contamos con origen/destino disponible para esa ubicación';
          } else {
            this.errorMessage = "";
          }
        })
      );


      this.filteredDestinationCities = this.destinationCityControl.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(city => {
          return this.cityService.getCiudades(city).pipe(
            catchError(error => {
              console.error(error);
              this.errorMessage = 'Ocurrió un error al buscar las ciudades';
              return of([]); // Devuelve un arreglo vacío si hay un error
            })
          );
        }),
        //map(ciudades => ciudades.map(ciudad => ciudad.Nombre)), // Transforma el arreglo de ciudades a un arreglo de nombres
        tap(ciudades => {
          this.destinationSelected = false
          if (ciudades.length === 0) {
            this.errorMessage = 'No contamos con origen/destino disponible para esa ubicación';
          } else {
            this.errorMessage = "";
          }
        })
      );
    }

  dateBackDisabled: boolean = true;

  handleRadioChange(option: string) {
    if (option === 'op2') {
      this.dateBackDisabled = false; // Habilitar el input date "date_back"
    } else {
      this.dateBackDisabled = true; // Deshabilitar el input date "date_back"
    }
  }

  assignOriginValueToInput() {
    debugger

    console.log(this.origin)

    //if ((event.target as HTMLInputElement).value){
      this.originCityControl.setValue(this.origin.Nombre)
      //this.origin.Nombre = value.value
    //}
  }
  assignDestinationValueToInput() {
    console.log(this.destination)

    //if ((event.target as HTMLInputElement).value){
      this.destinationCityControl.setValue(this.destination.Nombre)
      //this.destination.Nombre = value.value
      
    //}
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
      this.router.navigate(['./travel-find'], { 
        queryParams: { 
          origin: this.origin.ID, 
          destination: this.destination.ID, 
          departureDate: this.departureDate, 
          passengers: this.passengers 
        } 
      });
    }
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
