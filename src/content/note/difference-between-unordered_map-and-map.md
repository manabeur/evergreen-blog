---
title: "Difference between unordered_map and map"
category: 'Data Structure'
pubDate: 'Sep 18 2024 4:00:00'
---

Both `unordered_map` and `map` are data structures made up of `<key, value>` pairs. In the inside, they are essentially a hash map.

When you insert data into the `map`, data gets sorted automatically by their `key`. This convenient feature comes with a price though. The cost of the performance goes up by log resulting `O(log n)` just by instantiating and inserting data to the `map`.

On the other hand, as its name suggests, `unordered_map` is a map that does not order meaning, it doesn’t sort data by their key. 

If you need your structure to be ordered by certain key, use `map`. Otherwise, use `unordered_map` to reduce the cost.