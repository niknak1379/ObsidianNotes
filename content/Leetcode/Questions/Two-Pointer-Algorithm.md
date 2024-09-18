---
creation date: 2024-09-18 12:48
---
#Leetcode #Questions

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Two Pointer Algorithm

<< ---------------------------------------------------------------- >>

## Two Pointer Algorithm
you just have two pointers, one from the front and one from the back that go through the list until they meat each other, at that point they have to return something.

Time complexity O(n)
Space complexity O(n)
### Example Questions

#### Valid Palindrome - easy
**Summary**: 
have a large string that youre supposed to see if it is a palandrome or not.

**Solution**: 
Have one pointer at the back and one in the front and just have a while loop until they meet

#### Two Sum Input Array is Sorted - medium
**Summary**: 
just go through a sorted array to see if they add up to a target Int

**Solution**: 
have a set with the sum - index[j] and if index[i] matches return i and j, since its sorted u go left if sum is lower, right if its higher.

#### 3sum - medium
**Summary**: 
just go through a sorted array to see if 3 indexes they add up to 0 and return the indexes

**Solution**: 
sort first, then basically have a for outer loop, and two pointer algo running on everything to its right, seeing if they all add up, also have to make sure that you skip the duplicates 
#### Container with Most Water - medium
**Summary**: 
have a bunch of bar graphs, have to figure out at what two positions between them we can store the largest amount of water. 

**Solution**: just go through it, move each pointer of the wall that is smaller, return the highest area.

