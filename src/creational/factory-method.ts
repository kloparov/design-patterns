export interface Notification {
  send(message: string): string;
}

export abstract class NotificationCreator {
  protected abstract createNotification(): Notification;

  notify(message: string): string {
    return this.createNotification().send(message);
  }
}

export class EmailCreator extends NotificationCreator {
  protected createNotification(): Notification {
    return { send: (message) => `Email: ${message}` };
  }
}

export class SmsCreator extends NotificationCreator {
  protected createNotification(): Notification {
    return { send: (message) => `SMS: ${message}` };
  }
}
