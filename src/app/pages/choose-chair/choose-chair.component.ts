import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajeService } from '../../services/opciones.service';
import { Asiento, AsientoEstado } from '../../models/asiento';

@Component({
  selector: 'app-choose-chair',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './choose-chair.component.html',
  styleUrl: './choose-chair.component.css'
})
export class ChooseChairComponent {
  auxNumThirteen = Array(13).fill(0);
  auxNumOne = Array(1).fill(0);
  auxNumTen = Array(10).fill(0);
  auxNumFour = Array(4).fill(0);
  
  imageSrcFirstColumn: string[] = [];
  imageSrcSecondColumn: string[] = [];
  imageSrcThirdColumnFirstRow: string[] = [];
  imageSrcFourthColumnFirstRow: string[] = [];
  imageSrcThirdColumn: string[] = [];
  imageSrcFourthColumn: string[] = [];
  public origin:string = "";
  public destination:string = "";
  public departureDate :string = "";
  public passengers:number = 0;
  public service:number = 0;
  public IDTramoOrigen:number = 0;
  public IDTramoDestino:number = 0;
  public costo:number = 0;

  asientosSeleccionadosId: number[] = [];

  asientos: Asiento[] = [];
  asientosEstado: AsientoEstado[] = [];

  asientosSeleccionados = 0;
  maxAsientos = 2; // Este valor debería venir de tu parámetro de consulta

  constructor(private router: Router,
    private route: ActivatedRoute,
    private viajeService: ViajeService){
    /*this.initialiceFirstColumn();
    this.initialiceSecundColumn();
    this.initialiceThirdColumnFirstRow();
    this.initialiceFourthColumnFirstRow();
    this.initialiceThirdColumn();
    this.initialiceFourthColumn();*/

    // Inicializa asientosEstado con 30 asientos no disponibles
    
  }

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
    for (let i = 0; i < 22; i++) {
      this.asientosEstado.push({
        id: i,
        estado: 'no-disponible'
      });
    }
    await this.getSeatsOptions(this.service);

  }

  getSeatsOptions(serviceID: number) {
    this.viajeService.getAsientos(serviceID)
    .subscribe({
      next: (respuesta: any) => {
        console.log(respuesta);
        this.asientos = respuesta
        
        console.log(respuesta.asientos)

        for (let index = 0; index < respuesta.asientos.length; index++) {

          const element = respuesta.asientos[index];
          let asientoEstado: AsientoEstado = {
            id: element.IDAsiento,
            estado: 'no-disponible'
          };
          if (element.Disponibilidad) {
            asientoEstado.estado = 'disponible';
          }
          // Actualiza el estado del asiento en asientosEstado
          console.log(this.asientosEstado[index].estado)

          this.asientosEstado[index] = asientoEstado;
        }
      },
      error: (error) => {
        // Maneja el error aquí
        console.error('Ocurrió un error al obtener los asientos del viaje:', error);
      }
    });
  }

  seleccionarAsiento(asiento: AsientoEstado): void {
    if (asiento.estado === 'disponible' && this.asientosSeleccionados < this.maxAsientos) {
      asiento.estado = 'seleccionado';
      this.asientosSeleccionados++;
      this.asientosSeleccionadosId.push(asiento.id);
    } else if (asiento.estado === 'seleccionado') {
      asiento.estado = 'disponible';
      this.asientosSeleccionados--;
      const index = this.asientosSeleccionadosId.indexOf(asiento.id);
      if (index > -1) {
        this.asientosSeleccionadosId.splice(index, 1);
      }
    }
  }

  confirmarAsientos(): void {
    this.router.navigate(['/administration/ticket-sales'], { 
      queryParams: { 
        origin: this.origin, 
        destination: this.destination, 
        departureDate: this.departureDate, 
        passengers: this.passengers,
        IDTramoOrigen: this.IDTramoOrigen,
        IDTramoDestino: this.IDTramoDestino,
        costo: this.costo * this.passengers
      } 
    });
  }
  changeColorChair(column: string[], value: string, i: number){
    column[i] = value;
  }

  initialiceFirstColumn() {
    for(let i = 0; i < this.auxNumThirteen.length; i++){
      this.imageSrcFirstColumn.push('assets/image/circle-yellow.png');
    }
  }

  initialiceSecundColumn() {
    for(let i = 0; i < this.auxNumThirteen.length; i++){
      this.imageSrcSecondColumn.push('assets/image/circle-yellow.png');
    }
  }

  initialiceThirdColumnFirstRow() {
    for(let i = 0; i < this.auxNumThirteen.length; i++){
      this.imageSrcThirdColumnFirstRow.push('assets/image/circle-yellow.png');
    }
  }

  initialiceFourthColumnFirstRow() {
    for(let i = 0; i < this.auxNumThirteen.length; i++){
      this.imageSrcFourthColumnFirstRow.push('assets/image/circle-yellow.png');
    }
  }

  initialiceThirdColumn() {
    for(let i = 0; i < this.auxNumThirteen.length; i++){
      this.imageSrcThirdColumn.push('assets/image/circle-yellow.png');
    }
  }

  initialiceFourthColumn() {
    for(let i = 0; i < this.auxNumThirteen.length; i++){
      this.imageSrcFourthColumn.push('assets/image/circle-yellow.png');
    }
  }
}
