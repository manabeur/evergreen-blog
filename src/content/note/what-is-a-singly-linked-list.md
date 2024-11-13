---
title: "What is a Singly Linked List?"
category: "linked list"
pubDate: "Nov 13 2024 12:32:00"
---

Singly linked list is a [linked list](/note/what-is-a-linked-list) data structure that enables you to manage variable-sized collections of elements. Unlike C-style arrays, linked list can grow or shrink dynamically which is good for cases where number of elements are unknown beforehand.

Elements in the linked list are called nodes. A node contains two information: _the value_ and _a pointer_ to the next node. The node structure can change based on the type of a linked list ([The type of a linked list is determined by the structure of a node](/note/the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node)).

Singly linked list can be a good fit if sequences are important; also good to use if you can sacrifice lookup performance for the optimal writes (inserts).

Here are some common and not so common but useful methods used to implement a singly linked list:
- `insert(item)`
- `remove(item)`
- `cat(list)` - catenate two lists together
- `clear` - empty the list
- `find_first(&predicate)` - get the first element that satisfies a given predicate
- `each` - yield items one at a time until the list is exhausted
- `print`

Some methods may look weird especially `find_first(&predicate)`. This is Ruby-specific, because ruby allows you to [pass a block as an argument](/note/passing-a-block-as-an-argument) in the method.