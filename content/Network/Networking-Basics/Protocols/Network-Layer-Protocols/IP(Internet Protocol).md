---
creation date: 2024-07-18 13:45
modification date: Thursday 18th July 2024 13:45:54
---
#Network #Networking-Basics

<< ---------------------------------------------------------------- >>

# IP(Internet Protocol)

<< ---------------------------------------------------------------- >>

## IP Address
Your ISP(internet service provider) gives you a modem. That modem has a global [[IP(Internet Protocol)|IP Address]]. All the devices that are going to be connected to that modem will have the same IP address to the outside world.

The modem will also give IP addresses to the devices connected to it(local IP addresses) using DHCP(dynamic host configuration protocol).

The device will make a request to the modem, the modem sends it to the [[ISP]] and the ISP will send it to the internet. Once the request comes back from the ISP to the router, the router reads it and decides which device to send the response to using [[NAT(Network Access Translator)]].

IP address decides which **DEVICE** we will send the data too, but what will decide which application in that device consumes the response?, The **PORT** decides that. 

## PORTs
Ports are 16 bit numbers so a total of 2^16 ports in a computer. 

Ports 0-1023 are **reserved ports** so you cant put custom applications on them.

1024-49152 are reserved for applications. you can use the remaining ports. 

## IPv4
32 bit numbers, 4 - words
The first 3 numbers are the network address(they indicate the subnets), and the last one is the host address.

### Subnet Masking
it masks the network part of the IP address(the first 3), and just give us the host part.
12.0.0.0/32 so the first 32 bits(3 digits) are fixed and we can only use the last digit.

### Reserved Addresses
localhost: 127.0.0.1
loopback addresses
## IPv6
128 bit numbers, it is not backwards compatible.
ISPS would have to shift a lot of hardware work to adopt it, which is why it is not widely adopted.

## Packets
Header is 20 bytes.
it includes IP version, length, identification, flags([[TCP(Transmission Control Protocol)|TCP]] flags), TTL(time to live).
TTL: basically if a packet after a certain period of time hasn't reached its destination, it will be dropped from the network.