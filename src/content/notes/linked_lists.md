---
title: "Linked List"
category: ''
pubDate: 'Jun 13 2024 09:51'
---

Linked List is a linear [Data Structure](/notes/data_structure) that is more dynamic than the [Arrays](/notes/arrays). Unlike the array, data in linked lists are not contiguous. They are scattered apart in the memory. So each **node**, an element in the list, not only contains a data but also the memory address of the next node, which enable us to navigate between nodes in the list.

```text

  data
---------      ---------      ---------      ---------
|   1   |      |   2   |      |   3   |      |   4   |
---------  →   ---------  →   ---------  →   ---------  →  NULL
| 0x123 |      | 0x456 |      | 0x789 |      | 0x012 |
---------      ---------      ---------      ---------
  addr

```

Depends on the implementation of a node, we specify the linked list as a _singly_, _doubly_, _circular_, or _XOR_ ([Different linked lists have different node structures](/notes/different_linked_lists_have_different_node_structures)).

