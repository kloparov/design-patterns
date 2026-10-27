export interface Prototype<T> {
  clone(): T;
}

export class Circle implements Prototype<Circle> {
  constructor(public radius: number, public color: string) {}

  clone(): Circle {
    return new Circle(this.radius, this.color);
  }
}
