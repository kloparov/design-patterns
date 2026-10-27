export interface Image {
  display(): string;
}

export class RealImage implements Image {
  constructor(public readonly filename: string) {}

  display(): string {
    return `Displaying ${this.filename}`;
  }
}

export class LazyImageProxy implements Image {
  private image: RealImage | undefined;

  constructor(private readonly filename: string) {}

  display(): string {
    this.image ??= new RealImage(this.filename);
    return this.image.display();
  }
}
