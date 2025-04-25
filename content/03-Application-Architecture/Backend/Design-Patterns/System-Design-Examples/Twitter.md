---
creation date: 2025-04-24 13:15
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Examples

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# twitter

<< ---------------------------------------------------------------- >>
## Requirements
Functional Requirements
1. create account and login
2. create, edit and delete tweets
3. follow other users
4. view a timeline of tweets from following

Non Functional Requirements
1. scale to 100 million users
2. handle a high volume of tweets, likes and retweets(high throughput)
3. highly available(high uptime)
4. security and privacy of user data
5. low latency

## High Level Design
Loadbalancer, API gateway for microservice acrchitecture for different scalability of the services, nosql database for tweets and replies since complex relational operations are not needed, CRUD service for tweets and replies. Search service, timeline service and profile service. Blob storage and CDN for media. 

Separate replies from tweets since viral tweets will have a lot of replies and scalability and latency would be chalanged if they were stored in the same object as the tweet. 

will have to put rate limiters on both the tweet and reply [[03-Application-Architecture/Backend/Design-Patterns/Microservices/Microservice|Microservice]]s to prevent bots from becoming a problem and overwhelming the server. 

Search: 
Need to be fast (simplest could be to just iterate through our document DB)
Instead have a separate text based index with elastic search, using reverse indexes on tweet content, username, and hashtags
CDC(changed data capture) after updating the tweet content nosql database its going to hit the elastisearch database to be indexed. 

Timeline:
No recommendation service here just friends and followers( #todo on the recommendation service design)

**Fanout-on-Read**: request all the accounts that they follow, get all their tweets, sort by time and return. => very slow and expensive (fails the low latency functional requirements) 

Instead use an async => update the timeline everytime a friends makes a tweet =>

**Fanout-on-Write**: every time a friend makes a write operation, update a queue for the user. 

Each time a user makes a tweet, the server grabs the list of their followers. 
Each user has a Timeline cache, and adds the written tweet to that persons timeline cache. 

This is fine for normal users but for users with a lot of followers(elon) that would mean multile millions of write operations to the caches for each follower which would overwhelm the system. => {
	Hybrid Approach
	These users tweets will only be requested upon hitting the timeline endpoint, and will be integrated into the cache. 
}

Profile Service:
can make good use of a SQL based DB, since we do need relational databases for users tweets, etc...

For the Follower DB we use a Graph DB since as it grows this will be very useful for recommendation systems, follower suggestions etc... 

Auth Service:
Separate service that only talks to the profile service.  

## Deep Dives
### Security:
main concerns:
1. [[03-Application-Architecture/Backend/Security/Authentication & Authorization|Authentication & Authorization]]
	1. make sure every user has the correct permission and roles to perform the actions they are trying to do, this is handled by the auth service. 
2. Encryption
	1. all user data should be both encrypted in transit(https) and in DBs. 
3. Rate Limiting
	1. IP Rate limiting in the API gateway
4. Input Validation on Client
### Monitoring:
1. System Health Checks:
	1. if any component goes down we need to know this immediately
	2. you can use Grafana, and Prometheus to have a visual dashboard
2. Logging:
	1. aids in debugging and tracking secuirty threats
	2. ELKstack: elastic search log stash and kabana
3. Alerts:
	1. alert manager and pager duty integrated with Prometheus
### Testing:
1. Load Testing:
2. Automated Testing:
	1. unit and integration tests
3. Backup and Recovery
	1. regular backups are non-negotiable, recovery is a must
![[Obsidian/Excalidraw/Pasted image 20250425125736.png]]
