# Design Patterns in TypeScript

Small, runnable examples of the 23 classic Gang of Four (GoF) design patterns,
grouped into creational, structural, and behavioral patterns. Each example
focuses on the pattern's central idea rather than a framework or a particular
application domain.

## Patterns

### Creational

- Abstract Factory — create related products through a shared factory interface.
- Builder — assemble a product step by step.
- Factory Method — let subclasses choose which product to create.
- Prototype — create objects by cloning an existing instance.
- Singleton — provide one shared instance.

### Structural

- Adapter — translate one interface into another.
- Bridge — separate an abstraction from its implementation.
- Composite — treat individual objects and compositions uniformly.
- Decorator — add behavior by wrapping an object.
- Facade — provide a simple interface to a subsystem.
- Flyweight — share reusable intrinsic state.
- Proxy — control access to an underlying object.

### Behavioral

- Chain of Responsibility — pass a request through potential handlers.
- Command — encapsulate a request as an object.
- Interpreter — represent and evaluate a small expression language.
- Iterator — traverse a collection without exposing its representation.
- Mediator — centralize communication between objects.
- Memento — capture and restore an object's state.
- Observer — notify subscribers when a value changes.
- State — vary behavior as an object's state changes.
- Strategy — make an algorithm interchangeable.
- Template Method — define an algorithm skeleton with customizable steps.
- Visitor — add operations across a set of element types.

## Getting started

Requires Node.js and npm.

```sh
npm install
npm test
npm run build
```

Compiled examples are written to `dist/`. Import individual patterns from
their files, or import the public exports from `src/index.ts`. For example:

```ts
import { HouseBuilder } from "./src";

const house = new HouseBuilder().setRoof("slate").build();
```

These are the classic GoF patterns; the broader software-pattern landscape
also includes architectural, concurrency, and domain-specific patterns.