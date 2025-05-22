---
creation date: 2025-05-15 13:31
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Hi

<< ---------------------------------------------------------------- >>

## Load Balancing

When scaling horizontally, we need a component to route requests to each application node or cache node or DB replica Node to make sure that none get overwhelmed

### Routing Policies
1. (Weighted) Round Robin
2. Lowest Response Time
3. Hashing -> [[03-Application-Architecture/Network/Networking-Basics/Protocols/00-Protocol Models/TCP,IP-Model&Layers/07-Application Layer|07-Application Layer]](message content, slower but more flexible) vs [[03-Application-Architecture/Network/Networking-Basics/Protocols/00-Protocol Models/TCP,IP-Model&Layers/03-Network Layer|03-Network Layer]](IP, protocol,) this is most used usually

#### Consistent Hashing
consistent hashing keeps most request routed to the same node even when cluster size changes, unlike hash(request)%

Very good for application servers with a local cache. 

### Fault Tolerance
#### Active-Active(greater througput)

We have 2 active load balancers
everything is still connected to zookeeper.

#### Active-Passive(better caching)
Both are in communication with zookeeper with it taking heartbeats and zookeeper can put the inactive one to be active so that it starts routing requests



## [[03-Application-Architecture/Network/Networking-Basics/Protocols/Transport-Layer-Protocols/TCP(Transmission Control Protocol)|TCP]] vs [[03-Application-Architecture/Network/Networking-Basics/Protocols/Transport-Layer-Protocols/UDP(User Datagram Protocol)|UDP]]

Both are protocols to communicate over an IP network.

UDP:
Simple, fast, checksums to avoid corruption, multicast(one node sends a single packet to multiple nodes)
Cons: unreliable, can become spammy

TCP:
Reliable 2 war 1:1 communication
3 way handshake -> reliable delivery via using sequence number in the handshake and timeouts(in case no ACKs)

Also uses exponential backoff(if u dont get a response u wait 5, 10, ... sec or whatever)

Also has flow and congestion control(TCP specific)
### Flow Control
Recievers have a network buffer for example 10 network messages can be in the buffer. If the packets incoming exceeds this limit we might have to block or drop them. 

So it sends a Ack with the number available in the buffer to the sender so that the sender adjusts how many messages it sends

### Congestion Control
Uses AIMD(additive increase, multiplicative decrease) to avoid overloading the network switch! helps avoid DDOS. 

Basically it has a window of how many in flight messages you can send to the system at once. once it gets a message and it determines that system is fine it slowly opens the window(allows more simultaneous messages to come in)

## Long polling, Websockets, server sent events

### Polling
Every x seconds, request an update from the server
Issue: if we have a lot of clients we will overwhelm the server. 

### Long Polling
an HTTP request that basically the server keeps track of the request if there is no message to respond with and then responds with the message once it is available. So that the client doesnt have to poll every few seconds. 

upon completion need to create another(creating connections is expensive so good if we rarely need data), unidirectional
### Websockets
Persistent, **Bidirectinoal** connection between client and server. 

No overhead of headers/making new connections
If largely inactive too many connections can waster resources. 
have to manually reestablish connection if lost
### Server sent events

Persistent, uni-directional connection that recconnects automatically
Pros: less headers/time spent establishing connections
Cons: potential waster of resources with persistent connection

Is re-establishing connections good or bad?

If ur not careful you can bring down a server: 
### Thundering Herd
basically if the server goes down, all the clients will automatically try to reestablish the connection with the server and if we have a lot of clients this will recrash our server.

How to Fix:

Use Random Jitter the way Raft does in leaderless elections [[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/06-Partitioning#Raft Leader Election|raft]]

So the servers will pick a random number and start back each client at different and random times. 

## Monolith vs. Microservices
[[03-Application-Architecture/Backend/Design-Patterns/General Backend Designs|General Backend Designs]]
### Monolith
one massive piece of code that runs everything. 

Pros: one repo is easier to deploy and keep dependancies in check.
Quicker to get off the ground and into production, no need to worry about resource allocation. 
Cons:
One bug can break everything
Cant scale out certain functinolaity independently. 

### Microservices
Pros: if separate repos, different teams can develop independently
Each service scales independantly

Cons:
more pieces that can fail
lots of work configuring for deployment. 

[[03-Application-Architecture/Backend/DevOps/Docker/Docker|Docker]] to run all the different services. and [[03-Application-Architecture/Backend/DevOps/Kubernetes|Kubernetes]] to manage all the containers. 