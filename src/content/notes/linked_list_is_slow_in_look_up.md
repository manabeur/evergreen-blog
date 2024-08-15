---
title: "Linked list is slow in look up"
description: ''
pubDate: 'Jun 2 2024 12:39'
---

In order to find a specific data in a linked list, one must start from the _head_ node and traverse through to find the target node. This takes linear time complexity which is very slow. 

```cpp
int LinkedList::does_exist(int value) {
	int *curr = head;
	
	while (curr) {
		if (curr->data == value) {
			return true;
		}
		curr = curr->next;
	}

	return false;
}
```

But [Linked List is better if lots of insertions and deletions are required](/notes/linked_list_is_better_if_lots_of_insertions_and_deletions_are_required) because there's no need to shift whole bunch of data to fit in a data in between other elements. Also we don't have to create a new array and copy over everything from the old array to expand or shrink the array.