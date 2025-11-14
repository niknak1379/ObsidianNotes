---
creation date: 2025-11-10 15:00
---

#AWS-Basics 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Virtual Private Cloud

<< ---------------------------------------------------------------- >>

A logically isolated virtual network that resembles a traditional network youd operate in your own datacenter. 

AWS EC2 and VPC are very tightly coupled, as a result all VPC CLI commands are underneath EC2 CLI. 

* Are Region Specific
	* you can use VPC peering and connect them across regions.
* can create up to 5 per region
* every region has a default one
* up to 5 IPV4 or 5 IPV6 CIDR Blocks
* most components dont cost anything
* Things that do:
	* VPC Endpoints, VPN gateway, customer Gateway, IPV4 Addresses, Elastic IPs, DNS hostnames

#### Deleting a VPC
before being able to delete a vpc you have to delete the following:
* security groups and NACLs
* Subnets
* route tables
* internet gatewars
* gateway endpoints
* egress-only internet gateeways (EO-IGWs)
### Default Route/ Catch-All-Route
0.0.0.0/0
represents all possible IP addresses, gives access from anywhere or to the internet without restriction.

### Internet Gateway
allows both inbound and outbound internet traffic. 

It provides a target in ur VPC route table for internet routable traffic.
Performs [[03-Application-Architecture/Network/Networking-Basics/NAT(Network Access Translator)|NAT(Network Access Translator)]] - network access translation for instances that have been assigned IPv4.
NAT is not needed for IPv6 since IPv6 addresses are public. 

#### Egress-Only Internet Gateway(EO-IGW)
specifically for IPv6 when you want to allow outbound traffic to the internet but prevent inbound traffic from the internet. a normal IGW does not restrict inbound traffic. 
### Virtual Private Gateway
connects VPC to private external network
### Route Tables
Used to determine where network traffic is directed. IGW -> Router -> Route Table -> public subnet

you have a destination and a target -> you basically assign an IP address to a target at the router level. 



A subnet can only be associated with one route table at a time. 
### NAT Gateway 
allows private instances (eg. virtual machines) to connect to services outside the VPC.

Gateways are usually a networking service which sit between two different networks.

### NACLs
Stateless virtual firewall at subnet level

Stateless means they have both allow and Deny rules.
VPC creates a Default NACL for you.
it has inbound and outbound rules. 

A subnet can only belong to a single NACL 

there are rule numbers, they are applied by the lower the value of the rule is. as soon as it hits a lower value rule, it doesnt evaluate any higher value rules for that connection
### Security Groups
Stateful virtual firewall at instance level

only have allow rules.

16 security groups per elastic network interface (ENI) default is 5.

ENI is a virtual network card that you can attach to an EC2 instance to provice network connectivity within a VPC.

You can attach and detach ENIs to same or different instances rerouting the same traffic.

they do not filter traffic destined to and from the following:
* AWS DNS
* AWS Dynamic Host Configuration Protocol (DHCP)
* EC2 instance metadata
* ECS task metadata endpoints
* license activation for windows instances
* Amazon Time Sync Service
* Reserved IP addresses used by the default VPC route.
have inbound/outbound rules.

#### Stateless Vs. Stateful Firewalls
Stateless like NACL are not aware of the state of the request. In both directions they'll treat you like a stranger and stop you both ways and do a rule check.


Stateful Firewalls are aware of the state of the requests. -> responses for requests originated outbound are allowed back through bc it remember where the response came from. 

### Public Subnets
### Private Subnets
### VPC Endpoints
If you dont want the services to talk to each ohter over the internet and never leave the AWS environment you can set up a VPC endpoint

3 types:
1. Interface Endpoints
2. Gateway Endpoints
3. Gateway Load Balancer Endpoints

#### AWS PrivateLink 
is what VPC Endpoints uses under the hood. Its basically the same thing. 

You can create Interface Endpoints and Service Endpoints and connect ur VPC to to other SaaS products privately, as if they were running in ur own VPC. 
#### Interface Endpoints
are Elastic Network Interfaces(ENI) with a private IP address. Serves as an entry point for traffic going to a supported device.
#### Gateway Load Balancer Endpoints
Powered via PrivateLink, allows you to distribute traffic to a fleet of network virtual appliances. 

#### Gateway Endpoint
provides reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC.  

![[Obsidian/Excalidraw/Pasted image 20251114112347.png]]

### VPC Peering
### VPC Flow Logs
just logging network traffic coming into the different parts of the VPC, subnets, ENIs etc.

### AWS Virtual Private Network
lets you establish a secure and private tunnel from your network to the AWS Global network.

#### AWS Site-to-Site VPN: 
securely connect on premises network to VPC.

It has the following components:
1. VPN connection - secure connection between the VPC and on-premises equipment
2. VPN tunnel - encrypted connection for your data
3. Customer Gateway (CGW) - provides information to AWS about your customer gateway device
4. customer gateway device - physical device or software applicaiton on your side of the site to site vpn
5. target gateway - generic term for the VPN endpoit on the amazon side of Site to Site
6. Virtual Private Gateway - VGW - VPN endpoint on the amazon side that can be attached to a single VPC
7. Transit Gateway - transit hub that can be used to interconnect multiple VPCs and on-premises networks, and as a VPN endpoint for the amazon side of the site-to-site VPN connection. 
#### AWS Client VPN: 
securely connect users to AWS or on-premises network.

## AWS Resource Access Manager - RAM
allows you to share resources across your AWS accounts

VPCs can be shared with other aws accounts within the same account to centerally manage resources in a single VPC.

You share VPCs by sharing subnets, and you can only share non-default VPCs.

## AWS Direct Connect
service for connecting on-premise to AWS

### Connection Reqs:
1. network is co-located with an existing aws direct connect location
2. working with a Direct connect partner who is a member of AWS Partner network
3. Working with independent service provider

### Network Requirements
1. must use single-mode fiber
2. auto-negotiation for a port must be disabled for a connection with a port speed of more than 1 Gbps
3. 802.1Q VLAN encapsulation must be supported across the connection
4. Must support Border Gateway Protocol and BGP MD5 authentication

### Supports:
* both IPv4 & 6
* ethernet frame size of 1522 or 9023 bytes

### Maintenance:
1. Planned
	1. schedule in advance to improve availability and deliver new features
	2. three notifications are provided 1, 5 and 10 calendars in advance
2. emergency:
	1. Maintenance that isn't planned in advance
	2. impacted customers are notified 60 mins prior to maintenance 

### Pricing:
1. capacity
	1. maximum rate that data can be transferred
	2. larger the prot size the greater the cost
2. port hours
	1. for amount of time a DC port is provisioned for use, regardless of data transfer.
	2. two connection types:
		1. dedicated - physical connection between network port and an AWS network port. 
			1. billed per hour via AWS
		2. Hosted - logical connections between aws partner and aws network port. 
			1. billing subject to the DIrect Connect Deliver Partner
3. Data Transfer Out (DTO)
	1. Charged based on outbound traffic sent through Direct Connect to destinations outside of AWS
	2. Data transfer into the network is free
	3. Data transfer within the same region will not result in a cost


