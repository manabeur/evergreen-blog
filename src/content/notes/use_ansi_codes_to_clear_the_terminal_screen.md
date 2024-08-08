---
title: "Use ANSI codes to clear the terminal screen"
description: ''
pubDate: 'Mar 21 2024'
---

There's no rust specific code to clear the terminal screen; however, we can use ANSI code or ANSI escape sequences. The most of the recent terminal emulators should support ANSI codes, which means we can use it in Windows, Linux, and macOS.

There are list of some [common ANSI codes](/notes/common_ansi_codes) people frequently use, but here, we'll just focus on clearing the screen.

To clear the terminal in rust, print the following escape sequences:

```rust
print!("\x1B[2J");
println!("Hello, World");
```

This will clear the screen and position `Hello, World` on the bottom-left. 
<!-- ![](Use%20ANSI%20codes%20to%20clear%20the%20terminal%20screen/rust-clear-screen-bottom.webp){"width":249} -->

If you want to position the content right at the top after clearing the terminal, add `\x1b[1;1H`.

```rust
print!("\x1B[2J\x1b[1;1H");
println!("Hello, World");
```

<!-- ![](Use%20ANSI%20codes%20to%20clear%20the%20terminal%20screen/rust-clear-screen-top.webp){"width":233} -->