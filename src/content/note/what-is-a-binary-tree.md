---
title: "What is a Binary Tree?"
category: "g"
pubDate: "Dec 27 2024 07:30:00"
---

Tree is a data structure specialized for storing hierarchical data such as a DOM tree.

We normally classify a tree by their branching factor. And for binary trees, the branching factor is two. This means for every new level, the total number of elements a binary tree can hold increases by <i>2<sup> h-1</sup></i>.

```text
	          13      ------- level 1 (1)
	         /  \
	        /    \
	       /      \
	      8        17   ----- level 2 (2)
	     / \      /  \
	    1   11   15   25  --- level 3 (4)
	   /\   /\   /\   /\
	  x  x x  x x  x x  x  -- level 4 (8)
```

Each element in a tree is called a _node_, just like the one in  [Linked Lists](/note/what-is-a-linked-list). The only difference is the structure of a node ([The type of a linked list is determined by the structure of a node](/note/the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node)). 

In a tree, each node contains these four attributes:
- `parent` - parent of the current node
- `data`
- `left` - left child of the current node
- `right` - right child of the current node

Every node has a parent and up to two nodes except for the _root_ (no parent).

Unlike linear data structures ([Arrays](/note/what-is-an-array), [Linked Lists](/note/what-is-a-linked-list), [Stacks](/note/what-is-a-stack), [Queues](/note/what-is-a-queue), etc) which have only one logical way to traverse them, trees can be traversed in many different ways. Largely, there are two different ways to traverse a tree:
- [[Depth-First Search]] (DFS)
- [[Breadth-First Search]] (BFS)

