---
title: "Different linked lists have different node structures"
category: 'Linked List'
pubDate: 'Jun 13 2024 10:12'
---

[[Singly Linked List]]

```cpp
class Node {
	int data;
	int *next{nullptr};

	Node(int value) : data(value) {}
};
```

[[Doubly Linked List]] and [[Circular Linked List]]

```cpp
class Node {
	int data;
	int *prev{nullptr};
	int *next{nullptr};

	Node(int value) : data(value) {}
};
```

[[XOR Linked List]] (memory efficient doubly linked list)
```cpp
class Node {
	int data;
	int *pxn{nullptr}; // XOR of previous and next node

	Node(int value) : data(value) {}
};
```