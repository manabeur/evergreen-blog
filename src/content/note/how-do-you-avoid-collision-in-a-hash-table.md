---
title: "how do you avoid collisions in a hash table"
category: 'ruby | ds | hash table'
pubDate: 'Dec 12 2024 05:25:00'
---

There are two different ways to handle collisions:
- by chaining, or
- probing

The implementation of the hash table will change depending on the way you want to handle the collision. Chained Hash Table will use _chaining_ method. If you use Open-Addressed Hash Table, it will use _probing_ method to handle collisions.

A chaining is like a linked list; hence, chained hash table is dynamic. If a key already exist in a bucket (a list), you will append the key to the list.

```rb
---------  　  -----------
| key 1 |  --> | key 1-2 |  --> nil
---------      -----------       -----------
| key 2 |  --> | key 2-1 |  -->  | key 2-2 |  -->  nil
---------      -----------       -----------
|  ...  |
---------
```

A probing is used in open-addressed hash table, which is static like an array. When a key already exist in a table, instead of appending it, you _probe_ and find the next available spot.

```rb
hash_code = hash_function("KEY 1") # let's say 1

-----------------------------------------
|       | KEY 1 |       |       |       |
-----------------------------------------

hash_code = hash_function("KEY 2") # let's say 1 again

# [1] is already taken, so it finds the next available spot
-----------------------------------------
|       | KEY 1 | KEY 2 |       |       |
-----------------------------------------
```