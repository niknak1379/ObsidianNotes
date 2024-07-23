---
creation date: 2024-07-19 15:39
modification date: NaN
---
#Network #Networking-Basics #Network-Structure #TCP/IP-Model

<< ---------------------------------------------------------------- >>

--- `$= dv.current().file.mtime`
# Transport Layer

<< ---------------------------------------------------------------- >>

Transportation of the data from the Network to the applications is done in the transport layer, the transportation from the network between multiple devices is done in the [[Network Layer]].
Basically the layer that decides which application on the device to send the data to. 

Located on the actual device
[[TCP(Transmission Control Protocol)]], [[UDP(User Datagram Protocol)]] Protocols. 

## Multiplexing
Basically bundling up a lot of data intended for different sources and applications into one bundle. (different types of data like text for the browser, file for whatsApp etc... all bundled into one medium)
## Demultiplexing
Unbundling the bundle and sending the pieces to their intended destination.

## Sockets vs Ports
#todo 
https://stackoverflow.com/questions/152457/what-is-the-difference-between-a-port-and-a-socket

Socket is basically the combination of an IP address and a port. 
## Features
The transport layer will attach the socket port numbers and thats how it knows where to send the data. 
Also takes care of congestion control. So theres congestion control algorithms built into [[TCP(Transmission Control Protocol)]]. 



