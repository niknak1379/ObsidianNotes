---

kanban-plugin: board

---

## Archive

**Complete**
- [x] maybe will have to add a normalized price bc some shit apparently has a lot of scammers
- [x] figure out how to add size, eh just putting it in the name is fine
- [x] add support for picking what type of item from ebay? used only, open box etc...
- [x] Maybe also add automated amazon crawling?
- [x] maybe remove shutdown?
- [x] bug: cant manually shut down rn bc docker compose restarts it
- [x] if it gets unmanagable and unreadable maybe do 2 get alls, one detailed with everything, and one only with current price, no sources etc
- [x] im gonna kill myself ebay has an API and I didnt need to scrape it?
- [x] or maybe change the item architecture to support variants, item categories?
	current price tree?
- [x] remove message test on deployed pi, it returns a 64 bit
- [x] if DB unexpectedly exits, ping the discord, with the err msg before going down
- [x] add auto complete for uri filed
	1. [x] will have to unrwap the whole thing, and will have make a new aggreagation pipeline for it
	2. [ ] deprecated, you cant search unwound documents, have to just do a normal search and return the results of that
- [x] highkey the update functions are very messy, i shouldve probably made a chart
- [x] next comes stocks and all that but have to watch the quant stuff first ahahhahha me likey or just make a separate bot so i dont have to redeploy this thank you very much
- [x] maybe add price changes in general? or have a toggle that enables it? for sensetive items that i want
- [x] add cents to price value?
	1. different websites handle it differently, 
		1. new egg has cents in a whole new element
		2. amazon does too
	2. have two html queries? one for cent one for dollar amount
	3. would have to change the graph and database to handle decimals
	4. kind of a pain in the ass highkey
- [x] Go markdown generator for table view
- [ ] web crawler with arguments, 
	gets link, and the value of the HTML box it wants to track, if it doesnt find the thing it sends an error through the discord bot, web crawler database operations for price tracking and aggregatino, second index etc
- [x] maybe change so that the uri list has ids for quality of life


## Done

**Complete**
- [x] marketplace price logic bug?
- [x] add suppress noti flag?
- [x] fix facebook market place location
- [x] add read to ebay regex
- [x] add stdev filtering into the second aggregate pipeline and add **Read**
- [x] add compare method? render chart and send picture like graph function -> compare aggregates
- [x] compare graphs has a weird bug that some dates are at the start even though they are chronologically at the end
- [x] fixed color code error
- [x] error messages get mixed up, and it sends chart? for somer eadon
- [x] OLAP for used items
- [x] testing
- [x] refractor database into aggregate file
- [x] can write a compare time frames aggregate function
- [x] 1. Info I want to add to the Item view
		1. [ ] 7 day aggregate
- [x] Used Item Stats:
	1. [ ] Information I want to extract in the pipeline:
		1. [ ] how long historical listings lasted
		2. [ ] their price at time they sell
		3. [ ] filter abnormal ones
		4. [ ] stdev
- [x] for the get if everything returns but webhook errs out, return a normal message afterwards
- [x] Add aggregate used data to graphs price history
	1. might have to redo the scheduler get price logic but it would def be worth it
- [x] maybe add kids and junior as exclude words
- [x] test
- [x] depop support
- [x] Add item types
	1. [x] on add
	2. [x] have a check in second hand, if its clothes add depop crawler to the mix
	3. [x] depop crawler
- [x] refractor ebayHandler
- [x] Bot Management:
	1. [x] setup:
		1. [x] take location and market place miles as input
		2. [x] update DB
		3. [x] load miles and location from DB on init
	2. [x] Channel Delete:
		1. [x] delete channel table on delete from DB
- [x] list empty
- [x] sort alphabetically in autocorrect return
- [x] maybe also add a message length calculator and the field thing to make the spread more reliable
- [x] add price sort when putting the stuff in
- [x] pass in the last days title to not needlessly get the link of already existing items
	
	IE move dedup logic into the ebay submodule
