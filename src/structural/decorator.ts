export interface Coffee {
  cost(): number;
  description(): string;
}

export class Espresso implements Coffee {
  cost(): number {
    return 2;
  }

  description(): string {
    return "Espresso";
  }
}

export class MilkDecorator implements Coffee {
  constructor(private readonly coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 0.5;
  }

  description(): string {
    return `${this.coffee.description()} with milk`;
  }
}
