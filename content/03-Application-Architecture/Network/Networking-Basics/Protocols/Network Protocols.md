---
creation date: 2024-07-18 13:35
modification date: Thursday 18th July 2024 13:35:41
---
#Network #Networking-Basics #Protocols 

<< ---------------------------------------------------------------- >>

# Network Protocols

<< ---------------------------------------------------------------- >>

Basically a set of rules that ensures that the data will reach its destination and is not corrupted on the way. 
Such as [[03-Application-Architecture/Network/Networking-Basics/Protocols/Transport-Layer-Protocols0/TCP(Transmission Control Protocol)]], or [[03-Application-Architecture/Network/Networking-Basics/Protocols/Transport-Layer-Protocols0/UDP(User Datagram Protocol)]], [[03-Application-Architecture/Network/Networking-Basics/Protocols/Application-Layer-Protocol0/HTTP]].

Connection Oriented Transmission like [[03-Application-Architecture/Network/Networking-Basics/Protocols/Transport-Layer-Protocols0/TCP(Transmission Control Protocol)]]
	it gives you feedback about wether the data was lost or not
Connectionless oriented transmission like UDP
	like gaming or video conference, it is faster but could also lose data

A lot of protocols follow the [[03-Application-Architecture/Network/Networking-Basics/Protocols/00-Protocol Models0/TCP,IP Model|TCP/IP Model]], go to that note for a list of them.
Protocols:
* [[03-Application-Architecture/Network/Networking-Basics/Protocols/Application-Layer-Protocol0/HTTP]]
* DHCP ([[03-Application-Architecture/Network/Networking-Basics/Protocols/Network-Layer-Protocols0/IP(Internet Protocol)|IP Address]] management from the router)
* FTP (file transfer)
* SMTP(simple mail transfer protocol)
* POP3 & IMAP (to receive emails)
* SSH
* VNC
The ones that do not follow that protocol:
* TELNET (not a part of TCP/IP but used to manage remote devices)
* [[03-Application-Architecture/Network/Networking-Basics/Protocols/Transport-Layer-Protocols0/UDP(User Datagram Protocol)]]: connectionless and stateless session(data loss)