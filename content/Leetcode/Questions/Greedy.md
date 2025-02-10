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