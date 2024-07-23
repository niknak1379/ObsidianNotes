---
creation date: 2024-07-18 15:31
modification date: Thursday 18th July 2024 15:31:15
---
#Network #Networking-Basics #Network-Structure

<< ---------------------------------------------------------------- >>

# OSI(Open Systems Inter-connection) model

<< ---------------------------------------------------------------- >>

A standard way of how two and more computers communicate with each other. 
Layers:
1. application
2. presentation
3. session
4. transportation
5. network
6. Data link
7. Physical\
Thats for outgoing signal, for ingoing it starts at physical and goes up.

## Application Layer
Implemented in software. The data or message is sent from the application later to the presentation layer. 

## Presentation Layer
Turns the message from ascii and etc formats into machine readable binary format(EBCDIC), which is sent to the session layer

## Session Layer
Helps setup and manages the connections. Enables sending and receiving data and terminating the connection. and then goes to the transport layer

## Transport Layer
Has its own protocols of how the data will be transferred ([[TCP(Transmission Control Protocol)]], [[UDP(User Datagram Protocol)]]).
Segmentation: it turns the data that it has received into segments.
Flow control: controls the amount of data being transported.(like server is sending at 40mbps but client is receiving at only 10, so it has to slow down).

## Network Layer
Works for the transmission of data segments transferred from a different network than the local one. **ROUTER** lives over here. 

Logical Addressing (handling [[IP(Internet Protocol)|IP Address]]ing), moves data packets from source to destination.

## Data Link Layer
Packets(contain the IP address of both the sender and the receiver, it also has subnet masking), it also adds the Mac Address of the device and forms a FRAME. Sends the frame to the physical layer

## Physical Layer
Transmits the bits from the electrical signals. 
 