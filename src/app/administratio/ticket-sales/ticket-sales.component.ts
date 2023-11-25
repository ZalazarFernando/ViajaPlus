import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-sales',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './ticket-sales.component.html',
  styleUrl: './ticket-sales.component.css'
})
export class TicketSalesComponent {
  name: string="";
  lastname: string="";
  dni: string="";

  allData: string[] = [];

  saveData(){
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
