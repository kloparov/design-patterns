export class Configuration {
  private static instance: Configuration | undefined;

  private constructor(private readonly values: Readonly<Record<string, string>>) {}

  static getInstance(
    values: Readonly<Record<string, string>> = {}
  ): Configuration {
    this.instance ??= new Configuration(Object.freeze({ ...values }));
    return this.instance;
  }

  get(key: string): string | undefined {
    return this.values[key];
  }
}
