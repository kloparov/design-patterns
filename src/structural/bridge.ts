export interface Renderer {
  renderCircle(radius: number): string;
}

export class VectorRenderer implements Renderer {
  renderCircle(radius: number): string {
    return `Vector circle with radius ${radius}`;
  }
}

export class RasterRenderer implements Renderer {
  renderCircle(radius: number): string {
    return `Raster circle with radius ${radius}`;
  }
}

export class CircleShape {
  constructor(
    private readonly renderer: Renderer,
    private readonly radius: number
  ) {}

  draw(): string {
    return this.renderer.renderCircle(this.radius);
  }
}
