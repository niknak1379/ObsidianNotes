---
creation date: 2024-07-20 16:25
---
#Network #Networking-Basics #Network-Structure #TCP/IP-Model

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Network Layer

<< ---------------------------------------------------------------- >>

In [[Transport Layer]] the data is in segments, but in Network Layer it is in Packets, [[Data Link Layer]] will have frames.

## Routers
**Routers** are at this level. 
Routers also have their own **Network Address**. 
The Packets will have the Network Address of the sender, the network address of the destination router, and the information being sent.
It has a **Forwarding Table** that the network of routers use to pass the packets along, until they reach their destinations. (**HOP BY HOP FORWARDING**). 

This happens over the ISP routers, not ur home router


### Control Plane
Used to build routing tables, its basically a graph and every router is a node. Theres 2 types of tables that are used to make the tables:
#### Static Routing
Adding the addresses manually. 
#### Dynamic Routing
Bellman fore, Dijkstra algorithm are used to find the routers. 


## Middle Boxes
usually in the Network layer but could also be in the [[Transport Layer]].
Could be a **Firewall** for example. 
	which can be used to black out IP packets with certain qualities, such as containing certain flags, etc...

Theres Stateless and Stateful firewall. It will store the state in its cache memory.

Another type of middle box is the [[NAT(Network Access Translator)]]