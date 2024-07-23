---
creation date: 2024-07-18 18:26
modification date: Thursday 18th July 2024 18:26:09
---
#Network #Networking-Basics #Network-Structure #TCP/IP-Model

<< ---------------------------------------------------------------- >>

# Application Layer

<< ---------------------------------------------------------------- >>

* Hosts user interactions
* WhatsApp, browser, etc...
* Where: Device
* [[Network Protocols]]
* Client Server Architecture

The ways applications are connected to each other:
	1. Client Server Architecture
	2. Peer to Peer(P2P)
		1. Every computer is both a client and a server. 


Applications are Processes which are made of threads:

Sockets: Interface between a process and the internet. 
Ports: So each process is going to be listening on its own port(like each instance of chrome has its own part), using **Ephemeral Ports**. 
	Ephemeral Ports: temporary ports assigned by a OS during a communication session. 



## DNS(Domain Name System)
When u hit a url, DNS is used to find the [[IP(Internet Protocol)|IP Address]] of that server.

Basically a [[Database]] of all the urls and IP Addresses you use to translate the URL.

You Have **Sub Domains** and **Second Level** Domains, and **Top Level** domains.
so for [mail.google.com]
	* mail is the sub domain
	* google is the second level domain
	* com is the top level domain

So you're going to have Root DNS Servers (.io .com .net).

### What happens when u hit a url
1. First check on the local computer
	1. it basically has a local cache of urls and IP addresses stored on the computer, to reduce latency
	2. If not found, searches the local DNS server, such as ur ISP.
	3. Then it will go to the root server
	4. If not found again search the top level domain DB, and get the IP address
	5. then it connects to the server



