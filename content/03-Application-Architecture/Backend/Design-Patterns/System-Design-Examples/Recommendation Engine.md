---
creation date: 2025-06-24 14:37
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Youtube 

<< ---------------------------------------------------------------- >>
https://www.youtube.com/watch?v=QrZTmiZSRcw&list=PLjTveVh7FakJOoY6GPZGWHHl4shhDT8iV&index=23
![[Obsidian/Excalidraw/Pasted image 20250625145517.png]]


1. we want to fetch rec as fast as possible.
2. some amount of caching from the front end?


## Embeddings (Machine Learning stuff)
in order to determine similarity between two entities, we need to be able to represent them as numbers(or in this case vectors)

We generate the recommendations in 2 stesp
1. retrieval:
	1. fetch the last x videos a user interacted with
	2. fetch the last y most similar entities for each of those 
		1. using embedding!
2. ranking:
	1. assign a score to all x.y embeddings
	2. filter out all entities the user has seen
	3. sort and return to user

We can pre cache the last x entities we have watched.

![[Obsidian/Excalidraw/Pasted image 20250625161825.png]]


Vector databases are good but it takes time to figure out the closest x entities for a given vector -> 
Fetch most similar entities: the vector database is kind of stored in a geohashed database with similar things being on similar vector hashes. This just generalizes to N-dimensions instead of 2.  


 ![[Obsidian/Excalidraw/Pasted image 20250625164718.png]]
 