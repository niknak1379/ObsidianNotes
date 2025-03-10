---
creation date: 2024-09-19 14:37
---
#Questions #Leetcode 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Linked List

<< ---------------------------------------------------------------- >>

#### Reverse Linked List - easy
**Summary**: 
reverse a linked list given the head.

**Solution**: 
tmp = head.next head.next = prev prev = head head = tmp return prev

#### Merge Two Sorted Lists - easy
**Summary**:
merge two sorted lists into a sorted list
**Solution**: 
you just go through them if the values are higher attach that node and change the curr to list.next

#### Reorder List - medium
**Summary**:
You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln
_Reorder the list to be on the following form:_
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

**Solution**: 
find the midway of the first list. then reverse it. then merge them. 

#### Remove Nth Node from the Back - medium
**Summary**:
title

**Solution**: 
have 2 pointers, slow and fast, make the fast one N in the front, whenever it reaches the end, take out the slow one.

#### Copy List with Random Pointer - medium
**Summary**:
have a linked list with a value, next, and a random pointer, which points to a random node. make a deep copy.

**Solution**: 
iterate first and make a hashmap with key nodes and value copy nodes. iterate agian and connect everything.

#### Adding Two Numbers - medium
**Summary**:
two linked lists with digits stored in the reverse order.

**Solution**: 
this is pretty easy actually just have to make sure about the carry

# Linked List Cycles
#### Linked List Cycle - easy
**Summary**:
you have the head return true if a cycle exists

**Solution**: 
just iterate with a hashmap, if it exists return true

#### Find the Duplicate Number - medium
**Summary**:
you have an array of n + 1 ints, ranging from [1 n]. find the duplicate with constant space(you cant make a hash)

**Solution**: 
Treat it as a linked list the algorithm has a weird name, but basically you go through it once with the fast and slow pointers at the root, when fast and slow are equal. that position is the same distance as the root to the start of the cycle in the list(duplicate)

#### LRU Cache - medium
**Summary**:
Design an LRU Cache, least recently used, get also counts as a usage. 

**Solution**: 
just make sure to keep track of the head and tail