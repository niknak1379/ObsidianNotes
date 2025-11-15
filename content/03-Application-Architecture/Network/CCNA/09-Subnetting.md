---
creation date: 2025-03-06 21:11
---
#03-Application-Architecture #Network #CCNA

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Subnetting

<< ---------------------------------------------------------------- >>

## What it is:
changing the subnet mask in order to change the available number of host bits on a network. You basically change the number of bits in the subnet mask from the default 24 to sth less.
11111111.11111111.11111111.00000000 -> 11111111.11111111.11111110.00000000
256 possible IP addresses -> 512 possible IP addresses

You can also add bits to the mask so that u divide ur network into multiple networks([[AWS Setup]] did this i think)

11111111.11111111.11111111.00000000 -> 11111111.11111111.11111110.11000000 -> /26 network(26 bits on the subnet mask)

**By how much to change the subnet:**
If you want to divide the network into multiple networks you add some of the host bits to the mask bits. Depending on how many networks you want. If you want lets say 4 networks(you have to add 2 bits to the subnet)

**The Increment**: 
The last network bit we have in the subnet mask. 
So in the above example the last increment is 64(128 first bit, 64 last bit that is in the mask)

that means the new networks that you have, their [[03-Application-Architecture/Network/Networking-Basics/Protocols/Network-Layer-Protocols0/IP(Internet Protocol)|IP addresses]] will be incremented by 64.
So if the original ip address is 192.168.1.0 the first network is from .1.0 to 102.168.1.63(the first 64 addresses) second network is .127, third is .191 and last one is .255.






