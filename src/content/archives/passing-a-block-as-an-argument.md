---
title: "Passing a block as an argument"
category: "g"
pubDate: "Nov 13 2024 12:50:00"
---

Ruby allows you to pass a block as an argument in a method.

The method below takes `predicate` as an argument and returns an object (node) that satisfies the given predicate.
```rb
def find_first &predicate
	return nil unless block_given?

	current = self.head
	while current
		return current if predicate.call(current)
		current = current.next
	end
end
```

Here's an example of how you can use it.
```rb
def test_find_first
    list = SinglyLinkedList.new

	list.insert(1)
	list.insert(3)
	list.insert(5)
	list.insert(6)
	list.insert(8)
	list.insert(9)

	e = list.find_first { |item| item.data % 2 == 0 }
	assert(e.data == 6, "first even number")
	
	e = list.find_first { |item| item.data == 9 }
	assert(e == list.tail, "find the tail node")

	e = list.find_first { |item| item == list.head }
	assert(e.data == list.head.data, "find the head noxde")

	e = list.find_first {|item| item == 99 }
	assert(e == nil, "no data found")
end
```