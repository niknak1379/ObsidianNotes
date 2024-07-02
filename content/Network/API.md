## Types:
1. Service APIs: anything that interacts with a system of record
2. Interaction APIs: basically anything that isn't a service API
## [[API Gateway]]:
[IBM video explaining it](https://www.youtube.com/watch?v=hWRRdICvMNs&list=PLOspHqNVtKAAAq9pHWlEiRUVcYMCcu4X0&index=1)
Basically the client makes a request and the Gateway acting as a [[Monolith]] redirects the API to the API of the appropriate [[Microservice - Design Patterns]].
	1. protocol translations
		you can change the protocol for each [[Microservice - Design Patterns]](https from client to http to microservices)
	2. [[Security]]
	3. common functionality (put common logic in the monolith)

## API management:
1. Gateway: oAuth, openID, JWT
2. Developer Portal: DOCs for all the APIs of the company etc..
3. lifecycle manager: make sure that different APIs in the overall API stack of the company are all healthy and working 
4. reporting and analytics: synthetic monitoring for response time and availablity, automated
Pros:
1. Flexibility in Architecture:
2. Security: you can implement SLA with rate limiting
3. Analytics: have the data on what APIs ur users are using the most




