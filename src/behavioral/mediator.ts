export interface ChatMediator {
  send(message: string, sender: User): void;
}

export class User {
  readonly received: string[] = [];

  constructor(
    public readonly name: string,
    private readonly mediator: ChatMediator
  ) {}

  send(message: string): void {
    this.mediator.send(message, this);
  }
}

export class ChatRoom implements ChatMediator {
  private readonly users: User[] = [];

  add(user: User): void {
    this.users.push(user);
  }

  send(message: string, sender: User): void {
    for (const user of this.users) {
      if (user !== sender) user.received.push(`${sender.name}: ${message}`);
    }
  }
}
