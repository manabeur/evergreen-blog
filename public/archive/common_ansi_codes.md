---
title: "Common ANSI codes"
category: ''
pubDate: 'May 15 2024 18:28'
---

Here are some common ANSI codes and their functions:

1. Cursor positioning
   - `\x1b[<line>;<column>H` or `\x1b[<line>;<column>f`
2. Clearing the screen
   - `\x1b[2J` - clears the screen
   - `\x1b[H\x1b[J` - moves the cursor to the top-left corner and clears the entire screen
3. Text formatting
   - `\x1b[<code>m` - sets the text formatting attribute
   - code `0` - reset all attributes to default
   - code `1` - bold
   - code `3` - italic
   - code `4` - underline
   - code `30-37` - set foreground color (`0 = black`, `1 = red`, ...)

e.g.)
`Hello, World` is printed but the screen is cleared.
`Bye, ` is underlined, `World` is bold.

```c
#include <stdio.h>

int main(void) {
	printf("Hello, World!");
	printf("\x1b[2J");
	printf("\x1b[4mBye, \x1b[0m\x1b[1mWorld!");

	return 0;
}
```