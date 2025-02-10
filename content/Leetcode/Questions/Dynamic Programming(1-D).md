---
creation date: 2025-01-29 15:57
---
#Questions #Leetcode 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# DP

<< ---------------------------------------------------------------- >>

## Approach
there are two different approaches top down and a bottom up. Kind of forgot the difference
### Top Down:
Basically a DFS recursion function that you optimize by keeping a cache
### Bottom Up:
The one with the for loops, you just go through the first one and build it up, instead of recursing until you hit the base cases.
#todo need to learn how to do this actually

## Space-time:
its dfs with memoization, so u have to figure out how many lines youre gonna have to memoize and stuff. usually O(n) or O(n * t) t being the second condition u have to memoize. 




## Questions

#### Climbing Stairs - easy
**Summary**: 
 you have a stair case of n stairs. each move u can either go 1 or 2 steps. how many distinct ways can you go to the top. 

**Solution**: 
DFS until 1 and 2 which are one and two ways

#### Min Cost Climbing Stairs - easy
**Summary**: 
stair case of n, cost of being on n is In. u can either start at index 0 or 1, whats the min cost to get to the top. 

**Solution**: 
dfs backwards, min cost of 0 and 1 is arr i. then just do the min(dfs -1 dfs -2). u can reach the top from the last and second to last stair so thats why u do dfs(-1) and dfs(-2)

#### House Robber - medium
**Summary**: 
you have an array of houses with a arr i being the ammount of money in them. whats the max money you can rob, if the only constraint is that u cant rob two adjacent houses. 

**Solution**: 
just dfs plus memoize it. 

#### House Robber II - medium
**Summary**: 
same as last one, except the houses are in a circle, so the first and last one in the array are connected

**Solution**: 
u just do 2 dfs functions, one that goes through the list without the first and one without the last and return the max. 

#### Longest Palindrome Substring - medium
**Summary**: 
u have string s, return its longest palindrome substring

**Solution**: 
u can do this through recursion, the brute force dfs would have u dfs every combination of the for for loop, u also memoize it.  

#### Palindromic Substrings - medium
**Summary**: 
u have s, return the number of palindromic substrings in it. 

**Solution**: 
u can do this through recursion, the brute force dfs would have u dfs every combination of the for for loop, u also memoize it, just add a counter in the for loops.

#### Decode Ways - medium
**Summary**: 
u have a string of numbers that are the encoded alphabet, 1 -> a 2 -> b up to 26. like 11234. how many different ways can this message be decoded. 

**Solution**: 
just dfs, be sure to make the cases for 10-26, u have to hard code the numbers a bit. 

#### Coin Change - medium
**Summary**: 
u have an array of coins and an amount, return the lowest number of coins from the coin array values, that u have to use to get to that amount

**Solution**: 
just dfs it with memoization. 

#### Maximum Product Subarray - medium
**Summary**: 
given an array find the subarray(contiguous non empty seq of elements) that has the largest product and return the product

**Solution**: 
u can do this in o(n). u have a for loop that goes through it, u keep track min and max subarrays, and every iteration, u put the min as the min of val, min * val, min * val and max as val, max * val, or min * val(for negative stuff). #todo

#### Word Break - medium
**Summary**: 
you have word s and dictioanry d. return true if s can be separated into multiple words that are all in the dictionary. leetcode, {leet, code}

**Solution**: 
just dfs, go through the dict with a for loop each time and see if u reach the end, then dfs deeper if the part matches. then memoize. 

#### Longest Increasing Subsequence - medium
**Summary**: 
given an int array nums, return the length of the longest increasing sub sequence. 

**Solution**: 
try to do normal dfs first and then just memoize it. u just dfs, check at what indexes it increases and then dfs those.


#### Partition Equal Subset Sum - medium
**Summary**: 
you have an array, return true if you can partition it into two arrays with equal sums.

**Solution**: 
dfs with memoization, at each index just do a dfs with it counting towards the target and one without and increment the index.


