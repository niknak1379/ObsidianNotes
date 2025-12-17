---

kanban-plugin: board

---

## Archive

**Complete**
- [ ] web crawler with arguments, 
	gets link, and the value of the HTML box it wants to track, if it doesnt find the thing it sends an error through the discord bot, web crawler database operations for price tracking and aggregatino, second index etc
- [x] maybe change so that the uri list has ids for quality of life


## Done

**Complete**
- [x] Test everything lmfao
- [x] write logs for all functions
- [x] Crawler:
	1.  [x] crawl method with link and html element
		1. [x] update DB if found
		2. [x] if not update with error through discord
	2. [x] call get all projects
		1. [x] iterate through projects and call init project tracking, takes project name and tracker list, do this on once a day timeout
		2. [x] init project goes through and does random one hour timeouts to sparse out the requests and crawls the individual lists
		3. [x] no lowest price default value handle empty error
- [ ] Web Crawler Implementation:
	Database:
	1. [x] get tracking list method for a project
	2. [x] add new price to the DB
	3. [x] if the lowest Price Notify via bot function
- [x] main:
	1. call init crawler
- [ ] it has field called projection for specifying what to return, dont return the date and price for the get stuff
	1. [x] change query for discord bot get queries to not return price history
	2. [x] only return pricer tracking html list for crawler get method
- [x] add price,date object and into the overall object structure
- [x] error handling for missing or non returning values for DB functions, rn it just panics
- [x] set up the nosql database for it to store and query from? does it have to be relational actually? maybe it does, look up mongoDB for more
- [x] basic db functinoality is up
- [x] make the command function structure
- [x] make the command structure
- [x] get the options part of the command working
- [x] get the slash command line to work
- [x] get the client to connect


## IP

- [ ] put the context in main and let all the subroutitines inherit it from there


## Planned

- [ ] over time graphing of the data, by accessing the database, only generated on demand, probably shouldnt be dont throught the command thing since that one takes a while




%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false]}
```
%%