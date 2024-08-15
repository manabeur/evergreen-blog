---
title: "Don't use println in competitive programming"
description: ''
pubDate: 'Apr 02 2024 20:29'
---


`println!` flushes the buffer every time you use it by default. This can lead to significant loss in performance and hurt you especially in competitive programming. Use `writeln!()` instead and stay away from `println!()`. 

//

Let's say there's a problem where you need to print from `1` to `n` where `n <= 100,000`, and the time limit is `1 second`.

Here's a code written in Rust.
```rust
use std::io::{self};

fn main() {
	let mut n = String::new();
	io::stdin().read_line(&mut n).unwrap();
	let n: i32 = n.trim().parse().unwrap();
	
	for i in 0..n {
		println!("{}", i+1);
	}
}
```

Surprisingly, you'll encounter `TLE` (Time Limit Exceeded) error. This is because `println!()` flushes the buffer to display a value to the terminal which happens to be very slow.

The better way is to hold up on the values in the buffer, and output everything at once at the end. The following is the accepted code to the problem I mentioned above.
```rust
use std::io::{self, BufRead, Write, BufWriter};

fn main() {
	let stdin = io::stdin();
	let input = stdin.lock();
	let mut lines = input.lines();
	let n: i32 = lines.next().unwrap().unwrap().trim().parse().unwrap();

	let stdout = io::stdout();
	let mut output = BufWriter::new(stdout.lock());

	for i in 0..n {
		writeln!(output, "{}", i+1).unwrap();
	}
}
```

So at least for competitive programming, don't use `println!()`. Keep a habit of utilizing the buffer.