---
creation date: 2025-06-12 14:08
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Comments

<< ---------------------------------------------------------------- >>

Requirements:
Being able to infinitely nest comments.
Ways to view comments: new, hot, top, controverial

All of these are recursive(for a comment we load its children based on the order of newest or hottest etc...)

Capacity estimates: around 2GB per post of comment data if were keeping replicas for all 4 viewing types. only 12MB if we separate the comment content. so a lot more managable

Since most people lurk we should optimize for reads instead of writes. 

The 4 types of Comment views dont have to be perfectly in sync with one another as long as they will be causally consistent(comments depending on each other are valid and their dependencies exist) individually.

![[Obsidian/Excalidraw/Pasted image 20250612154858.png]]