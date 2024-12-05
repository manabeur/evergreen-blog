---
title: "What is a Queue?"
category: 'ruby | ds | queue'
pubDate: 'Dec 04 2024 12:40:00'
updatedDate: 'Dec 05 2024 05:25:00'
---

Queue is a data structure that allows you to handle collection of elements in FIFO (First-In, First-Out) fashion. The opposite would be FILO (First-In, Last-Out; or LIFO) which is used in another data structure called [Stacks](/note/what-is-a-stack).

Let's say you have two elements in the queue like the following. When you add the third item, it will be placed at the end of the queue.

```text
 head         tail
[item A] -> [item B] -> nil


# insert 'item C'
head                     tail
[item A] -> [item B] -> [item C] -> nil
```

When you remove an item from the queue, the item at the head will be popped out of the queue.
The order of retrieval is guaranteed to be FIFO and you cannot insert/remove an item in random location.

```text
 head                     tail
[item A] -> [item B] -> [item C] -> nil

# dequeue (remove item)
 head          tail
[item B] -> [item C] -> nil

# dequeue
 head == tail
[item C] -> nil

# dequeue
 empty list
 []
```

The interface for the queues are quite simple:
- `initialize`
- `enqueue item` - inserts an item at the end of the queue
- `dequeue` - remove the oldest item in the queue
- `peek` - returns the item at the head without removing it
- `clear` - empty the queue
- `each` - loops over the queue yielding one element at a time
- `print`

The following implementation uses a linked list.

```rb
class Queue 
    attr_accessor :head, :tail, :length 

    def initialize 
        @head = nil
        @tail = nil 
        @length = 0
    end

    def enqueue data
        node = Node.new data 

        if @head 
            @tail.next = node
            @tail = node
        else
            @head = node
            @tail = node
        end

        @length += 1
    end

    def dequeue
        return nil unless @length > 0

        if @length == 1
            @head = @tail = nil
        else
            @head = @head.next
        end

        @length -= 1
    end

    def peek
        return nil unless @head
        @head.data
    end

    def clear
        until @length == 0 
            self.dequeue
        end
    end

    def each
        return nil unless block_given?

        curr = @head
        while curr
            yield curr
            curr = curr.next
        end
    end

    def print
        return nil unless @length > 0

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