export interface Expression {
  interpret(): number;
}

export class NumberExpression implements Expression {
  constructor(private readonly value: number) {}

  interpret(): number {
    return this.value;
  }
}

export class AdditionExpression implements Expression {
  constructor(
    private readonly left: Expression,
    private readonly right: Expression
  ) {}

  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}
