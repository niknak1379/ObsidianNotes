---
creation date: 2025-04-25 15:34
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# [[03-Application-Architecture/Backend/Database/Database|Database]] Indexes

<< ---------------------------------------------------------------- >>

How do you maximize performance when putting ur data into a database. 

1. We want data to be persistent
2. On a hard drive(more durable, it doesnt matter if the computer is shut off)
3. In a Database

You dont want to have the database be O(n) for read speeds in an application that does a lot of reads. 

**Indexes**: 
We care about finding rows with specific key values.
And also Range Queries.
These 2 need to be optimized even if it means making the writes slower. 

Database index: read speeds go up and the write speeds go down for a specific key. 

1. hash indexes
2. B-tree indexes
3. LSM Tree + SSTable indexes

## Hash Indexes
hash function creates a hash when u put in an input number that will be always consistent.

O(1) reads and writes. 

If 2 things have the same hash you either have a linked list at each hash and chain them at the end or probing(looking at the next available spot)
Load factor stuff from CSE 100

Issues: bad on disk(If the data is stored on a physical disk it will take time to go from pointer to pointer) but fine in memory so theyre always kept there.
=> memory is expensive and there is less of it, so cant put too much in there. And RAM is not durable and we will use data if the computer is shut down. 


WAL( write ahead log ): a list of all the writes and changes to the database is stored on disk sequential so it is pretty fast and durable. So we can just re populate the hash index. 

**There is way to support Range Queries in a hashmap tho**

## B-Tree Indexing

B-tree is a simplification of a BST that allowes nodes to have more than two children. 

Can be Kept on Disk a lot easier. 
easy to keep the tree balanced. 
You need to make less jumps on the disk to get to the references that you need because the trees are short.

In an insert tho if there is not sufficient space in the page that the node is being inserted into, the node has to be split into two(with the ranges in the parent being updated to accomodate the split), and if there is no space in the parent node either (for the update ranges), the parent will aslo be split and so on, so worst case up until a new root node will have to be created. 
Better Explanation:
Unlike Binary Search Trees (BSTs), nodes in a [B-Tree](https://www.geeksforgeeks.org/introduction-of-b-tree-2/) have a predefined range for the number of keys they can hold. Therefore, before inserting a key, we ensure the node has enough space. If the node is full, an operation called splitChild() is performed to create space by splitting the node.

Have a WRITE AHEAD LOG first so incase the computer dies mid insert operation, the DB can be recreated.

Good in terms of reads because only a couple of traversals on the list is needed. Not so great in terms of Writes. 

Better than hashsets bc it can live outside of memory, and you can actually do ranged queries on this DB.

## LSM Tree + SSTable Database Indexing

### LSM(Log Structured Merge Tree) Tree
Balanced binary search tree in memory (red black) 

When an LSM Tree gets too big to be supported in memory, it gets reset and then converted into an immutable SSTable(sorted List).
This operation is not as expensive(o(n)) since the data is already sorted in an LSM and its inorder traversal is O(n). 

### How do you incorporate SSTable files into a read operation?
1. Look for the key in the LSM tree
2. Check the most recent SSTable
	1. keys can be in multiple SSTables(due to immutability) so the most recent is the updated value
For deleted we perform a Tombstone operation. (turn the most recent value in the SSTable into a tombstone to indicate it is deleted). 

The reads are O(logn).
Since the SStables are already sorted you can Binary Search them.  

#### Read Optimizations:
**Adding Sparse Indexes**(): 
Taking certain keys and writing locations on disk. 
**Bloom Filter**: allows us to see if a key is not in the table. 

#### Compaction:
since were not actually deleting or updating values and just adding more recent ones to the SSTables, we could be wasting a lot of space in some repeated operations. 

Basically have a two pointer algorithm go through the 2 most recent SSTables and sort them in a new table and if a key is duplicated write the most recent to the new SSTable. 

## Conclusions
![[Obsidian/Excalidraw/Pasted image 20250428135149.png]]

Indexes:
Main point is to get faster reads on a specific key value(this will make the writes slower depending on the implementation)

Clustered Indexes( all data of the row itself is stored in the index ) => faster reads

Non Clustered Indexes => they have the address of the row on the disk of the data -> less data duplication

Covered Index: store only some fields rather than all. 


Multi Dimensional Indexes(composite indexes): 
Basically having multiple indexes for multiple fields in a table that allows you to sort and traverse the table by more than one property




