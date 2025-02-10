---
creation date: 2025-01-25 14:57
---
#Questions #Leetcode 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Graphs

<< ---------------------------------------------------------------- >>

### Approaches
Either DFS or BFS mostly

### Questions
#### Number of Islands - medium
**Summary**: 
you have an mxn grid of 1s(land) and 0s(water). return the number of islands. 

**Solution**: 
you do a for by for loop, everytime u hit land u start dfsing and check all the other adjacent lands as marked, and add one to the number of islands. just do this until u run out.

#### Max Area of Island - medium
**Summary**:
you have an mxn grid of 1s and 0s. return the maximum area of an island.

**Solution**: 
you just dfs it again in the dfs return 1 for a land and 0 for water, and just return the add up in each call. 

#### Clone Graph - medium
**Summary**: 
you have the reference of a node in an undirected graph. return a deep copy. each node has a value and a list of neighbors. 

**Solution**: 
just dfs it and for every dfs function you return the copy but before you return you branch the dfs for the neighbor nodes. 

#### Rotting Oranges - medium
**Summary**: 
mxn grid, each cell is 0 empty, 1 fresh orange, 2 rotten orange. every minute a fresh orange that is adjacent to a rotten one gets rotten. return the minimum number of minutes for all to be rotten. 

**Solution**: 
you do a loop where you go through the grid adding all the rotten ones to a queue, you bfs it, adding the newly rotting grid parts to the queue and changing its value to rotten(to keep track of duplicates) is the same as the total we counted at the start then return the number of iteration the while loop for the deque took to finish. 


#### Pacific Atlantic Water Flow - medium
**Summary**: 
u have an mxn grid, the surroinding being the sea and the values the heights of the cells. top and left are the pacific ocean, bottom and right are the atlantic, return a 2d list of the coordinates where if it rains water can flow from there to both oceans.

**Solution**: 
go from the left and bottom cells and right and bottom cells, dfs ur way and add all the reachables to different sets. at the end if its in both sets append it to res.

#### Surrounded Regions - medium
**Summary**: 
mxn grid with x and os. you need to capture O regions that are surrounded by Xs

**Solution**: 
just go from the sides and dfs all the os in a dictionary or sth, and then go through it again changing everything that isnt in the dfs. 

#### Course Schedule - medium
**Summary**: 
you have a numCourses(number of courses that you have to take) and an array of pre reqs where `[ai, bi]` you have to take b before a. return true if u can finish all the courses. 


**Solution**: 
you have to graph it out, and if theres a cycle return false. to do that u need to map everything in a dictionary. then you do a for loop and dfs all the entries, in case the graph is not connected. 

#### Course Schedule II - medium
**Summary**: 
same question as last time, but return the correct ordering of the courses you have to take to be able to finish all the courses. 


**Solution**: 
you do the same as last one, u just keep a visited set that u end the dfs function on if the node has been visited before and just add the node to the ret list at the end of the dfs functino.