---
creation date: 2024-07-20 15:55
---
#Network #Networking-Basics #Protocols

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# UDP(User Datagram Protocol)

<< ---------------------------------------------------------------- >>

Data may or may not be delivered compared to [[TCP(Transmission Control Protocol)]], and might even change on the way or even be in order. 

**Connectionless Protocol** 

It does use **Checksums**, but it does not do anything about it if the data was corrupted

## UDP Packets
it includes:
	1. Source port No.
	2. Destination port No.
	3. Length of the datagram
	4. Checksum
	5. Data

Pros:
	faster since it does not check for corruption
		so it is used in:
		1. video conference
		2. DNS
		3. Gaming


