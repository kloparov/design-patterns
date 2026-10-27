export interface Memento {
  readonly text: string;
}

export class TextEditor {
  private text = "";

  write(text: string): void {
    this.text += text;
  }

  save(): Memento {
    return Object.freeze({ text: this.text });
  }

  restore(memento: Memento): void {
    this.text = memento.text;
  }

  read(): string {
    return this.text;
  }
}
