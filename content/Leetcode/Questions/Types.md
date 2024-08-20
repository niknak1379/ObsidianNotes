---
creation date: 2024-08-03 11:23
---
#Leetcode #Questions

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Untitled

<< ---------------------------------------------------------------- >>

## Arrays, Hashmaps
### General Approaches
1. sort the array and compare
2. put it in a hashmap and compare them 
Time complexity O(n) for hashtable nlogn for Sorting
Space complexity O(n)
### Example Questions

#### Contains Duplicate - easy
**Summary**: 
Return True or False if an array of strings, contains duplicates

**Solution**: 
You just put everything in a hashmap as you go, and if it already exists u just return true

#### Valid Anagram - easy
**Summary**: 
Have two strings, have to return true or false if they are anagrams(have the same number and kind of characters)

**Solution**: 
you just put each character in to a hashmap, and check if the two hashmaps are the same for the words\

#### Two Sum - easy
**Summary**: 
Have a list of numbers and a target, return the index of the two values in the array that get added to the target
Solution

**Solution**: 
as you go through the array, you add the (target - array[i]) to the hashmap with the index, and make a look up in the hashmap for every index to see if it exists in the hashmap.

#### Group Anagrams - medium
**Summary**: 
Have an array of strings, return an array of arrays with all the anagrams in one array

**Solution**: 
Iterate through the array, Sort each string, and add it to the hashmap with an array of strings. if it exists, add it to the list inside of the hashmap. Return the `new ArrayList<> hashmap.value()` version of the hashmap as an array.

#### Top K Frequent Elements - medium
**Summary**: 
Have an array of ints, and an int K. return the K most frequent elements.

**Solution**: 
its a weird BucketSort. You cant everything by hashing it, then u put it in a list, with the indexes being the freq and the list[i] being a list of the numbers that have that freq. Then you just iterate the list and return the top k numbers.

#### Encode and Decode String - medium
**Summary**: 
You have a list of strings and an encoder and a decoder function, that turns the list into one long string and then back to a list again

**Solution**: 
you encode it by adding a special character and a number(length of the string being encoded)

#### Product of Array Except Self - medium
**Summary**: 
You have an array, and you return a second array that for each index, has the product of all the indexes except the current index and is O(n)

**Solution**:
You have one return array, in the first iteration from the front, you multiply everything and put it in the index ahead, for pre product, and then for the second iteration from the back, you multiply everything and put it one index before for the post product and just multiply as you go.

#### Valid Sodoku - medium
**Summary**: 
Wether a half filled soduku table is valid or not, 

**Solution**:
have three hashes of hashes, one for rows, columns, and grids and just iterate the table, return false if u hit sth twice in the hashmaps. 

#### Longest Consecutive Sequence - medium
**Summary**:
have an array of integers, and have to return the length of the largest consecutive sequence(1, 2, 3 (3)).

**Solution**:
you put everything in the hashmap in the first iteration., for the second iteration go from the start, if the number is the start of a sequence(num[i] - 1, doesnt exist) then while loop to see how far the sequence exists in the hashmap, and return the longest length.


## Two Pointer Algorithm
you just have two pointers, one from the front and one from the back that go through the list until they meat each other, at that point they have to return something.

Time complexity O(n)
Space complexity O(n)
### Example Questions

#### Valid Palindrome - easy
**Summary**: 
have a large string that youre supposed to see if it is a palandrome or not.

**Solution**:

#### Two Sum Input Array Sorted - easy
**Summary**: 
just go through a sorted array to see if they add up to a target Int

**Solution**:

### Monotonic Decreasing Stack problems

