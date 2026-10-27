export {
  DarkThemeFactory,
  LightThemeFactory
} from "./creational/abstract-factory";
export type {
  Button as ThemeButton,
  Checkbox as ThemeCheckbox,
  WidgetFactory
} from "./creational/abstract-factory";
export * from "./creational/builder";
export * from "./creational/factory-method";
export { Circle as PrototypeCircle } from "./creational/prototype";
export type { Prototype } from "./creational/prototype";
export * from "./creational/singleton";
export * from "./structural/adapter";
export * from "./structural/bridge";
export * from "./structural/composite";
export * from "./structural/decorator";
export * from "./structural/facade";
export * from "./structural/flyweight";
export * from "./structural/proxy";
export * from "./behavioral/chain-of-responsibility";
export {
  Light,
  TurnOnCommand,
  Button as CommandButton
} from "./behavioral/command";
export type { Command } from "./behavioral/command";
export * from "./behavioral/interpreter";
export * from "./behavioral/iterator";
export * from "./behavioral/mediator";
export * from "./behavioral/memento";
export * from "./behavioral/observer";
export * from "./behavioral/state";
export * from "./behavioral/strategy";
export * from "./behavioral/template-method";
export {
  AreaVisitor,
  Circle as VisitorCircle,
  Rectangle
} from "./behavioral/visitor";
export type { Shape, ShapeVisitor } from "./behavioral/visitor";
