---
creation date: 2024-07-20 18:16
---
#Network #Networking-Basics #Network-Structure #TCP/IP-Model

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Data Link Layer(MAC Address)

<< ---------------------------------------------------------------- >>
## Mac Address
So its not just based on the device but the physical components in the device(ur wifi and bluetooth will have different MAC addresses)
It works very closely with the Physical Layer.

## How it works
Anytime theres a new request to the router it goes to the DHCP so that it assigns a new [[IP(Internet Protocol)|IP address]] to the device.

Many devices are connected together. Using LAN
Over LAN they connect to each other using the *data link layer address*.

So when a device communicates to another over the DL layer, it checks it cache first to see if it has the address
	if it doesn't it will send a frame to the other devices on the network, sending the DLLA of the sender and IP address of the destination.

This is called ARP(Address Resolution Protocol).

features:
1. framing
2. error handling