---
creation date: 2025-11-18 11:29
---
#03-Application-Architecture #FrontEnd #HTML #Accessiblity #Untitled

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Amazon's [[03-Application-Architecture/Network/Networking-Basics/Protocols/00-Protocol Models0/TCP,IP-Model&Layers/07-Application Layer|DNS Service]]

<< ---------------------------------------------------------------- >>

You can register and manage domains
Create various record sets on a domain
implement traffic flows
monitor records with healthchecks
resolve VPC's outside of AWS

you can:
1. route incoming internet traffic
2. to web app backed by [[03-Application-Architecture/Network/AWS-Basics/AWS SAA-C03(Solutions Architect Associate)/06-ELB|ALB]]
3. Route traffic to an isntance we use to tweak our AMI
4. to [[03-Application-Architecture/Backend/API/API Gateway|API Gateway]]
5. to CloutFront that serves S3 static website
6. to an EIP - Elastic IP address
## Hosted Zones
Is a container for record sets, scoped to route traffic for a specific domain or subdomain.

Public: how you want to route traffic inbound from the internet

Private: how to route traffic within an amazon [[03-Application-Architecture/Network/AWS-Basics/AWS SAA-C03(Solutions Architect Associate)/03-VPC|VPC]]


## Record Sets

Are a collection of records which determine where to send traffic

Always Changed in batch via the API

the following record types are supported by Route53
* A record type
* AAAA
* CAA
* CNAME
* DS
* MX
* NAPTR
* NS
* PTR
* SOA
* SPF
* SRV
* TXT

3 Actions types:
1. Create
2. Delete
3. UPSERT(update)

It also has its own special **Alias Record** which extends DNS functionality. It will route traffic to specific AWS resources. 

they are smart records where they can detect the change of an IP address and continuously keep that endpoint pointed to the correct resouce

you usually use this when routing traffic to AWS resources

### Traffic Flow
A visual editor that lets you create sophisticated routing configurations for your resources using existing routing types. 

### Routing Policies
1. Simple Routing
	1. default, multiple addresses result in a random selection
2. Weighted Routing
3. Latency-Based Routing
	1. route to lowest latency
4. Failover Routing
	1. if primary endpoint is unhealthy
5. Geolocation Routing
	1. based on users location
6. Geo-proximity Routing
	1. based on location of your resources and users
	2. you can route more or less traffic to a specific resource by specifying a bias value. 
	3. bias value expand oro shrink the size of the geographic region from which traffic is routed to. 
7. Multi-value Answer Routing
	1. respond with up to eight healthy records selected at random
	2. very similar to simple routing but also does health checks and only returns healthy IP addresses. 

### Route 53 Resolver
A DNS server that allows you to resolve DNS queries between your on-premise network and your VPC

Inbound Resolver Endpoints: allow DNS queries to your VPC from your on-premise network or another VPC
Outbound Resolver Endpoints: allow DNS queries from your VPC to your on-premises network or another VPC

### DNSSEC with Route53
Domain Name System Security Extensions are a suite of extension specifications by the itnernet engineering task force(IETF) for securing data exchanged in the DNS in IP netowrks. 

Basically so that DNS resolvers can validate the DNS response came from Route 53 and wasn't tampered with. 


### Route53 Zonal Shift
shifts a load balancer resource away from an impaired availability zone to healthy AZ with a single action. 

* are support on [[03-Application-Architecture/Network/AWS-Basics/AWS SAA-C03(Solutions Architect Associate)/06-ELB|ALBs and NLBs]] with cross-zone load balancing turned off
* isnt supported when you use an ALB as an accelerator endpoint
* you can only do it for a single availability zone and not multiple. 


## CloudFront - Lambda@Edge
![[Obsidian/Excalidraw/Pasted image 20251118125602.png]]

## CloudFront Functions
lightweight edge functions for high-scale, latency sensitive CDN customizations. cheaper, faster and more limited than lambda edge functions. Only supports JS
![[Obsidian/Excalidraw/Pasted image 20251118125955.png]]


