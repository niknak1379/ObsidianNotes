---
creation date: 2025-06-16 15:20
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Top K problem

<< ---------------------------------------------------------------- >>

Example:
find top k search terms on google, viewed youtube videos, songs on spotify this week, 


Reqs: 
1. lots of incoming event we need to be able to count the occurance of all of them and have a leaderboard for most popular evetns
2. should be able to perform this search over arbitrary time ranges
3. billions of events per day, k < 1000

All user facing operations should be ASAP
also getting exact results can make fetching the eladerboard slow -> fast reads, vs percise results.