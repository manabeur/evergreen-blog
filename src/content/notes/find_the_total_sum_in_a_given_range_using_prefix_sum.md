---
title: "Find the total sum in a given range using prefix sum"
description: ''
pubDate: 'Mar 15 2024 18:27'
---

A `prefix sum` or `cumulative sum` is an algorithm used to find the total sum in a given range.

//

Given `values = [5,4,3,2,1]` and `i=2`, `j=4`, you need to find the sum of values between those two indexes. In this case, the answer is going to be `4+3+2 = 9`.

The direct and naive solution would be using two loops. First loop to get the sum of numbers from `x = [i]` to `[i-1]` and another one to get the sum from `y = [1]` to `[j]`. And then you can subtract `x` from `y` to get the total sum in that range.

```rust
use std::io::{stdin, stdout, Write, BufWriter};

fn r() -> Vec<i32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.split_whitespace().flat_map(str::parse).collect()
}

fn main() {
    let values: Vec<i32> = r();
    let pq: Vec<i32> = r();
    
    let mut x = 0;
    let size = values.len();
    for i in 0..pq[0]-1 {
        x += values[i as usize];
    }

    let mut y = 0;
    for i in 0..pq[1] {
        y += values[i as usize];
    }

    let mut output = BufWriter::new(stdout().lock());
    writeln!(output, "sum between [{}] and [{}] = {} - {} = {}", pq[0], pq[1], y, x, y-x);
}

```

Imagine we're repeating this multiple times. You're given a test case number like `100` and you need to repeat the process one-hundred times. This is going to be slow since you'll need to repeat everything.

In this case, you can use the _prefix sum_ or _cumulative sum_. The algorithm is pretty straightforward.

First, you find every sum. The `[i]th` index holds the sum of values between `1` to `i`, the `[i-1]th` index would hold the sum of values between `1` to `i-1`, and so on.

Then, when two indexes (`i`, `j`) are given to find the sum, you simply subtract `[j]` and `[i-1]`

For example, I want to get the sum between `[2]` and `[4]` (1-based numbering) from the array `[5,4,3,2,1]`.

- `[2] = ▮▮▯▯▯ (5+4)`
- `[4] = ▮▮▮▮▯ (5+4+3+2)`
- `[4]-[1] = ▯▮▮▮▯ (4+3+2) = 9`

Here's the code.

```rust
use std::io::{stdin, stdout, Write, BufWriter};

fn r() -> Vec<i32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.split_whitespace().flat_map(str::parse).collect()
}

fn main() {
    let values: Vec<i32> = r();
    let size = values.len();
    let mut sum: Vec<i32> = vec![0; 1];

    for i in 0..size {
        let i = i as usize;
        sum.push(values[i] + sum[i]);
    }

    let pq: Vec<i32> = r();
    let p = (pq[0]-1) as usize;
    let q = (pq[1]) as usize;

    let mut output = BufWriter::new(stdout().lock());
    writeln!(output, "sum between [{p}] and [{q}] = {} - {} = {}", sum[q], sum[p], sum[q]-sum[p]);
}
```


## Try to solve
- https://www.acmicpc.net/problem/11659