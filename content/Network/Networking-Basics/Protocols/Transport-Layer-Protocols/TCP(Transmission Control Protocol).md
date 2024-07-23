---
creation date: 2024-07-18 13:36
modification date: Thursday 18th July 2024 13:36:27
---
#Network #Networking-Basics #Protocols

<< ---------------------------------------------------------------- >>

# TCP(Transmission Control Protocol)

<< ---------------------------------------------------------------- >>

## Checksums
How does it ensure that all of the data sent from one transport layer to the other over the network is there and the data hasn't been corrupted.

Basically a string or number that you calculate based on the data, and is attached to the data. If the receiver also calculates the checksum and the value is the same then the data is valid. 

## Timers
How do we know if the other side received the data?
When you send a packet, you start a timer. If the packet was never received, a response to the packet will never be delivered and the timer will expire. **Read Transmission Timer**

The receiver device might have received the packet, but the response was never delivered, and as a result the sender will resend the first packet bc the timer is expired. This is resolved through **Sequence numbers**

## How it works
* [[Application Layer]] sends lots of raw data and TCP segments the data(divides in chunks) adds headers, checksums, etc...
* It might collect the data from the [[Network Layer]](Network layer itself divides the data into smaller chunks so transport layer has to put them back together)
* Congestion Control
* Takes care of odd scenarios
	* when data does not arrive
	* fixes if the arrived data is out of order(sequence number)

Features
	1. Connection control
	2. error control
	3. corruption control
	4. full duplex

## Three Way Handshake
Client will send a connection request to the server, and sends a SYN(synchronization flag), and a randomly generated Sequence number to the server, which means a new connection is being established.
The server will then send a ACK(Acknowledgement flag) and a sequence number of the own server(uses the client Seq No. to create one of its own).
Then after the client has received the ACK flag, it will send its own ACK flag to the server and increment the Seq No..
