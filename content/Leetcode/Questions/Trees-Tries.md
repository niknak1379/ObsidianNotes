---
creation date: 2024-09-20 17:06
---
#Questions #Leetcode 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Trees

<< ---------------------------------------------------------------- >>

#### Invert Binary Tree - Easy
**Summary**:
just switch the lefts and rights given the root. 

**Solution**: 
just do a BFS and switch left and right.

#### Maximum Depth of Binary Tree - easy
**Summary**:
Get max depth.

**Solution**: 
just do dfs recursion with a recursive depth function and return the highest depth. 

#### Diameter of Binary Tree - Easy
**Summary**:
Longest path between two nodes in a binary tree, may or may not be through the root.

**Solution**: 
just do recursion on the max depth on left and right. add them and compare them to a univeral max. return the max at the end.

#### Balanced Binary Tree - easy
**Summary**:
see if a tree is balanced(the depth of the left and right are never different by more than one)

**Solution**: 
just recurse on depth and compare them and then return the new depth in the rec function

#### Same Tree - easy
**Summary**:
you have the root of 2 trees, see if they are the same trees or not. 

**Solution**: 
just recurse and see if theyre the same lol

#### Subtree of another tree - easy
**Summary**:
you have a subtree and a full tree, determine if the subtree is anywhere in the full tree

**Solution**: 
have a same tree function and recurse through both trees and call it at each node. 

#### Lowest Common Ancestor of BST - medium
**Summary**:
given 2 nodes in a BST, find the lowest common ancestor of them and return its value

**Solution**: 
Since its a bst the first one that is p < target < q should be returned, so just a normal while loop bst will do.

#### Binary Tree Level Order Travesal - medium
**Summary**:
given the root, return the level by level left to right node values.

**Solution**: 
make a queue with a while loop and a for loop inside of it that goes through and pops the queue and adds it to the result. 

#### Binary Tree Right Side View - medium
**Summary**:
return all the nodes that are visible from the right side of a BT

**Solution**: 
BFS the tree with a queue and append the last node in each level to the result

#### Count Good Nodes in Binary Tree - medium
**Summary**:
Given a binary tree `root`, a node _X_ in the tree is named **good** if in the path from root to _X_ there are no nodes with a value _greater than_ X. Return the number of **good** nodes in the binary tree.

**Solution**: 
just recurse and have a highest count in the recursion option and update it in each node and pass it along.

#### Validate Binary Search Tree - medium
**Summary**:
see if a binary search tree is valid. (no lower values on right side etc...)

**Solution**: 
recurse, but keep a min and max in the rec function that you compare the node value to to change the flag. the start should be float(-inf) and inf


#### Kth smallest number in a BST - medium
**Summary**:
return the Kth smallest node

**Solution**: 
just recursively go through it until there is no more left to find the smallest, then pass down the k - 1 everytime you go right, whenever k is zero return that. 
#### Construct Binary Tree from Inorder and Preorder Traversal - medium
**Summary**:
you have an array for in order and pre order traverslas, construct the actual BT.

**Solution**: 
basically the first one in preorder is root, then find the root in inorder and everything before that is on the left. recurse with the currect lists.

#### Binary Tree Maximum Path - hard
**Summary**:
get the maximum sum of nodes in a path in a binary tree.

**Solution**: 
you recursively dfs the tree. 2 cases can happen, either the path only goes through the node that ur on(as the root)(ie the split case) or it goes through the root. you can recurse but keep a separate variable outside of the rec incase of a split case being higher.

#### Serialize and Deserialize Binary Tree - hard
**Summary**:
given the root turn it to a string and back.

**Solution**: 
just do a post order with nones, and just iterate through the list and process it. Since its a list and all the Nones are there you can just go through it index by index with an outside variable in the recursion.



<< ---------------------------------------------------------------- >>
# Tries

<< ---------------------------------------------------------------- >>

#### Implement Trie Prefix Tree - medium
**Summary**:
make a trie

**Solution**: 
you just make a tree with a children array or dictionary. First node is empty, the rest have a value and a finish flag(to indicate if they are a word or not)

#### Design and Search Words Data Structure - Medium
**Summary**:
Design a data structure that supports adding new words and finding if a string matches any previously added string.

**Solution**: 
Same thing as last one basically

