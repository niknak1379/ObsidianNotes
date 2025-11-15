---
creation date: 2025-02-28 16:06
---
#Backend #DevOps #Docker

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Networking

<< ---------------------------------------------------------------- >>
https://www.youtube.com/watch?v=bKFMS5C4CG0
Different types of networking Docker provides:
1. Default Bridge
2. User-Defined Bridge
3. MACVLAN
4. MACVLAN 802.1q
5. IPVLAN(L2)
6. IPVLAN(L3)
7. OVERLAY

## Default Bridge
if you don't specify which type of network to use when u create a container, this is the network interface docker uses.
Name of the bride is DOCKER0 and it connects the home network to docker?
Creates a virtual ethernet switch for each container to the home network that the computer is connected to. Basically giving each one a separate IP address using [[03-Application-Architecture/Network/Networking-Basics/Protocols/Network-Layer-Protocols0/IP(Internet Protocol)|DHTP]]

## USER Defined Bridge
`docker network create name`
u can run containers normally on these just like the default bridge, u just have to specify it when you start the container.
### Why:
you do this to isolate a network from the default network


## The Host Network
u share the IP address the ports and everything else with the host network(u dont have to go through the Docker0 thing)
You dont have to expose any ports since youre literally deployed on the local host network

## The MACVLAN
You connect the docker network not to the host, but directly to the physical network
each container gets even its own mac address, but since there is only one connection to the modem, that socket has to share the multiple mac addresses on one connection, which is not available on default(you have to turn on promiscuous mode, which means setting it up can get very annoying)

## MACVLAN(802.1q)
you can specify sub interfaces(I have no idea what these are)


## IPVlan(l2)
MACVLAN with the difference being 

## IPVlan(l3)
Layer 3 focused. we connect to the host as if the host is a router

## None Network
just none, completely isolated from everything.