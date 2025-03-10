---
creation date: 2025-03-03 13:10
---
#Network #CCNA

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Switches

<< ---------------------------------------------------------------- >>

## Hubs vs Switches
before there were switches we used hubs to route network traffic, but:
hubs share the packets with all the devices on the hub. 
the devices that are not expecting the message will just ignore it, but this means if u have access to the hub, you have access to all the traffic between the devices on the hub.  

A switch however sends the packet only to the expected device. 
Wireless access points behave like hubs, it doesn't matter if the access point is connected to a switch, once a message is sent to the WAP intended for one devices the WAP sends it to all devices connected to it like a hub.

## CAM Table(content addressable memory)
a table of mac addresses and ethernet ports on a switch which allows the switch the remember on what port each device is connected to it. 

## Networking Layers
anything physical is layer 1[[01-Physical Layer]],
Mac Addresses are layer 2([[02-Data Link Layer]])
and IP addresses are layer 3 ([[03-Network Layer]])

The switch itself is a layer 2 device

messages on layer 2 are called frames, not packets

