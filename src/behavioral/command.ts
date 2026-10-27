export interface Command {
  execute(): string;
}

export class Light {
  turnOn(): string {
    return "Light on";
  }
}

export class TurnOnCommand implements Command {
  constructor(private readonly light: Light) {}

  execute(): string {
    return this.light.turnOn();
  }
}

export class Button {
  constructor(private readonly command: Command) {}

  press(): string {
    return this.command.execute();
  }
}
