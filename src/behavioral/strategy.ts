export interface PricingStrategy {
  calculate(price: number): number;
}

export class NoDiscount implements PricingStrategy {
  calculate(price: number): number {
    return price;
  }
}

export class PercentageDiscount implements PricingStrategy {
  constructor(private readonly percent: number) {
    if (percent < 0 || percent > 100) {
      throw new RangeError("Discount must be between 0 and 100");
    }
  }

  calculate(price: number): number {
    return price * (1 - this.percent / 100);
  }
}

export class Checkout {
  constructor(private readonly strategy: PricingStrategy) {}

  total(price: number): number {
    return this.strategy.calculate(price);
  }
}
