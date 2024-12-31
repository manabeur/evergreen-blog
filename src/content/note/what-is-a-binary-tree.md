---
title: "What is a Binary Tree?"
category: "ef"
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

```rb
class BinaryTree
    attr_accessor :root, :size

    class Node
        attr_accessor :parent, :left, :right, :data

        def initialize parent, data
            self.parent = parent
            self.data = data
        end

        def to_s
            puts "root: #{self.data}"
            puts "left: #{self.left&.data}"
            puts "right: #{self.right&.data}"
        end
    end

    def initialize data
        self.root = Node.new nil, data
        self.size = 1
    end

    def insert_left node, data
        return unless node
        raise "can't override nodes." if node.left

        self.size += 1
        node.left = Node.new node, data
    end

    def insert_right node, data
        return unless node
        raise "can't override nodes." if node.right

        self.size += 1
        node.right = Node.new node, data
    end

    def remove_left node
        if node&.left
            remove_left node.left
            remove_right node.left
            node.left = nil
            self.size -= 1
        end
    end
    
    def remove_right node    
        if node&.right    
            remove_left node.right
            remove_right node.right
            node.right = nil
            self.size -= 1
        end
    end
end
```