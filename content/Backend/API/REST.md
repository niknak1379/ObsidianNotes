#API #Network #Backend 
# Representational State Transfer:
1. simple and standardized approach to communication.
2. Scalable and stateless
3. high performance due to support for caching
## Parts:
**operation, headers, endpoint, body** 
**Crud(operations):**
	1.  create: post
	2. read: get
	3. update: put
	4. delete: delete


### OpenApi Specification:
1. defines how to describe a REST api interface
		typically a YAML or JSON file that describes what an API can do. 
			describe resources, properties, data types, end points and authentication or authorization
2. guidance(makes it easier to use the API)
3. Extend w/tooling
	1. API validator(a tool that takes in a openAPI specification to see if it passes a certain number of checks)
	2. API Doc generator
	3. SDK generator

## API design best practices
https://www.youtube.com/watch?v=7nm1pYuKAhY

features of a good design:
1. easy to use and work with
2. hard to misuse
3. complete and concise

### Naming
always use nouns instead of verbs, so 'employees' instead of 'createEmployees' for endpoint addresses. the address for the api should reflect logical relations like customer/order.

But make sure it doesn't resemble the data structure of the database, so as to not give too much unintended information to the public. 

use pluralized nouns for resources

and version them correctly, so basically don't change names in the api randomly so that people who are using it, don't have broken resources. 

You can also use **HATEOAS** for the naming of the URL paths. 

### Filtering
just use the normal API but pass in url parameters for things that we want to filter.
you should also only return a reasonable amount of objects from the [[Database]] like 50, so that you don't overwhelm the DB. u can use start and limit parameters for this and pass them in the GET url.

### Async Operations
sometimes a POST request might take a while to process on the backend, so it should be done async, you **return 202 'Accepted' status code**. and then you expose an endpoint for the client so that it is able to pull the status code(completion of the original request). you include the url of the status endpoint in the location header of the 202 response. 

the response pulling endpoint can include **'estimated time to completion, or links to canel the operation'** so that the process can later on pull the results again, in the header? not sure if i have to pull it manually or the header processing does that for you #todo. 

### Partial Responses
if were returning big binary files, like images or videos, we have to include some additional things. 
you have to implement **accept-ranges** header option, that allows partial requests for specific byte ranges
You should also implement http **HEAD** requests (returns type and length in the header with an empty body) so that the client can decide wether to use a partial get request.


### Error Handling
return proper error response codes, with messages so that people know whats going on, but the messages should not have anything about the internal mechanisms. 

### [[Security]]

should be secure and stuff? SSL/TLS/ACLs, rate limiting, throtling, ip blacklisting
