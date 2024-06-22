[[REST]]: 
	message app model:
		one user sends a [[POST]] message to the server with the user-id and the message in the body, and the server stores it in its database
	[[Short Pulling]]: make an initial [[GET]] message at the initialization to the server asking, for new messages, and then set a timer that periodically sends that message to update.
	**Problems**: if you have too many users and/or set the timer too low to update frequently causes lots of stress on the server and the database since u have to query it every time.
	[[Long Pulling]]: instead of calling repeatedly, the server will hold on to the request, it will delay responding and only respond when a new message is received. 

[[Web-sockets]]: 
	on load all users establish a connection to the server, saying they are ready to receive data. 
		Basically server is able to broadcast the message out to the caller whenever it receives it without the user having to make a [[GET]] request.
		This is called [[Full Duplex/Bidirectional Communication]]: server can initiate setting requests

[[graphQL]]:
	parts:
		1. Schema: blueprint for all the data that the client can query for
		2. query: request for data that follows the schema structure
		3. Resolver: called to retrieve the data in the query, can request data from multiple sources
		4. Mutations: Modifying data on the service

[[gRPC]]: 
	[video link for this](https://www.youtube.com/watch?v=hVrwuMnCtok)
	mostly used for communication between [[Microservice|micro-services]]. 
	convenient because handles the http protocols for u?
	**Protocol Buffers**: basically type checks and other types of checks for the message before it actually gets delivered.
	[[REST]] uses JSON and since theyre key value pairs there is no compression of the payload, but gRPC messages are able to be sent as binaries since you can define ur own protocols, so the payloads can be much smaller and compressed.



