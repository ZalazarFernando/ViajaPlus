import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor() {
    this.initialiceFirstColumn();
    this.initialiceSecundColumn();
    this.initialiceThirdColumnFirstRow();
    this.initialiceFourthColumnFirstRow();
    this.initialiceThirdColumn();
    this.initialiceFourthColumn();
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
