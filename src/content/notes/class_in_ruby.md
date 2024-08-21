---
title: "Class in Ruby"
category: 'Ruby'
pubDate: 'Jun 6 2024 08:30'
---

```rb
class Vector
	attr_reader :size, :capacity

	# constructor
	def initialize() 
		@size = 0
		@capacity = 16
		@growth_factor = 2
		@shrink_factor = 4
	end
end
```

1. `attr_reader` - generates automatic **getter** method for the given item
2. `attr_writer` - generates automatic **setter** method for the given item
3. `attr_accessor` - generates automatic **getter** & **setter** method for the given item

---

- all methods are `public` by default
- you can use `protected` or `private`

```rb
class Vector
	def foo()
	end

	def foo_protected()
	end

	def foo_private()
	end

	protected :foo_protected
	private :foo_private
end
```

or you can put `private` in a separate line and anything below will become private.

```rb
class Vector
	def foo()
	end

	private

	def foo_private()
	end

	def this_is_also_private()
	end

	protected
	
	def foo_protected()
end
```

The ruby doc recommends using `private` instead of `protected` whenever possible.
A `protected` method is slow because it can't use inline cache.

