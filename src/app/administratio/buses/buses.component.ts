import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buses',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './buses.component.html',
  styleUrl: './buses.component.css'
})
export class BusesComponent {
  numbersUnit: string[] = [];

  newNumberUnity: string="";
  typeService: string="";
  category: string="";
  countFloor: string="";
  condition: string="";
  cost: string="";

  NumberChairs: string="";

  showSecondFloorChairs: Boolean = true;
  showNewNumberUnit: boolean = true;

  //getters y setters
  get getCost(){
    return this.cost;
  }

  set setCost(value: string){
    this.cost = value;
  }

  get getCondition(){
    return this.condition;
  }

  set setCondition(value: string){
    this.condition = value;
  }

  get getCountFloor(){
    return this.countFloor;
  }

  set setCountFloor(value: string){
    this.countFloor = value;
  }

  get getCategory(){
    return this.category;
  }

  set setCategory(value: string){
    this.category = value;
  }

  get getTypeService(){
    return this.typeService;
  }

  set setTypeService(value: string){
    this.typeService = value;
  }
}
