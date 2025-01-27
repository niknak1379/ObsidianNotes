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