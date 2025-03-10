---
creation date: 2025-03-03 13:51
---
#Network #CCNA

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Router

<< ---------------------------------------------------------------- >>
https://www.youtube.com/watch?v=p9ScLm9S3B4&list=PLIhvC56v63IJVXv0GJcl9vO5Z6znCVb1P&index=3
Routers are so that devices on two different networks(3 first numbers on the IP address) talk to each other. 

## ARP(Address Resolution Protocol)
Basically a way so that a device can find out the mac address of a ip address its trying to send a message to. Since switches only have access to mac addresses(they're in layer 2 and do not have access to ip addresses) the device itself needs to find the endpoints mac address. 

When the mac address is unknown the device will send an ARP message to the switch as a broadcast frame(going to all physical ports) and the mac address with the correct ip address will respond.


## Events of a Ping message going from one device to another on different networks
1. send ARP to find the mac address of the router
2. send the packet to the router(the packets layer 2 information will be empty since it only has the ip address of the destination not its mac address)
3. Router sends an ARP message to the destination network switch to get the mac address
4. the switch broadcasts the message and sends the mac address back
5. then the router sends the actual packet to the switch which will then get to the correct mac address

