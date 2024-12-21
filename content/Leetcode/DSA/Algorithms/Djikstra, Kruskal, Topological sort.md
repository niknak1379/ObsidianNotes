---
creation date: 2024-12-10 12:51
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Djikstra's Algorithm: single shortest path

<< ---------------------------------------------------------------- >>

Djikstra is literally just BFS but with a min heap since its a weighted search instead of a normal queue

## Belman Ford(SSP but dijkstra doesnt work for negative edges so have to use this one instead)

relaxation. you basically do a BSF n - 1 times. that gives you the shortest path to all the nodes somehow

