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
this is pretty easy actually just have to make sure about the carry