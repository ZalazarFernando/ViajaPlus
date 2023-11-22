import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CiudadService } from '../../services/ciudad.service';
import { TravelFindComponent } from '../travel-find/travel-find.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    TravelFindComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  public origin: string="";
  public destination: string="";
  public departureDate: any="";
  public backDate: any="";
  public passengers: string="";

  public messageToSend: any="";

  constructor(
    private router: Router
    //private cityService: CiudadService
    ) { }

  /*ngOnInit(){
    this.cityService.getCiudades(this.origin).subscribe((value)=>{
      this.origin = value;
    });

    this.cityService.getCiudades(this.destination).subscribe((value)=>{
      this.destination = value;
    });
  }*/

  //Intento para obtener información de la bd
  SearchTravel() {
    /*const origin = (document.querySelector('input[name="origin"]') as HTMLInputElement).value;
    const destination = (document.querySelector('input[name="destination"]') as HTMLInputElement).value;
    const departureDate = (document.querySelector('input[name="hour_leaving"]') as HTMLInputElement).value;
    const arrivalDate = (document.querySelector('input[name="hour_arrival"]') as HTMLInputElement).value;
    const passengers = (document.querySelector('select') as HTMLSelectElement).value;
    const roundTrip = (document.querySelector('input[name="round-trip"]:checked') as HTMLInputElement).value;*/
    this.messageToSend = this.origin + this.destination + this.departureDate + this.backDate + this.passengers;
    this.router.navigate(['./travel-find']);
  }

  //variables
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
