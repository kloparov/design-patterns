export interface ShapeVisitor<T> {
  visitCircle(circle: Circle): T;
  visitRectangle(rectangle: Rectangle): T;
}

export interface Shape {
  accept<T>(visitor: ShapeVisitor<T>): T;
}

export class Circle implements Shape {
  constructor(public readonly radius: number) {}

  accept<T>(visitor: ShapeVisitor<T>): T {
    return visitor.visitCircle(this);
  }
}

export class Rectangle implements Shape {
  constructor(
    public readonly width: number,
    public readonly height: number
  ) {}

  accept<T>(visitor: ShapeVisitor<T>): T {
    return visitor.visitRectangle(this);
  }
}

export class AreaVisitor implements ShapeVisitor<number> {
  visitCircle(circle: Circle): number {
    return Math.PI * circle.radius ** 2;
  }

  visitRectangle(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }
}
