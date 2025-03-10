---
creation date: 2025-03-04 16:25
---
#Network #CCNA

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Network Architectures

<< ---------------------------------------------------------------- >>

## example of a bad network:
Single points of failure. basically connecting a bunch of switches in a series(or daisy chain)  instead of parallel, makes it so that if a switch goes down all functionality after it and connected to it will also go down and we should try to minimize it. 

## 2 Tier Network Design(Collapsed Core Model)
uses multilayer(L3) switches: are able to also work and access with layer 3(ip addresses) as opposed to a normal switch which only operates on layer 2. 
When designing a network, the devices on the network itself will talk to each other, so having multiple switches connected to the router and then devices on the switches wont be ideal, since that means the interactions between the devices on the network will have to go through the router at all times. 

Tiers:
1. Access Layer(devices and the swithces connected to the distribution multilayer switch)
2. Distribution Layer(multilayer switch)

## 3 Tier Network Design 
Tiers:
1. Core Tier(another L3 switch, optimally two which are connected to each other then to all the Distribution L3 switches and the routers.)
2. Distribution Tier
3. Access Tier