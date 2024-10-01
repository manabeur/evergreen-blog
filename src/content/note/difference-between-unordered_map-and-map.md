---
title: "Difference between unordered_map and map"
category: 'cpp / ds'
pubDate: 'Sep 18 2024 4:00:00'
updatedDate: 'Oct 01 2024 04:00:00'
---

Both `unordered_map` and `map` are data structures made up of `<key, value>` pairs. ~~In the inside, they are essentially a hash map.~~[^1] `unordered_map` is typically implemented using a hash map where elements are organized into corresponding buckets depending on their hash values for the fast access. On ther other hand, `map` is often implemented using binary search tree.

When you insert data into the `map`, data gets sorted automatically by their `key`. This convenient feature comes with a price though. The cost of the performance goes up by log resulting `O(log n)` just by instantiating and inserting data to the `map`. On the other hand, `unordered_map` is a map that does not order, meaning, it doesn’t sort data by their key. 

If you care more about the order of elements more than the performance accessing the data, use `map`. Otherwise, use `unordered_map` for the faster access.


Note that not all languages support these two data structures. For example, [JavaScript only has a map which is equivalent to unordered map](/note/javascript-only-has-a-map-which-is-equivalent-to-unordered_map).

[^1]: removed 2024-09-30