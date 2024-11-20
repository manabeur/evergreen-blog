---
title: "What is a Doubly Linked List?"
category: "ruby | linked list"
pubDate: "Nov 18 2024 07:15:00"
---

The main difference between doubly and a [singly linked list](/note/what-is-a-singly-linked-list) is that in doubly linked list, a node not only has a pointer for the next node, but also the one that precedes it. This makes the list traversable in either direction.

```text
           head                              tail
nil <-- [node|value] <-> [node|value] <-> [node|value] --> nil
```

Since the basic structure are the same between single and doubly linked list, they share majority of the methods such as `insert`, `remove`, `cat`, etc...

Although they share same methods, the implementation will change slightly since doubly linked list can link to the preceding node as well. Here are couple methods where implementation will change:
- `insert(item)`
- `pop_back`
- `pop_front`
- `remove(item)`
- `cat(list)` - catenate two lists together

Since doubly linked list can traverse backward, we can utilize this to implement more useful methods:
- `find_last(&predicate)` - get the last element that satisfies a given predicate
- `reverse_each` - loops over the list backward yielding one element at a time
- `reverse_print` - print the contents in reverse order