---
creation date: 2025-03-04 16:49
---
#Network #CCNA

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Datacenters

<< ---------------------------------------------------------------- >>

A server rack in a datacenter would have an [[04-Network Architectures|access layer switch]] at the top, with the access layer switch being connected to the distribution layers with redundant connections and those being connected to the core layer.

North South traffic: network traffic coming from core switches into the access tier.(basically to and from internet)
East West traffic: network traffic in between different servers in the same data centers

Since east west traffic is very important campus style networks(3 tier example from [[04-Network Architectures]] is not that great) and we use sth called spanning trees

## Spanning Trees
### Spine/Leaf design
Spine switches are basically the same thing as distribution layer switches, while leaf switches are the TOR(top of the rack) switches. In this design every spine switch is connected to all TOR switches, and none of the Spine switches are connected to each other.
The connections between the spine and leaf switches are not L3 connections like in the 2 and 3 layer architectures that are layer 2(data link, mac address) connections. 