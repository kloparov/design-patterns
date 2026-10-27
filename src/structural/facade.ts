export class Cpu {
  start(): string {
    return "CPU started";
  }
}

export class Memory {
  load(): string {
    return "Memory loaded";
  }
}

export class Computer {
  constructor(
    private readonly cpu = new Cpu(),
    private readonly memory = new Memory()
  ) {}

  start(): string[] {
    return [this.cpu.start(), this.memory.load()];
  }
}
