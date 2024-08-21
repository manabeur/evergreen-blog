---
title: "playing audio file in rust"
category: 'Rust'
pubDate: 'Mar 20 2024 17:00'
---

You can use `rodio` crate, an audio playback library, to stream an audio.

```rust
extern crate rodio;

use std::fs::File;
use std::io::BufReader;
use rodio::{Decoder, OutputStream, Sink};

fn main() {
    // Load the audio file
    let file = File::open("path/to/audio.wav").unwrap();
    let source = Decoder::new(BufReader::new(file)).unwrap();

    // Create a sink to play the audio
    let (stream, stream_handle) = OutputStream::try_default().unwrap();
    let sink = Sink::try_new(&stream_handle).unwrap();

    // Play the audio
    sink.append(source);

    // Keep the program running until the audio finishes playing
    sink.sleep_until_end();
}
```

Here's what the code does:

1. The `rodio` crate is imported, which provides functionality for playing audio.
2. The `File::open` function is used to open the audio file. In this example, replace `"path/to/audio.wav"` with the actual path to your audio file.
3. A `Decoder` is created from the audio file using `Decoder::new`.
4. An `OutputStream` is created, which represents the audio output device.
5. A `Sink` is created from the `OutputStream`, which acts as an audio player.
6. The decoded audio data (`source`) is appended to the `Sink` using `sink.append(source)`.
7. `sink.sleep_until_end()` is called, which blocks the program until the audio finishes playing.

Make sure to add the `rodio` dependency to your `Cargo.toml` file
```toml
rodio="0.13"
```

If you're distributing your rust application with an audio file, [don't use File::open when distributing your app](/notes/dont_use_fileopen_when_distributing_your_app). Use `include_bytes` to embed the audio binary data directly into the compiled binary which makes the audio file accessible regardless of the platform.

## References
- rodio - Rust. (n.d.). https://docs.rs/rodio/latest/rodio/