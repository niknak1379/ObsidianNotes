---
creation date: 2024-07-15 13:46
modification date: Monday 15th July 2024 13:46:10
---
#Network #DevOps 

<< ---------------------------------------------------------------- >>

# Reverse Proxy

<< ---------------------------------------------------------------- >>

https://www.youtube.com/watch?v=-QcQd3Bkc9o

Could be a [[NGINX]] server in our **Virtual Private Cloud(VPC)**, it takes in the request and then modifies it's header or body and then sends it to one of the servers inside of the VPC.

## Benefits
1. SSL Encryption
	1. so all communications with the client and outside of the VPC have to be done through HTTPS, you can set up communications between servers using HTTP, but NGINX can also handle that part. Not sure why you would do it through NGINX rather than just normal HTTP, if they're all on the same serve?
	2. you can have the ssl certificates and everything here and update them with a [[Cron Jobs|cron job]] if needed. 
2. Buffering
	1. used to prevent a **Slowloris attack**. when the internet speed of the client is slow and the response packet is very big, the response is going to be send in a lot of smaller chunks. NGINX can handle the buffering that is needed in this situation, not sure why its needed, need to look up this more #todo
3. Recovery
	1. if one of the servers inside of the VPC is down, u can define custom 404 pages and things to do if that happens
4. [[Load Balancer|Load Balancing]]
	1. NodeJS already has a cluster module for load balancing, but for enterprise backends, with a lot more requests, NGINX is a lot easier for some reason. 
5. Enterprise Routing
	1. like you can reserve a server for a specific API call and route all of that certain type of request to the designated server
6. Gzip Compression
	1. just zipping css, JS and other files. 
7. Caching Static Content
	1. instead of having a whole ass caching thing with NodeJS you can just use NGINX to cache things.