---
title: "A key could be of any type in a hash table"
category: 'f2'
pubDate: 'Dec 09 2024 18:40:00'
---

A _key_ in hash table could be anything. It could be an integer, a string, a boolean, an object, or even a function.

```rb
ht = HashTable.new

foo = ->() { puts "hello" }
ht['function'] = foo

puts ht['function'] # <Proc ... (lambda)>
ht['function'].call # hello
```
