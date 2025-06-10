import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Triangle } from 'src/app/models/figuras-geometricas';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class TrianguloComponent implements OnInit {
  // Propiedades del componente
  sideA: number = 0;
  sideB: number = 0;
  sideC: number = 0;
  result: number = 0;
  showResult: boolean = false;

  constructor() {}

  ngOnInit() {}

  // Método para calcular el perímetro del triangulo
  calculate() {
    if (this.sideA > 0 && this.sideB > 0 && this.sideC > 0) {
      this.result = new Triangle(
        this.sideA,
        this.sideB,
        this.sideC
      ).calculatePerimeter();
      this.showResult = true;
    }
  }

  // Método para limpiar los campos
  reset() {
    this.sideA = 0;
    this.sideB = 0;
    this.sideC = 0;
    this.result = 0;
    this.showResult = false;
  }
}
