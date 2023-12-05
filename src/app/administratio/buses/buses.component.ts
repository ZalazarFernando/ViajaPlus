import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusesService } from '../../services/buses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Buses } from '../../models/buses';

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
export class BusesComponent implements OnInit {
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
  bus: Buses = {
    ID: 0,
    CreatedAt: '',
    UpdatedAt: '',
    DeletedAt: null,
    NroUnidad: 0,
    Pisos: 0,
    Situacion: false,
    CostoTransporte: 0,
    Categoria: '',
    TipoAtencion: ''
  };

  numeroUnidad: string = ""

  public busID: string = "";

  constructor(private route: ActivatedRoute,
    private router: Router,
    private busesService: BusesService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.busID = params['bid'] ;
      console.log(this.busID);
    });


    this.busesService.getBus(this.busID).
      subscribe((resp: any) => {
        debugger
      this.bus = resp.data;
      console.log(this.bus);
        this.numeroUnidad = resp.data.NroUnidad.toString()
    });
  }

  enviarDatos() {
    let datosFormulario = {
      NroUnidad: Number(this.numeroUnidad),
      TipoAtencion: this.bus.TipoAtencion,
      Categoria: this.bus.Categoria,
      Pisos: this.bus.Pisos,
      Situacion: this.bus.Situacion,
      CostoTransporte: this.bus.CostoTransporte
    };
  
    this.busesService.updateBus(this.busID, datosFormulario)
    .subscribe(response => {
      console.log(response);
    });
  }


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
