// Classe base
export abstract class GeometricFigure {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract calculatePerimeter(): number;
  getName(): string {
    return this.name;
  }
}
// Classe derivada: Círculo
export class Circle extends GeometricFigure {
  private radius: number;
  constructor(radius: number) {
    super('Círculo');
    this.radius = radius;
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
  getRadius(): number {
    return this.radius;
  }
}
// Classe derivada: Triangulo Escaleno
export class Triangle extends GeometricFigure {
  private sideA: number;
  private sideB: number;
  private sideC: number;
  constructor(sideA: number, sideB: number, sideC: number) {
    super('Triângulo Escaleno');
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  calculatePerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }
  getSides(): [number, number, number] {
    return [this.sideA, this.sideB, this.sideC];
  }
}
// Classe derivada: Triangulo Equilátero
export class EquilateralTriangle extends Triangle {
  constructor(side: number) {
    super(side, side, side);
    this['name'] = 'Triangulo Equilátero';
  }
}