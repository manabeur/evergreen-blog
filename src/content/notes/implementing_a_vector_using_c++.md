---
title: "Implementing a Vector using C++"
description: ''
pubDate: 'Jun 10 2024'
---

```cpp
#include <iostream>

namespace img {
    static const int minimum_capacity = 16;
    static const int growth_factor = 2;
    static const int shrink_factor = 4;

    class IVector {
        public:
            IVector();
            ~IVector() = default;

            int get_size();
            int get_capacity();
            int get_item_at(int index);
            bool is_empty();
            
            void insert(int index, int item);
            void push_back(int item);
            void push_front(int item);
            
            void remove_all(int item);
            void remove_at(int index);
            int pop_back();
            int pop_front();

            int find(int item);

        private:
            // the total number of elements in the container
            int size{0};
            // the actual number of elements that can be stored in the container
            int capacity{minimum_capacity};
            // a dynamic array representing the vector
            std::unique_ptr<int[]> vec{new int[capacity]};

            void resize(int new_capacity);
    };
}
```

```cpp
#include "ivector.hh"

namespace img {
    IVector::IVector() {
        if (capacity != minimum_capacity) {
            capacity = minimum_capacity;
            vec = std::make_unique<int[]>(capacity);
        }
    }
    
    int IVector::get_size() { return size; }
    int IVector::get_capacity() { return capacity; }
    bool IVector::is_empty() { return size == 0; }
    
    int IVector::get_item_at(int index) {
        if (index < 0 || index >= size) {
            throw std::out_of_range("Index out of range");
        }
        return vec[index];
    }

    void IVector::push_back(int item) {
        if (size == capacity) {
            resize(capacity * growth_factor);
        }
        vec[size++] = item;
    }

    void IVector::push_front(int item) {
        if (size == capacity) {
            resize(capacity * growth_factor);
        }

        for(int i=size; i>0; --i) {
            vec[i] = vec[i-1];
        }
        vec[0] = item;
        ++size;
    }

    void IVector::insert(int index, int item) {
        if(index == size) {
            push_back(item);
        }
        else if(index == 0) {
            push_front(item);
        }
        else {
            for(int i=size; i>index; --i) {
                vec[i] = vec[i-1];
            }
            vec[index] = item;
            ++size;
        }
    }


    void IVector::remove_all(int item) {
        for(int i=0; i<size; ++i) {
            if(vec[i] == item) {
                remove_at(i);
            }
        }
    }

    void IVector::remove_at(int index) {
        if (index < 0 || index >= size) {
            throw std::out_of_range("Index out of range");
        }

        if (size == capacity / shrink_factor) {
            resize(capacity >> 1);
        }

        for(int i=index; i<size-1; ++i) {
            vec[i] = vec[i+1];
        }
        --size;
    }

    int IVector::pop_back() {
        if (size == 0) {
            throw std::out_of_range("Vector is empty");
        }
        
        int ret = vec[--size];
        if(size == capacity / shrink_factor) {
            resize(capacity >> 1);
        }

        return ret;
    }

    int IVector::pop_front() {
        if (size == 0) {
            throw std::out_of_range("Vector is empty");
        }

        if(size == capacity / shrink_factor) {
            resize(capacity >> 1);
        }

        int ret = vec[0];
        for(int i=0; i<size-1; ++i) {
            vec[i] = vec[i+1];
        }
        --size;
        return ret;
    }

    int IVector::find(int item){
        for(int i=0; i<size; ++i) {
            if (vec[i] == item) {
                return i;
            }
        }

        return -1;
    }

    void IVector::resize(int new_capacity) {
        std::unique_ptr<int[]> new_vec(new int[new_capacity]);
        for(int i=0; i<size; ++i) {
            new_vec[i] = vec[i];
        }
        vec = std::move(new_vec);
        capacity = new_capacity;
    }
}
```