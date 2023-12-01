import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-to-pay',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './info-to-pay.component.html',
  styleUrl: './info-to-pay.component.css'
})
export class InfoToPayComponent {
  numberCard: string="0000 0000 0000 0000";
  keyCard: string="0000";
  nameCard: string="";

  saveData(){

  }
}
