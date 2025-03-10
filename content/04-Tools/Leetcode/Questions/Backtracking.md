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
Given an `m x n` grid of characters `board` and a string `word`, return `true` _if_ `word` _exists in the grid_. The word can be constructed from letters of sequentially adjacent cellshe same letter cell may not be used more than once.

**Solution**: 
just have a for for loop going through it if the first letter is the same start the dfs function. in the dfs function have a dictionary to keep track of what nodes we have visited. you do have to reset the dictionary after each new call back tho. 

#### Palindrome Partition - medium
**Summary**: 
you have string s, partition s such that all the substrings of the partition are palindromes.
return all partitionings.

**Solution**: 
have a is palindrome function. dfs through the indexes and have a loop checking each index from 0 to j is a palindrome or not, then dfs the rest of what is remaining.

#### Letter Combinations in a Phone Number - medium
**Summary**: 
Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.


**Solution**: 
have an array of the mappings. DFS one digit at a time, based on the mapping have a for loop that adds each letter of it to the sub array and then dfs the rest at each iteration.


#### N Queens - hard
**Summary**: 
you have an nxn chess board, return a list of all the possible boards were n queens can be placed on the board without any queens checking one another. 


**Solution**: 
have to have 4 sets to keep track of col queens, row queens, pos diagonal queens and neg diagonal queens. Have a for loop that goes through each row on each iteration of the DFS function. then adds everything to the sets and does a backtrack.