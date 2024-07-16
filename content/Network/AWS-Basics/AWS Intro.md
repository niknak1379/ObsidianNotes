---
creation date: 2024-07-16 12:16
modification date: Tuesday 16th July 2024 12:16:20
---
#Network #AWS-Basics
<< ---------------------------------------------------------------- >>

# AWS Intro

<< ---------------------------------------------------------------- >>

https://www.youtube.com/watch?v=2doSoMN2xvI

VPC(virtual private cloud) thats used to separate all the instances and isolate the environments.

## CIDR Ranges

10.0.0.0/24: so each digit is 8 bits for the IP address, the **/x** indicates how many bits it can change, so if its 24 only the last 8 bits are allowed to change, if its 16 the last 2 digits can change. 

so 10.0.0.1 to 10.0.0.254 for 24 
10.0.0.1 to 10.0.255.254 for 16
not sure why its not 256 or 1 on the first one but might have to look that up later #todo 


## Subnets

A defined set of network IP addresses that are used to increase the security and efficiency of network communications. 
So you're going to have:
	1. public subnets
		1. that are exposed to the outside
	2. private subnets
		1. that are not exposed to the outside. 

### Availability Zones
basically where the subnets are hosted, so you usually do 2 public 2 private, with each set being in different availability zones, so incase one of them is down, the other one has high availability.

## EC2 Instances
so you launch an EC2 instance on one of the subnets
you have to make a **Key pair** which I dont know what that is yet. 