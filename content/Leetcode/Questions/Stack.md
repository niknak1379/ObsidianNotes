---
creation date: 2024-09-18 13:31
---
#Leetcode #Questions

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Stack

<< ---------------------------------------------------------------- >>

## Stack
just puts things in a stack and pop them

Time complexity O(n)
Space complexity O(n)
### Example Questions

#### Valid Paranthesis - easy
**Summary**: 
have a string of different combinations of paranthesis({[]}) and see if it is valid or not

**Solution**: 
put the openings in a stack, when getting to a closing pop the stack and see if they match

#### min stack - medium
**Summary**: 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

**Solution**: 
just have a normal array acting as a stack with a double inside, with the first one being the value, the second being the min at that point of the stack. or do it with two stacks, same thing

#### Evaluate Reverse Polish Notation - medium
**Summary**: 
have an expression in reverse polish, return the int that evaluates it

**Solution**: 
go through it from the left, add all the nubmers to the stack, when you reach a sign pop the last 2 numbers and evaluate and add back to the stack, return the only remaining number in the stack.
#### Generate Paranthesis - medium
**Summary**: 
Given `n` pairs of parentheses, write a function to _generate all combinations of well-formed parentheses_.

**Solution**:
DFS: have a dfs function with open, close and string inputs, that just adds strings to the ret list when theyre completed.

#### Daily Temperature - medium
**Summary**: 
Given an array of integers `temperatures` represents the daily temperatures, return _an array_ `answer` _such that_ `answer[i]` _is the number of days you have to wait after the_ `ith` _day to get a warmer temperature_. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

**Solution**:
go through it and at each step add to the stack the temp and its index. if stack exists, see the top of the stack, if its bigger, change it res array value, if not keep going and add to the stack. make the list default 0

#### Car Fleet - medium
**Summary**: 
There are `n` cars at given miles away from the starting mile 0, traveling to reach the mile `target`.
You are given two integer array `position` and `speed`, both of length `n`, where `position[i]` is the starting mile of the `ith` car and `speed[i]` is the speed of the `ith` car in miles per hour.
A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.
A **car fleet** is a car or cars driving next to each other. The speed of the car fleet is the **minimum** speed of any car in the fleet.
If a car catches up to a car fleet at the mile `target`, it will still be considered as part of the car fleet.
Return the number of car fleets that will arrive at the destination.

**Solution**:
make a sorted pair of the speed and positions, with positions coming first.
then go from the back of the array and calculate the speed it takes to finish. If the speed is slower than the top of the stack add it to the stack. the length of the stack will be the. number of groups.





