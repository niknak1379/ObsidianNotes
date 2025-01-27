---
creation date: 2025-01-16 14:22
---
#Questions #Leetcode 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Heaps/Priority Queues

<< ---------------------------------------------------------------- >>


### General Approaches
heap time complexity is n log(n), and the min or max of it is placed at the top of the tree. Dontreally need to know how the heapify function acdtually works i guess. 

### Time and Space Complexity
adding elements is log(k) (k being how many elements in the heap), seeing the top element is o(1), poping it is log(k) tho. heapifying an array is o(n)

### Python Syntax
``` python
heapq.heapify(heapname)
heapq.heappop(heapname)
heapq.heapush(heapname, num)
print(heapname[0])
```

### Example Questions

#### Kth Largest Element in a Stream - easy
**Summary**: 
you have a stream of numbers. right a class that everytime you add a new number to the stream returns the kth largest.

**Solution**: 
heapify the initial nums array. Then maintain a min heap with length k(the smallest in this is going to be the largest kth element). just add each time it goes over the length(k) pop one and just reaturn the 0 index.

#### Last Stone Weight - easy
**Summary**: 
you have an array stones with stones[i] being the weight of the ith stone. Each turn we smash the two heaviest stones together, the resulting weight of the stone will be x - y, both destroyed if theyre equal. return the weight of the last remaining stone. 

**Solution**: 
just pop the two largest from the heap(negative values to make it a max heap) and just add whatever remains until nothing is left. 

#### K Closest Points to Origin - medium
**Summary**: 
you have an array of points with x,y coordinates and an integer k. return the k closest points to the origin

**Solution**: 
u can just go through the array, calculate the distance and just add a new entry to the min heap, and just pop it until the kth one is out. 

#### Kth Largest Element in an Array - medium
**Summary**: 
u have an array, return the kth largest one. 

**Solution**: 
just heapify the array( make it negative to be a max heap) and just pop it k times.

#### Task Scheduler - medium
**Summary**: 
u have an array of cpu tasks. each cpu interval can be idol or complete one task. there has to be a gap of at least n intervals between two tasks with the same letter name. return the minimum number of cpu cycles to complete all tasks. 

**Solution**: 
make a counter that counts the frequency of all the letters, then go and put them into a max heap. You dont need to do it with the letters, the frequency is enough since once u use a task, u put it in the queue instead of back in the heap. Declare a queue that takes `[freq, available time]` and everytime u pop the heap, u put it in the queue if there is enough tasks and update what time the task becomes available again and then increment the time. 

#### Find Median From Data Stream - hard
**Summary**: 
you have a data stream, u need to return the median of the stream at O(1) time.

**Solution**: 
keep two heaps, one max and one min and divide the list of the numbers into the two. For median just return the top of whichever heap is longer, or both and take the median. When adding the numbers to the heap, if the differnce in length gets more than one, rebalance by popping from the longer one and then add it to the shorter one. 




