---
title: "JavaScript only has a map which is equivalent to unordered map"
category: 'js / ds'
pubDate: 'Oct 1 2024 4:15:00'
---

C++ provides two different map data structures: `unordered_map` and `map`. 

`unordered_map` is typically faster than the `map` especially when accessing elements because it is implemented using a hash map internally. Also it remembers the original insertion order of the keys.

JavaScript only provides a `Map` data structure which acts similary to `unordered_map`. It remembers the original insertion order of the keys, it has an average of constant time or logarithmic time look up depending on the interal implementation: _hash table_ or _tree_.

```js
const map1 = new Map();

map1.set('a', 1);
map1.set('c', 3);
map1.set('b', 2);

map1; // Map {'a': 1, 'c': 3, 'b': 2 }

map1.set('a', 97);
map1.get('a'); // 97
map1.size; // 3

map1.has('a'); // true
map1.hash('foo'); // false
```

Cool thing about the map in JavaScript is that we can use anything for the _key_ including a function and an object.

```js
const map1 = new Map();

const func = () => {console.log('function')}
const obj = {
    'a': 97,
    'b': 98
};

map1.set(func, 'this is a function');
map1.set(obj, 'this is an object')

map1.get(func); // 'this is a function'
map1.get(obj); // 'this is an object'
```