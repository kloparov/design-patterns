export interface FileSystemEntry {
  getSize(): number;
}

export class File implements FileSystemEntry {
  constructor(
    public readonly name: string,
    private readonly size: number
  ) {}

  getSize(): number {
    return this.size;
  }
}

export class Directory implements FileSystemEntry {
  private readonly entries: FileSystemEntry[] = [];

  constructor(public readonly name: string) {}

  add(entry: FileSystemEntry): this {
    this.entries.push(entry);
    return this;
  }

  getSize(): number {
    return this.entries.reduce((total, entry) => total + entry.getSize(), 0);
  }
}
