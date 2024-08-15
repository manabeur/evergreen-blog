---
title: "sort string numbers using sort_by"
description: ''
pubDate: 'Mar 17 2024 20:00'
---


Given a number `n`, where `n <= 1,000,000,000`, sort the digits in descending order (e.g. `"15234"` -> `54321`).

```rust
use std::io;

fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let mut nums: Vec<char> = input.chars().collect();
    
    nums.sort_by(|a, b| b.cmp(a));
    
    let nums: String = nums.into_iter().collect();

    println!("{nums}");
}
```

Both converting the input to a vector of characters and turning the sorted characters back to the string takes `O(n)` time.

The overall time complexity is `O(nlogn)` which is from the sorting algorithm Rust is using internally, _pattern-defeating quick sort_.