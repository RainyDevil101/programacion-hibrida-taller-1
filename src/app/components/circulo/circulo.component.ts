
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Circle } from 'src/app/models/figuras-geometricas';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CirculoComponent implements OnInit {
  // Propiedades del componente
  radius: number = 0;
  result: number = 0;
  showResult: boolean = false;
  constructor() {}
  ngOnInit() {}
  // Método para calcular el perímetro del círculo
  calculate() {
    if (this.radius > 0) {
      const circle = new Circle(this.radius);
      this.result = circle.calculatePerimeter();
      this.showResult = true;
    }
  }
  // Método para limpiar los campos
  reset() {
    this.radius = 0;
    this.result = 0;
    this.showResult = false;
  }
}
