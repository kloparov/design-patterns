export interface TrafficLightState {
  color: string;
  next(): TrafficLightState;
}

export class GreenState implements TrafficLightState {
  readonly color = "green";

  next(): TrafficLightState {
    return new YellowState();
  }
}

export class YellowState implements TrafficLightState {
  readonly color = "yellow";

  next(): TrafficLightState {
    return new RedState();
  }
}

export class RedState implements TrafficLightState {
  readonly color = "red";

  next(): TrafficLightState {
    return new GreenState();
  }
}

export class TrafficLight {
  constructor(private state: TrafficLightState = new GreenState()) {}

  get color(): string {
    return this.state.color;
  }

  change(): void {
    this.state = this.state.next();
  }
}
