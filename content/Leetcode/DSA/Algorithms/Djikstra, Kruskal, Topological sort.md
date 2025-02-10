---
creation date: 2024-12-10 12:51
---
#Algorithms 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`
# Algorithms 
## Djikstra's Algorithm: single shortest path

<< ---------------------------------------------------------------- >>

Djikstra is literally just BFS but with a min heap since its a weighted search instead of a normal queue

## Belman Ford(SSP but dijkstra doesnt work for negative edges so have to use this one instead)

relaxation. you basically do a BSF n - 1 times. that gives you the shortest path to all the nodes somehow

## Topological Sort(Kahn's Algorithm)
only possible on [[DAG]]s(Directed Acyclic Graphs).

**How it works**: repeatedly remove the nodes without any dependencies and add them to the topological ordering, until either no more nodes remain or a cycle is discovered.

you go through the graph, calculate the indegree of each node(the number of pre reqs)
then you add the ones without an indegree(no pre reqs) into the queue, you process each node in the queue and remove the indegrees of the affected nodes(when you remove them) and put the ones that get their indegrees to zero into the queue. add every popped node from the queue to the topological ordering. 
you can also do topological sort

#### Redundant Connection - medium
**Summary**: 
you have a graph that isnt a tree(undirected connected acyclic graph), but you want to make it one. you have an array of `[ai, bi]` edges where a and b are the numeral representation of the nodes the edge is between. return the edge that u can remove so that the remaining graph is a tree, if multiple answers return the last one in the edge array. 

**Solution**: 
normal cycle detection algo. u go through all the nodes and run dfs through them. before that do a for loop and make the adjacency list for the graph tho.

