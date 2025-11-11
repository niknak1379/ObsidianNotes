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



### Internet Gateway
### Virtual Private Gateway
connects VPC to private external network
### Route Tables
### NAT Gateway 
allows private instances (eg. virtual machines) to connect to services outside the VPC.
### NACLs
Stateless virtual firewall at subnet level
### Security Groups
Stateful virtual firewall at instance level
### Public Subnets
### Private Subnets
### VPC Endpoints
### VPC Peering