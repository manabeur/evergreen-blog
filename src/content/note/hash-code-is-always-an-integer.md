---
title: "Hash code is always an integer"
category: 'ee1'
pubDate: 'Dec 09 2024 18:30:00'
---

The hash code is a result of applying hash functions to an arbitrary `key` in a hash table.

```rb
hash_code = hash_function(some_key)
```

This value should always be an integer since it acts as an index like in the array. We use this hash code to retrieve a value from the table.

Depends on the hash function you're using, it is possible for a hash function to produce the same hash code for two different keys, which happens all the time; this is called a _collision_. 

So, [how do you avoid collisions in a hash table](/note/how-do-you-avoid-collision-in-a-hash-table)? There are many ways. You can either implement a bettor hash functions, use multiple hash functions for a key (_double hashing_), use different types of hash table (e.g. chained hash table, open-addressed hash table, etc...)