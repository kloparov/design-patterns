export abstract class DataExporter {
  export(): string {
    return this.header() + this.serialize() + this.footer();
  }

  protected header(): string {
    return "BEGIN\n";
  }

  protected abstract serialize(): string;

  protected footer(): string {
    return "\nEND";
  }
}

export class JsonExporter extends DataExporter {
  constructor(private readonly data: unknown) {
    super();
  }

  protected serialize(): string {
    return JSON.stringify(this.data);
  }
}