- [x] i dont need a dedupe crawl its already there ahahahah
- [x] figure out meshify 3 new egg and chromedp thing, it has an add into cart to see price which is very stupid
- [x] it shouldve filtered the bid on asrock check if its not gone will have to look at the logs or sth
- [x] bug: check the pricing it turns to zero somewhere somehow, yup still taking everything as a price change for some reasn
- [x] add date to current lowest in embed
- [x] style price update and new price found using the embed thing?
- [x] 1. [x] calculate size as building embed
	2. [x] if number of fields or max size
	3. [x] split into multiple embeds
	4. [x] return list of embeds
- [x] 30 item list, once list too big
	1. [x] add pagination
	2. [ ] add concise list method
- [x] messed up autocomplete
- [x] add multi channel support for separation of concerns? -> might wanna add cars, other types of tech, people etc
- [x] would also need to add the indexes in the make channel collection section
- [x] theres a 3 index limit per cluster for free atlas, either will have to self host it
- [x] not pushing new channel ids
- [x] Multi Channel Support:
	1. [x] new DB table to keep track of ID and table name
	2. [x] on init load tables into memory
	3. [x] make func for if a channel is new -> create new table in DB
	4. [x] change database functions to take in the name of the channel
		1. [x] load it from the memory bit
	5. [x] Change Scheduler for running the schedule on a table basis -> get all channels first and then then do a schedule for each
- [x] ok channel id is interaction based....
- [x] maybe make it so that it sends the screen shot of the failover to the discord
- [x] check if err propogates properly/ notify discord
- [x] change content for facebook marketplace, to also include formatted time and distance
- [x] add geo api to doppler
- [x] for now just make it work, later on, i will add the distance api stuff
	
	https://www.geoapify.com/route-matrix-api/
- [x] face book market Place:
	1. [x] url generator
	2. [x] price extractor
	3. [x] URL extractor? depends wether it has the listing url by default
- [x] add edit name
- [x] ebay read err propogate
- [x] lol i crawled it so many times back to back it got throttled, lets hope i dont have to run it through aws lmfao
- [x] refractor discord module into hooks, messages, formatting
- [x] add support for ebay used items
- [x] url way too long, maybe look crawl individual pages and see if they havea og:link or sth like that
- [x] regex a bit messy, discord messages with the urls are too long?
- [x] the names cant be shit now since there is regex based on them - one word denominators like 3 and x are very important with spaces around them, this kind of just rawdoggs them
- [x] Ebay Reqs:
	Discord:
	1. [x] discord new listing alert
	2. [x] discord listing price update
	3. [x] Add embed for ebay listings
- [x] Ebay Reqs:
	Scheduler:
	1. [x] get old and new listings
	2. [x] compare listings
	3. [x] if listing gone do nothing since whole array is updated
	4. [x] if new listing found not in the previous crawl ping db
- [x] Ebay Reqs:
	DB:
	1. [x] Get EbayListings Method
	2. [x] Save EbayListingsMethod
	3. [x] Get listings on add
- [x] Ebay Requirements:
	crawler
	1. [x] returns listings
		1. [x] regex verification, 
		2. [x] llm verification
- [x] test amazon image
- [x] handle amazon link for automatic embeds?
- [x] change remove message?
- [x] test message embed and query selector
- [x] add picture embed for all items
	1. [x] get open graph(og) img url of the first link inserted
	2. [x] save in DB
	3. [x] return as a field for embed
- [x] database logic too big, split autocomplete stuff into its own file
- [x] make the edit function more readable
- [x] take channel id out of hard code
- [x] nvm autocomplete for remove cant even be done, it doesnt support urls more than 100 chars
- [x] delete the autocomplete index for the uri
- [x] add one for query selector too? this one can honestly just be a hardcoded json? add a map for autocomplete with amazon, newegg, microcenter name, value pairs
- [x] add autocomplete for all name fields
- [x] mongodb access is based on ip
- [x] doesnt support empty fuzzy search, handle it and return all instead?
- [x] add auto complete
	1. [x] auto complete command pallete
	2. [x] mongodb text search index plus fuzzy finder
