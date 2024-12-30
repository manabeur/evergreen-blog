---
title: "The type of a linked list is determined by the structure of a node"
category: 'ed1'
pubDate: 'Oct 26 2024 9:35:00'
---

The only difference between different types of linked lists are really just the structure of a node with exception to a circular linked list.

Singly Linked list is a linked list where each node can only traverse through one way. So the node will only worry about locating the _next_ node.
```rb
class SinglyLinkedList
	class Node
		def initialize(data, next=nil)
			@data = data
		end
	end
end
```

Doubly linked list is same as the singly except that it can traverse in both ways.
```rb
class DoublyLinkedList
	class Node
		def initialize(data, prev=nil, next=nil)
			@data = data
		end
	end
end
```

Circular linked list is a linked list that has no end unless the list itself is empty. Meaning, you can traverse the list infinitely if you want to, as long as there’s one or more nodes.
Circular linked list can be either singly or doubly linked list. So the node structure will be same based on which linked list you use as a base.

To create a circular linked list, you simply need to make the last node in the list to point back to the first node. So if a list only has a single node, it will point back to itself creating a loop..
```rb
class CircularLinkedList
	attr_accessor :head

	class Node
		def initialize(data, next=nil)
			@data = data
		end
	end

	def push_back(data)
		# if list is empty
		if @head.nil?
			# create a new node
			@head = Node.new(data)
			# last node (head) points to the first node (head)
			@head.next = @head
		else
			# ... more code
		end
	end
end
```