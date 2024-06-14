[[Websockets]] vs [[REST API]]

[[REST API]]: 
	message app model:
		one user sends a [[POST]] message to the server with the user-id and the message in the body, and the server stores it in its database
	[[Short Pulling]]: make an initial [[GET]] message at the initialization to the server asking, for new messages, and then set a timer that periodically sends that message to update.
	**Problems**: if you have too many users and/or set the timer too low to update frequently causes lots of stress on the server and the database since u have to query it every time.
	[[Long Pulling]]: instead of calling repeatedly, the server will hold on to the request, it will delay responding and only respond when a new message is received. 


[[Websockets]]: 
	on load all users establish a connection to the server, saying they are ready to recieve data. 
		Basically server is able to broadcast the message out to the caller whenever it receives it without the user having to make a [[GET]] request.
		This is called[[Full Duplex/Bidirectional Communication]]: server can initiate setting requests

