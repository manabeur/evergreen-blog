---
title: "You can add properties in JavaScript arrays"
category: "ea2"
pubDate: "June 10 2024 16:45:00"
---

[Arrays](/note/what-is-an-array) in JavaScript are quite far from the traditional array. In JavaScript, arrays are more like objects. Integer indexes become keys and you can even add properties to it.

```js
let arr = []
arr[10] = 7
console.log(arr) // [10: 7]

arr.foo = 'hello'
console.log(arr.foo) // "hello"
```