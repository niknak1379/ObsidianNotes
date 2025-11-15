---
creation date: 2025-03-05 14:26
---
#Network #CCNA

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# WAN(Wide Area Network)

<< ---------------------------------------------------------------- >>

If u have a branch office and a corporate office and you need to connect all the different offices together:
## Leased Lines:
wired connections u have to lease. Normally u have to share these with others, but if u lease it u can have the entire bandwidth for urself. Also this is not for the internet, this is for ur own private network and traffic for ur own company. 

## MPLS(Multi Protocol Label Switching)
Basically u ask the provider and they set up everything for you, and you dont have to go through the hassle of leasing lines. 
They keep all the different customer's networks separate by running virtual circuit networks.

MPLS is basically a layer 2.5(neither [[03-Application-Architecture/Network/Networking-Basics/Protocols/00-Protocol Models0/TCP,IP-Model&Layers/02-Data Link Layer]] nor [[03-Application-Architecture/Network/Networking-Basics/Protocols/00-Protocol Models0/TCP,IP-Model&Layers/03-Network Layer]]). It adds a new layer to the OSI model by adding a label designating which networks are allowed to access the traffics on that packet. Thats how the Virtual circuit is created. 

## MetroE(Metro Ethernet)

Basically u pay the ISP for an Ethernet cable running under the city from one office or datacenter to the other. A private super fast connection on a city level. Bc of its speed its usually used to connect a datacenter to the main office. 

## SDWAN(Software Defined WAN)
This is whats replacing MPLS


## Over Public Internet
Instead of all the solutions from above, u can also just connect the two locations over public internet. However, for privacy and security you do have to encrypt the data using additional headers: you basically run the network using a VPN.
