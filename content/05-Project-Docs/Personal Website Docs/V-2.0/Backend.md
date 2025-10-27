## Caching API
Have an API that checks if the last data is valid and just serves the cached. Apparently **Next.js** has a native one but I can just build it my-self to know how it works I guess. Probably gonna do it with redis server side for the querying stuff
**IF its different it'll update it for the next person**
[[Caching]]

## accessing other APIs
maybe look up what flask is

unrelated maybe
https://www.youtube.com/watch?v=utJ66ZevCU4 -- this one is if you have multiple microservices on different EC2 instances. Dont really need it here i guess

## Docker containers
-  for the database
	1. takes a backup before every update or insert
	2. resets to the latest backup in case there is an error
- one for the backend server itself
	1. do i need one for the email one? not unless Im implementing one to email me if one of them crashes
		1. which i do no know how i would do in docker(dont know how im supposed to read statuses and what not)
	2. restarts the container if there is a crash
* Not sure where the 0Auth stuff go yet, probably have a top level [[03-Application-Architecture/Backend/Design-Patterns/Microservices/Microservice|Microservice]] like architecture with the monolith doing the auth stuff and if it passes sending it to the DB manager server
## security
encryption for the user password part somehow.[[Auth0]] 
[[03-Application-Architecture/Backend/Security/Web Authentication Methods|JWTs]] for the login page and the page that edits, deletes and adds new projects to the database.
Have access tokens, refresh tokens, and all the other stuff.

## Elasticsearch
Using [[03-Application-Architecture/Network/AWS-Basics/AWS Setup||AWS]], and elastic search to index all the blog posts and make searching much easier


### sql for updating the db(this is just for me incase i have to reset my warp)
mysql -u root -ppassword -e "DROP DATABASE Projects"
mysql -u root -ppassword -e "CREATE DATABASE Projects"
mysql -u root -ppassword Projects < Schema.sql