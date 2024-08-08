---
title: "Linked List is better if lots of insertions and deletions are required"
description: ''
pubDate: 'Jun 2 2024'
---

[Linked list](/notes/linked_lists) is a linear data structure where nodes are connected via pointers. A node is an element used in a linked list ([Different linked lists have different node structures](/notes/different_linked_lists_have_different_node_structures)).

By the nature of pointers, it is more efficient to insert and delete data in a linked list because the only operation required is changing the value of the node's pointer (so that it points to the other node or `nil` if deleting). This operation is O(1).

Because of this reason, when your project requires lots of insertion and/or deletions of data, linked list is one way to go for it. You can also consider using a hash map if look up is important. [Linked list is slow in look up](/notes/linked_list_is_slow_in_look_up) because it requires a linear time complexity.