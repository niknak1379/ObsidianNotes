---
creation date: 2025-12-09 12:13
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# API Gateway

<< ---------------------------------------------------------------- >>

[[03-Application-Architecture/Backend/API/API Gateway|API Gateway]]: program that sits between a single entry point and multiple backends.
Allows for throttling, logging, routing logic or formatting of the request and response

## Amazon API Gateway
is a solution for creating secure APIs in your cloud environment at any scale. 

Supports three types of APIs
1. Rest API(API Gateway V1)
	1. complete control over req, res
	2. most feature rich
	3. higher costs
	4. both private and public api options
	5. you can import Open API 3 files when creating your API
2. HTTP API(API Gateway V2)
	1. low latency
	2. simpler feature set
	3. low costs
	4. only public APIs
3. WebSockets API
	1. persistent connections for real-time use cases such as chat applications or dashboards

### REST vs HTTP API Gateways
![[Obsidian/Excalidraw/Pasted image 20251202122711.png]]
![[Obsidian/Excalidraw/Pasted image 20251202122811.png]]

### API Gateway REST Components
1. API:
	1. Resources (routes)
		1. Methods (GET, POST)
		2. Integration
			1. lambda
			2. http
			3. aws servcies
			4. vpc link
			5. etc

### API Gateway HTTP Components
1. API:
	1. Route
		1. Respresnt an endpoint (basically both the resource and the method together(post /hello))
		2. integrations
			1. more limited than REST
			2. VPC link
		3. Stages
			1. versions of API

