---
title: "Including Other Files in Ruby"
category: 'Ruby'
pubDate: 'Jun 07 2024 13:44'
---

- to load every time the method is executed: `load`
- to load only once: we can use `require`

```ruby
load 'foo.rb'

def main
	puts "hello, world"

	foo
end
```

for `require`, you need specify the path.

```rb
require './foo.rb'

def main
	puts "hello, world"

	foo
end
```

you can also use `require_relative` to set the path relative to the file you're loading it from.

```rb
require_relative 'foo.rb'

def main
	puts "helol, world"
	
	foo
end
```

since `foo.rb` and `main.rb` is in the same location, we can use `require_relative` and omit the `./` path.