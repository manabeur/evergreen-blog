---
title: "Depth-First Search"
category: "eg"
pubDate: "Jan 06 2024 12:50:00"
---

Depth-First Search (DFS) is a method used for traversing trees and graphs. In DFS, you explore as deeply as possible along each branch before backtracking to visit other nodes.

Graphs can have cycles and disconnected components, whereas trees are always connected and acyclic. This makes DFS in trees simpler to implement compared to graphs.

```textile

Given a tree:

        13
       /  \
      /    \
     8     17 
    /     /  \
   1     15   20
   
Preorder : 13 8 1 17 15 20
Inorder  : 1 8 13 15 17 20
Postorder: 1 8 15 20 17 13
```

The visiting order of a node is pretty straightforward for a tree:

```rb
def preorder(node)
    print node.data
    preorder(node.left)
    preorder(node.right)
end

def inorder(node)
    inorder(node.left)
    print node.data
    inorder(node.right)
end

def postorder(node)
    postorder(node.left)
    postorder(node.right)
    print node.data
end
```

---

Unlike a tree where DFS order is fixed due to its hierarchical structure and single root (fixed starting point), graphs allow multiple ways to traverse them. Any node can be a starting point for DFS, and even the same starting node can produce different results depending on the DFS implementation (recursive vs. iterative) and the order of neighbors.

```textile
    0
   / \
  1---2
     / \
    3   4
    
DFS starting from 0 -> 0 2 4 3 1 (iterative)
DFS starting from 0 -> 0 1 2 3 4 (recursion)
```

Normally, when you implement DFS recursively, it processes neighbors in ascending order (if the adjacency list is sorted). In contrast, iterative DFS may produce different orders due to the [stack](/note/what-is-a-stack)'s LIFO behavior. You can mimic recursive DFS in iterative implementations by reversing the neighbor order before pushing them onto the stack.

Here's a iterative version of DFS.
```rb
def dfs(g, node)
    stk = [node]
    visited = [false] * g.size

    while !stk.empty?
        top = stk.pop
        next if visited[top]

        print "#{top} "
        visited[top] = true

        g[top].each do |adj|
            stk << adj unless visited[adj]
        end
        
        ## you can reverse the stack to produce same result as recursion
        # g[top].reverse_each do |adj|
        #     stk << adj unless visited[adj]
        # end
    end
    puts
end

g = Array.new(5) { [] }
input = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]

input.each_with_index do |data, i|
    data.each do |d|
        g[i] << d
        g[d] << i
    end
end

dfs(g, 0)

```

And here's a recursive version of DFS.
```rb
def dfs_rec(g, v, node)
    return if v[node]

    v[node] = true
    print "#{node} "
    for adj in g[node]
        dfs_rec(g, v, adj) unless v[adj]
    end
end

g = Array.new(5) { [] }
input = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]

input.each_with_index do |data, i|
    data.each do |d|
        g[i] << d
        g[d] << i
    end
end

v = [false] * 5
dfs_rec(g, v, 0)
```