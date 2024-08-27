---
title: "Rust | Formatting - fill and alignment"
category: 'Rust'
pubDate: 'Apr 11 2024 10:14'
---

left-aligned in 20 columns, including the text.
```rust
println!("{:<20}", "Hello");

// Hello_______________
```

right-aligned
```rust
println!("{:>20}", "Hello");
// _______________Hello
```

center-aligned
```rust
println!("{:^20}", "Hello");
// _______Hello________
```

Fill spaces with a designated character (e.g. `-`, `~`)
``` rust
println!("{:-<20}", "Hello");
println!("{:~<20}", "Hello");
// Hello---------------
// Hello~~~~~~~~~~~~~~~
```


## References
- std::fmt - Rust. (n.d.). https://doc.rust-lang.org/std/fmt/#fillalignment