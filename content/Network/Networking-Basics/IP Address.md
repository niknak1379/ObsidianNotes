---
creation date: 2024-07-18 13:45
modification date: Thursday 18th July 2024 13:45:54
---
#Network #Networking-Basics

<< ---------------------------------------------------------------- >>

# IP Address

<< ---------------------------------------------------------------- >>

Your ISP(internet service provider) gives you a modem. That modem has a global [[IP Address]]. All the devices that are going to be connected to that modem will have the same IP address to the outside world.

The modem will also give IP addresses to the devices connected to it(local IP addresses) using DHCP(dynamic host configuration protocol).

The device will make a request to the modem, the modem sends it to the [[ISP]] and the ISP will send it to the internet. Once the request comes back from the ISP to the router, the router reads it and decides which device to send the response to using [[NAT(Network Access Translator)]].

IP address decides which **DEVICE** we will send the data too, but what will decide which application in that device consumes the response?, The **PORT** decides that. 

## PORTs
Ports are 16 bit numbers so a total of 2^16 ports in a computer. 

Ports 0-1023 are **reserved ports** so you cant put custom applications on them.

1024-49152 are reserved for applications. you can use the remaining ports. 