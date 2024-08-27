---
title: "Getting inputs using IO Scanner for competitive programming"
category: 'Rust'
pubDate: 'Apr 03 2024 02:20'
---


You can't install additional crates in competitive programming, so you will need to include part of the crate's code directly to your code to use it. IO Scanner is convenient for reading various inputs in Rust.

//

You can implement the `Scanner` like the following:
```rust
use std::io::{BufWriter, stdin, stdout, Write};

#[derive(Default)]
struct Scanner {
	buffer: Vec<String>
}

impl Scanner {
	fn next<T: std::str::FromStr>(&mut self) -> T {
		loop {
			if let Some(token) = self.buffer.pop() {
				return token.parse().ok().expect("Failed parse");
			}
			let mut input = String::new();
			stdin().read_line(&mut input).expect("Failed read");
			self.buffer = input.split_whitespace().rev().map(String::from).collect();
		}
	}
}
```

Reading integers: `i32`, `u32`, `usize`, etc...
Reading strings: `String` and `&str`
```rust
fn main() {
    let mut scan = Scanner::default();
    let out = &mut BufWriter::new(stdout().lock());

    let i: i32 = scan.next();
    let u: u32 = scan.next();
    let us: usize = scan.next();
    
    println!("{i} {u} {us}");
    
    /* string */
    let str: String = scan.next();
    println!("str: {str}");

    /* &str */
    let str: &str = str.as_str();
    println!("str: {str}");
}
```

Any data type that implements [FromStr](https://doc.rust-lang.org/std/str/trait.FromStr.html#implementors) can be used. 

```rust
scan.next::<TYPE>();
```

Replace `TYPE` with any of the following:

- bool
- char
- f32
- f64
- i8
- i16
- i32
- i64
- i128
- isize
- u8
- u16
- u32
- u64
- u128
- usize


## References
- Rust IO Scanner. (n.d.). Gist. https://gist.github.com/tivrfoa/9d8fc68d36221dff8943032f93333023