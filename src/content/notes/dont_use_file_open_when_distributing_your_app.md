---
title: "[Rust] Don't use File::open when distributing your app"
description: ''
pubDate: 'Apr 06 2024 16:05'
---


Depends on the system, `File::open` may cause an issue when you distribute your application due to a failure in locating the file. Use `include_bytes` instead to directly embed the audio binary data into the compiled executables.

//

`File::open` opens a file from the file system at runtime. The path to the file is relative to the program itself. If you distribute your app with `File::open`, the system running your app might fail to locate the file which could cause an issue.

Instead, you can use `include_bytes` to embed the binary data directly into the compiled binary which makes the audio file always available and accessible from all systems.

Here's an example of including a file with `inclue_bytes` macro.

```rust
const CHIME_SOUND: &[u8] = include_bytes!("../assets/chime.mp3");

fn play_audio() {
    let cursor = Cursor::new(CHIME_SOUND);
    let source = Decoder::new(BufReader::new(cursor)).unwrap();
    let (_stream, stream_handle) = OutputStream::try_default().unwrap();
    let sink = Sink::try_new(&stream_handle).unwrap();

    sink.append(source);
    sink.sleep_until_end();
}
```

## References
- include_bytes in std - Rust. (n.d.). https://doc.rust-lang.org/std/macro.include_bytes.html