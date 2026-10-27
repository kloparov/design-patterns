export type Observer<T> = (value: T) => void;

export class Observable<T> {
  private readonly observers = new Set<Observer<T>>();

  subscribe(observer: Observer<T>): () => void {
    this.observers.add(observer);
    return () => this.observers.delete(observer);
  }

  notify(value: T): void {
    for (const observer of this.observers) observer(value);
  }
}
