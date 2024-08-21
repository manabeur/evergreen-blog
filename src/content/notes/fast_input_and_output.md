---
title: "Fast Input and Output"
category: 'Rust'
pubDate: 'Mar 19 2024 05:38'
---

When solving a P.S. problem, the following simple code can produce TLE (time limit exceeded) error. This is due to rust I/O flushing the buffer every time a value is printed using `println` macro.

```rust
use std::io::{self};

fn main() {
	let mut n = String::new();
	io::stdin().read_line(&mut n).unwrap();
	let n: i32 = n.trim().parse().unwrap();
	
	for i in 0..n {
		println!("{}", i);
	}
}
```

Instead of printing a value every time, we need to save it in the buffer and output the whole data at the end. We can achieve this by using `BufWrite`.

```rust
use std::io::{self, Write, BufWriter};

fn main() {
	let mut n = String::new();
	io::stdin().read_line(&mut n).unwrap();
	let n: i32 = n.trim().parse().unwrap();

	let stdout = io::stdout(); // 1
	let mut output = BufWriter::new(stdout.lock()); // 2

	for i in 0..n {
		writeln!(output, "{}", i).unwrap(); // 3
	}
}
```

In step 1 and 2, we declared a `BufWriter` type variable name `output`. Any printed data will be stored in this buffer.

In step 3, we used `writeln` macro instead of `println`.

This will reduce the number of system calls and increase the performance of your code.
