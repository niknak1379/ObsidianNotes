---
creation date: 2025-07-14 15:06
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Locking

<< ---------------------------------------------------------------- >>

 build a lock that miultiple diferent nodes can use to ensure mutual exclusion, it should be perfectly functional in the face of hardware failures.
Capacity estimates: for a given lock, upto 100 nodes may to try to grab it at the same time.

![[Obsidian/Excalidraw/Pasted image 20250715145535.png]]