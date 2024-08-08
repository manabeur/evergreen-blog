---
title: "Difference between function.call and function.apply"
description: ''
pubDate: 'Mar 02 2024'
---


Both methods are used to call a function, but they differ by argument type. `function.apply` expects an array and `function.call` expects a comma separated values.

//

The difference between `function.apply` and `function.call` comes from how arguments are passed to those two functions.

The `function.apply` expects the passed argument to be in an **array** form. On the other hand, the `function.call` expects the arguments to be explicitly separated by commas.

Think of the '**A**' in `apply` as an array, and the letter '**C**' in `call` as a separator.

[function.prototype.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
```js
var cancellable = function(fn, args, t) {
    const timeout = setTimeout(() => {
        fn.call(null, ...args) // args -> spread
    }, t)

    const cancelFn = function() {
        clearTimeout(timeout)
    };

    return cancelFn
};
```

[function.prototype.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
```js
var cancellable = function(fn, args, t) {
    const timeout = setTimeout(() => {
        fn.apply(null, args)  // args -> an array
    }, t)

    const cancelFn = function() {
        clearTimeout(timeout)
    };

    return cancelFn
};
```