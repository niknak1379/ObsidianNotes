---
creation date: 2025-01-13 13:02
---
#Leetcode #Questions

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Backtracking

<< ---------------------------------------------------------------- >>

## Approach:
Basically a DFS but you append and remove the last index that you added to the DFS at each branch
you do have to append a copy of the list at the end for these questions tho, probably bc it passes the list by reference or sth in python.
## Questions

#### Subsets - medium
**Summary**: 
you have an array of numbers `nums`, return all the possible subsets in one array

**Solution**: 
just have a dfs with a sub array going through each index one dfs with the index added to the subset and one without

#### Combination Sum - medium
**Summary**: 
you have an array of ints and a sum target, return all the combination of the numbers that add up to the sum. Same number if found in the array multiple times can be chosen

**Solution**: 
DFS through the array, one with and without the number and also pass the sum along in the dfs function.

#### Combination Sum II - medium
**Summary**: 
same as last question, the same number cannot be used in the sum multiple times 

**Solution**: 
first sort through the list, then each time u go to a repetitive number just skip the index until a new number is found. Rest the same as the last question.

#### Permutations - medium
**Summary**: 
have an array nums, return all the possible permutations in any order

**Solution**: 
go number by number and recreate the permutations from an empty set. nums = [1, 2, 3] => `[[]]` then `[[1]]`. you go new permutation by permutation and add the new number at all positions. 
1
1 2, 2 1
3 1 2, 1 3 2, 1 2 3, 3 2 1, 2 3 1, 2 1 3

#### Subsets II - medium
**Summary**: 
you have an int array that might have duplicates, return all possible subsets, the solution should not have duplicate answers. 

**Solution**: 
you could sort it, skip when the numbers are the same, and just DFS one with and one without the index. 

#### Word Search - medium
**Summary**: 
list sorted in ascending order, return a search

**Solution**: 
have low = 0 high = len - 1 and mid = low + high //2 and just make decisions based on what the mid is. 