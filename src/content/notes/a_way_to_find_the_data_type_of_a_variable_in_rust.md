---
title: 'A way to find the data type of a variable in rust'
description: ''
pubDate: 'Apr 02 2024'
---


Rust doesn't have any existing method that lets you get the data type of a variable. So you have to make one for yourself.
```rust
fn print_type_of<T>(_: &T) { 
  println!("{}", std::any::type_name::<T>())
}
```

Here's an example of how you can use it.
```rust
fn main() {
    let x = 1;
    print_type_of(&x); // i32

    let s = String::from("hello");
    print_type_of(&s); // alloc::string::String
    
    let s = "hello";
    print_type_of(&s); // &str
}
```

Not sure where I can utilize this to be honest. 

I got curious about getting the data type because of this problem given in JavaScript ([Group by data types](/notes/group_by_data_types)) where you need to create a function that regroups the elements in a given array by their data type. This problem makes sense in JavaScript because JS array can contain different data types. 