---
creation date: 2025-06-25 17:02
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# hi

<< ---------------------------------------------------------------- >>
https://www.youtube.com/watch?v=i0tPWfB2Rgg&list=PLjTveVh7FakJOoY6GPZGWHHl4shhDT8iV&index=24

reqs:
1. build an arena battle royale game with multiple player and moving around and interacting with non playable items
2. in a lobby we can have up to 1000 players and 10000 additional items that we need to maintain state for
3. have to be able to support pings of 10ms, which means being able to send game state updates to our users 100 times per second!

 Probably need single leader to store the state changes so that the movements are not out of order and or inconsistent 
![[Obsidian/Excalidraw/Pasted image 20250626134449.png]]

For this if someone reconnects it has to get all the states back which is a lot. So also need to make a snapshot server. 

![[Obsidian/Excalidraw/Pasted image 20250626143752.png]]