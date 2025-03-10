---
creation date: 2024-09-18 14:52
---
#Leetcode #Questions

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Binary Search

<< ---------------------------------------------------------------- >>

## Binary Search
just puts things in a stack and pop them

Time complexity O(logn)
Space complexity O(1)
### Example Questions

#### Binary Search - easy
**Summary**: 
list sorted in ascending order, return a search

**Solution**: 
have low = 0 high = len - 1 and mid = low + high //2 and just make decisions based on what the mid is. 

#### Binary Search 2D Array - medium
**Summary**: 
list sorted in ascending order, return a search

**Solution**: 
have low = 0 high = len - 1 and mid = low + high //2 and just make decisions based on what the mid is. 

#### Koko Earting Bananas - medium
**Summary**: 
we have n piles of bananas with each pile having pile[i] bananas. the guards will be back by h hours. if k is the number of bananas she eats from each pile per hour(if the pile has less she only eats them) whats the min of k.

**Solution**: 
basically do a binary search on the output. The low is 1(the lowest speed) and high is the max of the pile(cant eat more than that). then for each mid, you go through all the piles, calculate the hours, get the ceil and if its less than the h you update the minimum.

#### Find Minimum in Rotates Sorted Array - medium
**Summary**: 
list sorted in ascending order rotated(pushed), find min

**Solution**: 
have low = 0 high = len - 1 and mid = low + high //2 if mid is bigger than the high, the right is the rotated portion and min is at the first of the rotated portion, if not go left. 

#### Search in Rotates Sorted Array - medium
**Summary**: 
list sorted in ascending order rotated(pushed), search for a target

**Solution**: 
have low = 0 high = len - 1 and mid = low + high //2 if mid, make sure which side of the array is sorted, depends on each side being sorted, see if the target is in between mid and low or mid and high and change low and high on that.

#### Time Based Key Value Storing - medium
**Summary**: 
make a DS with that

**Solution**: 
jsut have a hashmap with key, array of time stamps. and just do BS on the array.



