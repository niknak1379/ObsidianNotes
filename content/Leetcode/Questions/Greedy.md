---
creation date: 2025-02-07 16:59
---
#Algorithms #Leetcode #Questions 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# [[Optimization Problems|Greedy]]

<< ---------------------------------------------------------------- >>

## Approaches
## Space-time
## Questions

#### Maximum Subarray - medium
**Summary**: 
return the largest sum of a subarray of an array

**Solution**: 
just go through the array, you keep track of 2 variables, one for the largest sum so far, and one for the sum so far, u just max between the two and update it at each iteration. update the current sum to the index if the index would be bigger than the current sum. 

#### Jump Game - medium
**Summary**: 
u have an array of positive ints, return true if u can reach the end of it, if the initial placement is at index 0. (the amount of jump is the value of each index)

**Solution**: 
u can do dfs and DP, but if u can also do greedy O(n). Go from the back. set the goal as the last index and just iterate index to index, changing the goal each time a slot is reachable from the index behind it. 

#### Jump Game II - medium
**Summary**: 
u have an array of positive ints, return the minimum number of jumps required to reach the end of it, if the initial placement is at index 0. (the amount of jump is the value of each index)

**Solution**: 
u can just bottom up DP it or top down dfs it, for greedy, you basically run BFS and see how many levels there are in the bfs, that will be the answer. 
#### Gas Station- medium #todo
**Summary**: 
u have a circular route with n gas stations in an array, the amount of gas available at each station is `gas[i]`. you have a car with an unlimited gas tank and going from each station to the next costs `cost[i]` gas. return the index of the starting gas station that u can use to make the circular path, return -1 if doesn't exist. 

**Solution**: 
basically u first check if it is possible at all or not. then u do a for loop and go through it and add the total amount of gas you will have at each position. each time it goes negative, it means that starting point isnt gonna work, set the total to 0 and update the starting position. 

#### Hand of Streights - medium
**Summary**: 
u have an array of positive ints, return true if u can reach the end of it, if the initial placement is at index 0. (the amount of jump is the value of each index)

**Solution**: 
u can do dfs and DP, but if u can also do greedy O(n). Go from the back. set the goal as the last index and just iterate index to index, changing the goal each time a slot is reachable from the index behind it. 


#### Merge Triplets to Form Target Triplets - medium
**Summary**: 
you have a 2D array of Triplet arrays. and an Integer target array `[a, b, c]`, which is the target triplet you want to attain. You can do the operation between two triplets: `[max(a1, a2), max(b1, b2), max(c1, c2)]`. Return True if you can return the target triplet or False if not. 

**Solution**: 
A solution is invalid if in the triplet there is a value that is higher than any of the targets(since were only doing a max operation basically ruins it) Go through all of them with a for loop, skip the ones with a higher, and see if u can find all three values. 

#### Partition Labels - medium
**Summary**: 
String s, we want to partition it so that each letter appears in at most one partition, return a list of ints indicating the length of each partition in order. 

**Solution**: 
u basically just go through it and make a counter. then go through it again, each time u visit a new letter add its total from the counter to the current total and increment the current length u have. when the current length reaches the total u have a partition. 

#### Valid Parenthesis String - medium
**Summary**: u have a string s containing only ( ) * , * can be both or nothing. determine if the string could be a valid expression.


**Solution**: 
you do 2 variables, leftMin and leftMax, if the max ever gets negative '))' u return False, at the end if the leftMin is zero u return True, if left min ever goes below zero, u reset it to zero, not sure why tho. 
U can obv just do dfs and DP but that will be O(n3) instead of O(n)
