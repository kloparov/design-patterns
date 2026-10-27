export abstract class RequestHandler {
  private next: RequestHandler | undefined;

  setNext(handler: RequestHandler): RequestHandler {
    this.next = handler;
    return handler;
  }

  handle(request: string): string | undefined {
    return this.next?.handle(request);
  }
}

export class KeywordHandler extends RequestHandler {
  constructor(
    private readonly keyword: string,
    private readonly response: string
  ) {
    super();
  }

  override handle(request: string): string | undefined {
    return request.includes(this.keyword)
      ? this.response
      : super.handle(request);
  }
}