- [x] Chart: make background white, legends is unreadable in discord, plus legend padding and break new line, when url too long it pushes legend icons out of bounds
	1. [x] title too big
	2. [x] title not centered
	3. [x] legend padding overflowing
	4. [ ] overlapping series look if any options to make it readable?
- [x] bug: graph error handling: if it cant find it it will send the previous graph generated
- [x] regex for graph query
- [x] bug: scheulded crawling isnt happening for some reason
- [x] commands are too long, shorten names?
- [x] move cancel context channel logic to main
- [x] if it thinks its zero, change it or skip update price?
- [x] bug: its logging each crawl like 5 times
- [x] maybe have it have more frequency of gathering the prices (twice daily) but also schedule a weekly price compression that also runs everytime i redeploy
- [x] maybe for name matching add fuzy or lower case stuff?
- [x] remove the hiiii price tracker command somehow
- [x] add other cases i wanna keep track of
- [x] amazon links behave weird they arent fully rendered on send
- [x] when adding trackers or removing them it returns the old version of the document
- [x] formatting bug
- [x] padding is kind of ugly maybe have a total length and a helper function that pads the left and right automatically
- [x] formatting with dollar sign front end and rounding up?
- [x] it thinks current lowest price is 0
- [x] current price, historical lowest price
- [x] a lot of them have the dollar sign at the front, so maybe filter for that in the crawler .string function so i dont have to do much, microcenter and best buy will have been supported by this
- [x] also update current lowest price on price validation
- [x] methods that have to call the crawl to validate the price will take longer make it send an ack first and then edit like the chart was doing
- [x] Right now add price tracking info does return the price of the newly added page, but the Item page from mongo, should i change it to add that?
	its fine for add, but i would have to change edit tracker to also return a price object
- [x] 1. [x] add current lowest price in the document, update it in the crawler by setting to max int in the tracking array
	2. [x] add it as a response back for get item,
- [x] check error handling? missing fields in insert and edit, 
	1. [x] valid uri check for uri field
	2. [x] look if go has a native uri type
	3. [x] if a new uri added make sure that the crawler can access it
		1. [x] return current price as first lowest price when adding
		2. [x] circuilar dependancies might have to relearn interfaces
- [x] Embeds for all methods that return items?
- [x] bug: headless docker version doesnt work for some reason
- [x] use embeds to format get all fields
	maybe also for get single item field? if it looks good
- [x] uncomment crawler when done debugging
- [x] charts doesnt work with the binary version on pi?
- [x] github actions for pi deployment
- [x] Price Chart
- [x] Bot:
	1. [x] get price graph for the last n months
	2. [x] acknowledgement of request
	3. [x] send the generated chart after its done
	4. [x] it has to read the image from io and then send it and delete it
- [x] graphing module
	1. [x] gracefull shutdown
	2. [x] figure out the axis if it needs an array or objects is fine?
- [x] update lowest price might not be working
- [x] DB:
	1. [x] get full price history for the last n months
- [x] put the context in main and let all the subroutitines inherit it from there
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
- [x] alright i need there to be data so that i can do a pipeline on them
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

- [ ] logs with graphana and loki
- [ ] Setup Pomtrail
- [ ] Setup loki
- [ ] Setup grafana prometheus
- [ ] setup query logs command


## Planned

- [ ] 1. [ ] buy second pi, 4gb 60$ new
		1. [ ] wait for used
	2. [x] buy switch with POE
	3. [x] POE Cables
	4. [ ] SSD? Not rn
	5. [ ] move database inhouse?
- [ ] make a good deal algo?
- [ ] i think were done for now
- [ ] handler to reverse engineer market place tags if brittle
- [ ] test branch
- [ ] Added to new Server -> send init message
- [ ] add aggregate tables into chart tables and return as a picture instead of just an embed for compare




%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false]}
```
%%