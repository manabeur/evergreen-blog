---
title: "You can add properties in JavaScript arrays"
description: ''
pubDate: 'Jun 10 2024 16:37'
---

[Arrays](/notes/arrays) in JavaScript are quite far from the traditional array. In JavaScript, arrays are more like objects. Integer indexes become keys and you can even add properties to it.

```js
let arr = []
arr[10] = 7
console.log(arr) // [10: 7]

arr.foo = 'hello'
console.log(arr.foo) // "hello"
```