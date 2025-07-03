---
creation date: 2025-07-02 14:07
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Queue

<< ---------------------------------------------------------------- >>

basically you have a bunch of jobs that you need to run asyncly and some have different priorities than others. For example you have a video encoder and all the different videos being fed into it have different priorities.

1. build an ordered list of items where each is scored by priority and supports the following operations:
	1. enqueing an item with a given priority
	2. modifying the priority of a given item
	3. dequeuing the item of highest priority
	4. at least once deliver of all enqueued items
2. scalable and fault tolerant, even for billions of messages. 