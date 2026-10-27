export interface TemperatureSensor {
  readCelsius(): number;
}

export class FahrenheitThermometer {
  constructor(private readonly fahrenheit: number) {}

  readFahrenheit(): number {
    return this.fahrenheit;
  }
}

export class ThermometerAdapter implements TemperatureSensor {
  constructor(private readonly thermometer: FahrenheitThermometer) {}

  readCelsius(): number {
    return (this.thermometer.readFahrenheit() - 32) * (5 / 9);
  }
}
