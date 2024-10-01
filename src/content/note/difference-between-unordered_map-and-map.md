---
title: "Difference between unordered_map and map"
category: 'cpp / Data Structure'
pubDate: 'Sep 18 2024 4:00:00'
updatedDate: 'Sep 30 2024 18:30:00'

---

Both `unordered_map` and `map` are data structures made up of `<key, value>` pairs. ~~In the inside, they are essentially a hash map.~~ `unordered_map` is typically implemented using a hash map where elements are organized into corresponding buckets depending on their hash values for the fast access. On ther other hand, `map` is often implemented using binary search tree.

When you insert data into the `map`, data gets sorted automatically by their `key`. This convenient feature comes with a price though. The cost of the performance goes up by log resulting `O(log n)` just by instantiating and inserting data to the `map`.

On the other hand, as its name suggests, `unordered_map` is a map that does not order, meaning, it doesn’t sort data by their key. 

If you care more about the order of elements more than the performance accessing the data, use `map`. Otherwise, use `unordered_map` for the faster access.