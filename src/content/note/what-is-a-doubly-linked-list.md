---
title: "What is a Doubly Linked List?"
category: "ruby | linked list"
pubDate: "Nov 18 2024 07:15:00"
updatedDate: "Nov 19 2024 18:00"
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

```rb
def insert item 
    new_node = Node.new(item)

    if @head == nil 
        @head = new_node
        @tail = new_node
    else
        new_node.prev = @tail
        @tail.next = new_node
        @tail = @tail.next
    end

    @length += 1
end

def pop_back
    return nil unless @tail
    ret = nil

    if @head == @tail 
        ret = @head.data
        @head = nil
        @tail = nil
    else
        ret = @tail.data
        @tail = @tail.prev
        @tail.next = nil
    end

    @length -= 1
    ret
end

def pop_front
    return nil unless @head
    ret = nil

    if @head == @tail
        ret = @head.data
        @head = nil
        @tail = nil
    else
        ret = @head.data
        @head = @head.next
        @head.prev = nil
    end

    @length -= 1
    ret
end

def remove item
    return nil unless head

    return pop_front if @head.data == item 
    return pop_back if @tail.data == item 

    curr = @head

    while curr
        if curr.data == item 
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
            curr.prev = nil
            curr.next = nil
            @length -= 1
            break
        end
        curr = curr.next
    end
end

def cat list
    if @head == nil
        @head = list.head
        @tail = list.tail
    else
        list.head.prev = @tail
        @tail.next = list.head
        @tail = list.tail
    end

    @length += list.length
    list = nil
end
```

Since doubly linked list can traverse backward, we can utilize this to implement more useful methods:
- `find_last(&predicate)` - get the last element that satisfies a given predicate
- `reverse_each` - loops over the list backward yielding one element at a time
- `display(reverse=false)` - print the contents in reverse order if `reverse` is `true`

```rb
def find_last &predicate
    return nil unless block_given?

    curr = @tail
    while curr
        return curr if predicate.call(curr)
        curr = curr.prev
    end
end

def reverse_each
    return nil unless block_given?

    curr = @tail
    while curr
        yield curr
        curr = curr.prev
    end
end

def display rev=false
    return nil unless @length > 0

    if rev
        reverse_each {|item| puts item.data }
    else
        each {|item| puts item.data }
    end
end
```