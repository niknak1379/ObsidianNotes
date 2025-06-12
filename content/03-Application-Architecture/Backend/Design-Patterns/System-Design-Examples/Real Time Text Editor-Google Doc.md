---
creation date: 2025-06-09 16:39
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Untitled

<< ---------------------------------------------------------------- >>
https://www.youtube.com/watch?v=YCjVIDv0zQY&list=PLjTveVh7FakJOoY6GPZGWHHl4shhDT8iV&index=14
Reqs:
Billions of users, billions of docs
a doc can have thousands of users attempting to edit at once
doc Sizes can be in kB -> if we want to process writes super quickly number of writers and doc size can be problematic.


Issues:
-document is large! Writes become much slower
-we use a lock to handle concurrent writes
-lots of contention for popular documents.


Operational Transform:
Centralized server takes in concurrent writes and transforms them as necessary before sending back to clients.
A single server will be bottlnecked since we are doing everything with web sockets and will not be able to handle all the concurrent writes and also resolve the conflicts at the same time. 

CRDTs:
We use a text-editing CRDT. 
We can merge everything client side since once the clients get all the writes the CRDT makes it so that no matter the order of writes they converge to the same data. 

State CRDT:
We send the entire state of what we are trying to maintian. 
1. send full text document
2. have a merge function that is commutative, associative, and idempotent
3. this is problematic becuase the documents will be too big.

Operation CRDT:
1. just send the operation -> insert 'x' at position 'y'
2. need a merge function that is commutative and associative
3. idempotent?(if you get the same operation twice it will not have any additional effects, so if you get the same insert twice it will stay the same) need to include additinoal metadata for each operation
4. how do we make character insertions commutative?
	1. u assign 0 as the first char and 1 as the last and then u do the position of the chars and send them in with the write operation. 0 .33 .66 1. If you wanna do additional writes you do the mean of the positions you are doing the write in between. You can also add random jitters so that when multiple writes happen at the same time on the same position their order will be deterministic based on the jitter of their position.
	2. Theres plenty of libraries that handle this.

How can we ensure idempotence:
1. each write has its own UUID
	1. works but now each client has to store an extra uuid per character
2. version vector
	1. if version vector of write is smaller than ours, we have seen it.

![[Obsidian/Excalidraw/Pasted image 20250610141524.png]]