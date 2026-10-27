export interface House {
  readonly foundation: string;
  readonly walls: string;
  readonly roof: string;
}

export class HouseBuilder {
  private foundation = "concrete";
  private walls = "brick";
  private roof = "tile";

  setFoundation(value: string): this {
    this.foundation = value;
    return this;
  }

  setWalls(value: string): this {
    this.walls = value;
    return this;
  }

  setRoof(value: string): this {
    this.roof = value;
    return this;
  }

  build(): House {
    return Object.freeze({
      foundation: this.foundation,
      walls: this.walls,
      roof: this.roof
    });
  }
}
