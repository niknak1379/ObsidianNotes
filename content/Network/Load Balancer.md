---
creation date: 2024-07-15 14:18
modification date: Monday 15th July 2024 14:18:22
---
#Network
<< ---------------------------------------------------------------- >>

# Load Balancer

<< ---------------------------------------------------------------- >>

https://www.youtube.com/watch?v=xg7Dj2AXLyk

Distributes multiple network requests along different web servers to ensure that they are always available. 

1. Software Load Balancers(AWS, Azure, etc)
2. Hardware Load Balancers(if you have the structure inhouse, like if its a government server etc...)

Uses different Algorithms
	like round robin, Weighted RR, Least Connections, Least Response time, Least Bandwidth

## Features
1. auto [[Scaling]].
2. Session Remembrance
3. Health Checks
4. compress
5. cache
6. logging
7. trace requests(which server handled which request)