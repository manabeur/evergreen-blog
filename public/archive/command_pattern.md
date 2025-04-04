---
title: "Command Pattern"
category: 'Design Pattern'
pubDate: 'Feb 03 2024 15:26'
---

A Command Pattern is a [[behavioral design pattern]] which focuses on how objects interact and communicate with other objects. 

The Command Pattern separates all the methods from the object that is calling them to remove any dependent relationship. This allows the separation of concerns and provides ways to pass the request and all the necessary information to process it as an object into the function. With parameterized objects, we can easily track processed operations and even support undoing the request.

---

Let's consider an online food ordering system where users can utilize our platform to place orders, track their orders, or cancel them.

We can implement a class called `OrderSystem` with member methods such as `orderFood`, `trackOrder`, and `cancelOrder`. By creating an instance of `OrderSystem`, users can directly invoke these methods.

```js
class OrderSystem {
	#orders;
	
	constructor() {
		this.#orders = []
	}

	orderFood(id, order) {
		this.#orders.push(id)
		console.log(`Your food '${order}' (${id}) will be ready soon.`);
	}

	trackOrder(id) {
		if(this.#orders.includes(id))
			console.log(`The order #${id} will arrive in 17 minutes.`)
		else
			console.log(`The order #${id} is not in the system.`)	
	}

	cancelOrder(id) {
		if(this.#orders.includes(id)) {
			this.#orders = this.#orders.filter(order => order !== id);
			console.log(`Order #${id} has been canceled.`)
		} else {
			console.log(`Order #${id} does not exist.`)
		}
	}
}

const system = new OrderSystem()
system.orderFood(1, 'Chai tea')
system.trackOrder(1)
system.cancelOrder(1)
system.trackOrder(1)
```


While calling methods directly is acceptable, there are drawbacks, especially as the application grows in size and complexity. For instance, consider changing the method name from `orderFood` to `order`. This requires modifying the code in the base class, and then ensuring that `orderFood` is not referenced anywhere else in the codebase.

Instead, we can mitigate these issues by decoupling methods from the `system` and creating separate `command` functions for each operation. This way, when we need to modify or add a new method, we can simply create or modify the corresponding command, eliminating the need to alter the code in the `system`.

## Invoker Class

Let's begin by creating an invoker class. This class is designed to _invoke_ commands, much like a TV remote. When you press a button, the remote packages all necessary information into an object and sends that request to the specified command.

```js
// invoker 
class OrderInvoker {
	#command;
	
	constructor(command) {
		this.#command = command
	}

	execute() {
		this.#command.execute()
	}
}
```

The `setCommand` method is utilized to specify which commands (e.g., _order_, _track_, _delete_, etc.) to call. Once specified, you can invoke the command by calling the `execute` method.

Now, let's create a command class for each operation we mentioned earlier.

## Command Interface and Classes

All of our command classes will inherit the Command interface. 

```js
// Command Interface
class Command {
	_system;
	_args;
	constructor(system, ...args) {
		this._system = system;
		this._args = args
	}
	execute() {}
}
```

Each command inherits only the `execute` method, as there are no other shared operations between commands.

Now, let's proceed to implement each command.

```js
// Concrete Commands
class OrderFoodCommand extends Command {
	constructor(system, ...args) {
		super(system, ...args)
	}

	execute() {
		this._system.orderFood(...this._args)
	}
}

class TrackFoodCommand extends Command {
	constructor(system, ...args) {
		super(system, ...args)
	}

	execute() {
		this._system.trackFood(...this._args)
	}
}

class CancelOrderCommand extends Command {
	constructor(system, ...args) {
		super(system, ...args)
	}

	execute() {
		this._system.cancelOrder(...this._args)
	}
}
```

Having implemented our commands, it's important to note that these commands will be utilized by the receiver class.

## Receiver

The receiver class is responsible for executing the command, handling the underlying logic.

```js
// Receiver 
class OrderReceiver {
	#orders;
	constructor() {
		this.#orders = []
	}

	orderFood(id, order) {
		this.#orders.push(id)
		console.log(`Your food '${order}' (${id}) will be on the way.`);
	}
	trackFood(id) {
		if(this.#orders.includes(id))
			console.log(`The order #${id} will arrive in 17 minutes.`)
		else
			console.log(`The order #${id} is not on the list.`)	
	}
	cancelOrder(id) {
		if(this.#orders.includes(id)) {
			this.#orders = this.#orders.filter(order => order !== id);
			console.log(`Order #${id} has been canceled.`)
		} else {
			console.log(`Order #${id} does not exist.`)
		}
	}
}
```

## Test

Let's put our implementation to the test.

```js
const receiver = new OrderReceiver()
const {id, product} = {id: 1, product: 'Shin Ramen'}

// requests -> delievered to invoker 
//          -> invoker delievers the encapsulated request object
const orderFoodCommand = new OrderFoodCommand(receiver, id, product)
let order = new OrderInvoker(orderFoodCommand) // invoker
order.execute()

const trackFoodCommand = new TrackFoodCommand(receiver, id)
order = new OrderInvoker(trackFoodCommand)
order.execute()

const cancelOrderCommand = new CancelOrderCommand(receiver, id)
order = new OrderInvoker(cancelOrderCommand)
order.execute()
```

## References
- Command pattern. (n.d.). https://www.patterns.dev/vanilla/command-pattern
- Refactoring.Guru. (2024, January 1). Command. https://refactoring.guru/design-patterns/command
- 민동현. (2020, May 20). Command 패턴. https://donghyeon.dev/design%20pattern/2020/05/20/%EC%BB%A4%EB%A7%A8%EB%93%9C-%ED%8C%A8%ED%84%B4/
