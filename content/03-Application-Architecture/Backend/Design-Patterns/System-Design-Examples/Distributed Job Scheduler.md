---
creation date: 2025-07-12 14:43
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Job scheduler

<< ---------------------------------------------------------------- >>

gets a binary and executes it on a node at a determined time. 


1. allow running uploaded binary files upon the request of a user
2. each jobmust be run at least idealy once
3. users should be able to see the status of their jobs
4. jobs can be scheduled as one-off on a cron schedulers or via a DAG (directed acyclic graph)
![[Obsidian/Excalidraw/Pasted image 20250714150647.png]]