const test = require("node:test");
const assert = require("node:assert/strict");
const patterns = require("../dist");

test("abstract factory creates a consistent widget family", () => {
  const factory = new patterns.DarkThemeFactory();
  assert.equal(factory.createButton().render(), "Dark button");
  assert.equal(factory.createCheckbox().render(), "Dark checkbox");
});

test("builder creates a configured immutable product", () => {
  const house = new patterns.HouseBuilder().setRoof("slate").build();
  assert.equal(house.roof, "slate");
  assert.ok(Object.isFrozen(house));
});

test("factory method delegates object creation to subclasses", () => {
  assert.equal(new patterns.EmailCreator().notify("hello"), "Email: hello");
});

test("prototype clones preserve values without sharing identity", () => {
  const original = new patterns.PrototypeCircle(4, "blue");
  const copy = original.clone();
  assert.deepEqual(copy, original);
  assert.notEqual(copy, original);
});

test("singleton returns one instance", () => {
  assert.equal(
    patterns.Configuration.getInstance({ mode: "test" }),
    patterns.Configuration.getInstance({ mode: "ignored" })
  );
  assert.equal(patterns.Configuration.getInstance().get("mode"), "test");
});

test("adapter converts Fahrenheit to Celsius", () => {
  const sensor = new patterns.ThermometerAdapter(
    new patterns.FahrenheitThermometer(212)
  );
  assert.equal(sensor.readCelsius(), 100);
});

test("bridge combines an abstraction with a renderer", () => {
  assert.equal(
    new patterns.CircleShape(new patterns.VectorRenderer(), 3).draw(),
    "Vector circle with radius 3"
  );
});

test("composite sums leaf sizes recursively", () => {
  const directory = new patterns.Directory("root")
    .add(new patterns.File("a", 10))
    .add(new patterns.Directory("nested").add(new patterns.File("b", 5)));
  assert.equal(directory.getSize(), 15);
});

test("decorator adds behavior to a wrapped component", () => {
  const coffee = new patterns.MilkDecorator(new patterns.Espresso());
  assert.equal(coffee.cost(), 2.5);
  assert.equal(coffee.description(), "Espresso with milk");
});

test("facade coordinates subsystem operations", () => {
  assert.deepEqual(new patterns.Computer().start(), [
    "CPU started",
    "Memory loaded"
  ]);
});

test("flyweight reuses intrinsic state", () => {
  const factory = new patterns.CharacterStyleFactory();
  assert.equal(factory.getStyle("serif", 12), factory.getStyle("serif", 12));
  assert.equal(factory.styleCount, 1);
});

test("proxy provides access to the underlying image", () => {
  assert.equal(
    new patterns.LazyImageProxy("photo.png").display(),
    "Displaying photo.png"
  );
});

test("chain of responsibility passes a request to a matching handler", () => {
  const first = new patterns.KeywordHandler("help", "help response");
  first.setNext(new patterns.KeywordHandler("bye", "goodbye"));
  assert.equal(first.handle("please help"), "help response");
  assert.equal(first.handle("bye"), "goodbye");
});

test("command encapsulates an operation", () => {
  const button = new patterns.CommandButton(
    new patterns.TurnOnCommand(new patterns.Light())
  );
  assert.equal(button.press(), "Light on");
});

test("interpreter evaluates a composed expression", () => {
  const expression = new patterns.AdditionExpression(
    new patterns.NumberExpression(2),
    new patterns.NumberExpression(3)
  );
  assert.equal(expression.interpret(), 5);
});

test("iterator traverses values in order", () => {
  const iterator = new patterns.ArrayIterator(["a", "b"]);
  assert.equal(iterator.next(), "a");
  assert.equal(iterator.hasNext(), true);
  assert.equal(iterator.next(), "b");
  assert.equal(iterator.hasNext(), false);
});

test("mediator routes messages between participants", () => {
  const room = new patterns.ChatRoom();
  const alice = new patterns.User("Alice", room);
  const bob = new patterns.User("Bob", room);
  room.add(alice);
  room.add(bob);
  alice.send("hello");
  assert.deepEqual(bob.received, ["Alice: hello"]);
  assert.deepEqual(alice.received, []);
});

test("memento restores a saved editor state", () => {
  const editor = new patterns.TextEditor();
  editor.write("before");
  const checkpoint = editor.save();
  editor.write(" after");
  editor.restore(checkpoint);
  assert.equal(editor.read(), "before");
});

test("observer notifies subscribers and supports unsubscribe", () => {
  const observable = new patterns.Observable();
  const received = [];
  const unsubscribe = observable.subscribe((value) => received.push(value));
  observable.notify("first");
  unsubscribe();
  observable.notify("second");
  assert.deepEqual(received, ["first"]);
});

test("state changes the traffic light behavior", () => {
  const light = new patterns.TrafficLight();
  assert.equal(light.color, "green");
  light.change();
  assert.equal(light.color, "yellow");
});

test("strategy changes checkout pricing", () => {
  const checkout = new patterns.Checkout(
    new patterns.PercentageDiscount(20)
  );
  assert.equal(checkout.total(100), 80);
});

test("template method fixes the export algorithm and specializes a step", () => {
  const exporter = new patterns.JsonExporter({ ok: true });
  assert.equal(exporter.export(), 'BEGIN\n{"ok":true}\nEND');
});

test("visitor performs operations on different element types", () => {
  const visitor = new patterns.AreaVisitor();
  assert.equal(new patterns.VisitorCircle(2).accept(visitor), Math.PI * 4);
  assert.equal(new patterns.Rectangle(3, 4).accept(visitor), 12);
});
