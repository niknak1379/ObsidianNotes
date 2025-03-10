---
creation date: 2024-09-18 16:28
---
#Leetcode #Questions

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Sliding Window

<< ---------------------------------------------------------------- >>

#### Best Time to Buy and Sell Stock - easy
**Summary**: 
have an array of prices, determine when to buy and sell return max profit

**Solution**: 
have two pointers, second one goes and sees if the prices is higher, if it isnt update the first pointer and move the second forward

#### Longest Substring without Repeating Characters - medium
**Summary**: 
For string s find the length of the longest substring without repeating chars

**Solution**: 
you go through it everytime you update the second pointer you add it to a dictionary. if you hit a duplicate, you move the first one forward until there are no more duplicates.

#### Longest Repeating Character Replacement - medium
**Summary**: 
you have int K and a string s. you can change chars K times, whats the longest substring without repeating characters.

**Solution**: 
have 2 pointers, update the count of all letters, pick the max value of occurance as the default letter and subtract from length. as long as it is more than K move the first pointer to the right.

#### Permutation in String - medium
**Summary**: 
have 2 strings s1 and s2, return true if s2 has a substring that is a permutation of s1. 

**Solution**: 
get the counts of s1, and the s1len of s2 in a dictionary. have 2 pointers on s2, have the second one at length of s1, and have both of them move right until the 2 dictionaries are the same. 
One Dict: just count s1 first, for s2 for the second pointer if it is in the dictionary reduce the count. When moving the window, if the left one is in the count, +=1 it. Check when all counts are 0.

