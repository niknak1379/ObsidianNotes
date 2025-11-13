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
### Virtual Private Gateway
connects VPC to private external network
### Route Tables
### NAT Gateway 
allows private instances (eg. virtual machines) to connect to services outside the VPC.
### NACLs
Stateless virtual firewall at subnet level

Stateless means they have both allow and Deny rules.
VPC creates a Default NACL for you.
it has inbound and outbound rules. 

A subnet can only belong to a single NACL
### Security Groups
Stateful virtual firewall at instance level

only have allow rules. 
### Public Subnets
### Private Subnets
### VPC Endpoints
### VPC Peerin

## AWS Resource Access Manager - RAM
allows you to share resources across your AWS accounts

VPCs can be shared with other aws accounts within the same account to centerally manage resources in a single VPC.

You share VPCs by sharing subnets, and you can only share non-default VPCs.

