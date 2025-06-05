---
creation date: 2025-06-04 16:26
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Uber

<< ---------------------------------------------------------------- >>
https://www.youtube.com/watch?v=giwa8Hc0niY&list=PLjTveVh7FakJOoY6GPZGWHHl4shhDT8iV&index=11


Functional Requirements
1. request a ride between two locations
2. see drivers in your area upon request, drivers can see you
3. Provide an expected amount of distance and time the ride will take
	1. in this one we will abstract it to google maps
4. compute the exact route that you are to take to get to the destination

Computational:
assume 1 billion users take a 20 minute weekly ride
gets to aprox. 20 million rides at a time
assuming 64 bit lat/long and 64 user id -> 1 gb of info
20 million/ 20 minute = 15000 requests per minute to the DB

Do have to use geo hashing and geo sharding(have to monitor it and twinker it a lot, a lot of 3rd party libraries to help with this)



