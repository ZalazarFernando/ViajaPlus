import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-chair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-chair.component.html',
  styleUrl: './choose-chair.component.css'
})
export class ChooseChairComponent {
  auxNumThirteen = Array(13).fill(0);
  auxNumOne = Array(1).fill(0);
  auxNumTen = Array(10).fill(0);
  auxNumFour = Array(4).fill(0);
}
