---
title: "What is a Linked List?"
category: 'ruby | linked list'
pubDate: 'Oct 26 2024 9:10:00'
---

Linked list is a singular data structure consist of nodes. A node refers to the element in a list just like a data in an array. The difference comes from how these elements are stored in the memory. Unlike an array where all elements are contiguously aligned in the memory (e.g. a block of memory), nodes are all over the place.

To locate nodes that aren’t adjacent to each other, we need to know each node’s address to access them. So each node not only contains the data, but also the address of the next node.

```rb
class Node
	def initialize(data, nextNode)
		@data = data
		@next = nextNode # address (e.g. pointer)
	end
end
```

There are different types of linked lists:
- [Singly Linked List](/note/what-is-a-singly-linked-list)
- [Doubly Linked List](/note/what-is-a-doubly-linked-list)
- Circular Linked List
- XOR Linked List

These are essentially the same linked list but with just different node structure. [The type of a linked list is determined by the structure of a node](/note/the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node/).