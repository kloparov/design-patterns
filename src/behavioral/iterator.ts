export interface Iterator<T> {
  hasNext(): boolean;
  next(): T | undefined;
}

export class ArrayIterator<T> implements Iterator<T> {
  private index = 0;

  constructor(private readonly items: readonly T[]) {}

  hasNext(): boolean {
    return this.index < this.items.length;
  }

  next(): T | undefined {
    return this.items[this.index++];
  }
}
