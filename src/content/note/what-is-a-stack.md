---
title: "What is a Stack?"
category: 'ruby | ds | stack'
pubDate: 'Dec 05 2024 05:00:00'
---

Stack is a data structure that allows you to handle collection of elements in LIFO (Last-In, First-Out) fashion. Just like the [queue](/note/what-is-a-queue), you cannot insert or remove elements at a random position.

Here's what a stack looks like when we insert (push) an element.

```text
push 1     push 2     push 3    
                      -----
                      | 3 | <-- top
           -----      -----
           | 2 |      | 2 |
-----      -----      -----
| 1 |      | 1 |      | 1 |
-----      -----      -----
```

Unlike [queues](/note/what-is-a-queue) where first inserted item gets remove first, in stack, the order of retrieval is quite the opposite. First inserted item gets removed last, or in other words, the recent item that got pushed gets popped out first.

```text
 pop        pop        pop
-----      -----      -----      [nil]
| 3 |      | 2 |      | 1 |
-----      -----      -----      
| 2 |      | 1 |
-----      -----
| 1 |
-----
```

The interface for the stacks are quite simple:
- `initialize`
- `push data` - inserts a data to the top of the stack
- `pop` - remove the item at the top
- `peek` - returns the item at the top of the stack without removing it
- `clear` - empty the stack
- `each` - loops over the stack yielding one element at a time
- `print`

You can either use an array of linked list to implement a stack. The following implementation uses a linked list.

```rb
class Stack 
    attr_accessor :top, :size

    def initialize 
        @top = nil
        @size = 0
    end

    def push data
        node = Node.new data 
        
        if @size == 0
            @top = node
        else
            node.next = @top
            @top = node
        end

        @size += 1
    end

    def pop
        return nil unless @size > 0

        if @size == 1
            @top = nil
        else
            @top = @top.next
        end

        @size -= 1
    end

    def peek
        return nil unless @size > 0
        @top.data
    end

    def clear
        until @size == 0 
            self.pop
        end
    end

    def each
        return nil unless block_given?

        curr = @top
        while curr
            yield curr
            curr = curr.next
        end
    end

    def print
        return nil unless @size > 0

        each { |node| puts node.data }
    end

    private
    class Node
        attr_accessor :next, :data

        def initialize data
            @data = data
            @next = nil
        end
    end
end
```