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