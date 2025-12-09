---
creation date: 2025-12-09 12:12
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Elastic Load Balancer

<< ---------------------------------------------------------------- >>

## ELB - Elastic Load Balancer
has multiple types:
1. Application Load Balancer (ALB):
	1. [[03-Application-Architecture/Network/Networking-Basics/Protocols/00-Protocol Models0/TCP,IP-Model&Layers/07-Application Layer|OSI layer 7]] load balancer 
	2. routes based on HTTP information and can have WAF(web application firewall)
	3. attaches to target groups and not directly to instances
	4. features:
		1. ALB is designed to balance HTTP and HTTPS traffic
		2. has request routing
		3. supports [[web sockets]] and http/2 for bidirectionla and realtime communication applications
		4. can only be accessed via host name, if you need a static IP, forward an NLB to ALB
		5. WAF
		6. AWS Certificate Manager (ACM) can be used for SSL/TLS for https
		7. Global accelrator for global availability
		8. CloudFront for caching
		9. Amazon Cognito to authenticate users via incoming HTTP requests
	5. Use Cases:
		1. Microservices and Containarized Applications
		2. E-commerce and retail websites
		3. Corporate Websites and Web Applications
		4. SaaS Applications
2. Network Load Balancer (NLB)
	1. [[03-Application-Architecture/Network/Networking-Basics/Protocols/00-Protocol Models0/TCP,IP-Model&Layers/04-Transport Layer|04-Transport Layer]] and [[03-Application-Architecture/Network/Networking-Basics/Protocols/00-Protocol Models0/TCP,IP-Model&Layers/03-Network Layer|03-Network Layer]] load balancer TCP/UDP balancer
	2. for large throughput low-level traffic
	3. Features:
		1. Global Accelarator
		2. Preserves Client Source IP
			1. for when a static IP address is needed for a load balancer
	4. use Cases:
		1. high performance computing and big data applications
		2. real-time and multiplayer gaming platforms
		3. financial trading platfomrs
		4. IOT and Smart Device Ecosystems
		5. Telecommunications
3. Gateway Load Balancer (GWLB)
	1. routes traffic to virtual appliances before traffic reaches its destination
	2. useful as a security layer
	3. [[03-Application-Architecture/Network/AWS-Basics/Services/03-Networking/VPC#Gateway Load Balancer Endpoints|VPC Gateway Load Balancer Endpoints]]
4. Class Load Balancer (CLB)
	1. legacy, directly connects to instances
	2. Features:
		1. can balance HTTP, HTTPS, TCP but not at the same time
		2. can use layer 7 or layer 4 for TCP