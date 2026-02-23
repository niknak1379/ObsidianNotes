---

kanban-plugin: board

---

## Archive

**Complete**
- [x] govcr for integration tests
- [x] at this point this is moving towards a full refractor of the crawler modules
- [x] add second hand pictures to the listing url?
- [x] 1.maybe have a last n failures and do that
- [x] channel length still out of ssync
- [x] add request intercept blocking?
- [x] for listings found, change the url to the items new url?
- [x] add firsttime database setup?
- [x] maybe also move normal aggregate to code blocks and see how it looks?
- [x] aggregate report changes too much send an alert
- [x] test branch
- [x] special syntax for either or ?
- [x] turn first chromedp falover into warn
- [x] you have to make hte custom ack to interaction respond not this ------ still says not respond, investigete later
- [x] raspberrypi os is pissing me off, switch it into an arch fork or sth
- [x] i changed the ebay price to the lowest every recorded price, so theres gonna be a lot less ebay listings now
- [x] setup query logs command
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
- [x] there is also a case were there is only day
- [x] add testing for bid processing?
	1. mocking as a concept
- [x] add success counters for each proxy, if it hits a certain limit auto rotate it
- [x] maybe add a proxy setup function or put the proxy string into the init functions and move everything there
- [x] the error function for incident recording is pure slop fix it
- [x] add TLS fingerprint rotation for base http requests
- [x] refractor defaultCrawler to also use the Ebay method, add curl as a last fallback?
- [x] use wget then i guess fuck
- [x] make a regex struct with all the different inputs this shit is fucking ugly
- [x] also make record attempt a function since theres a lot of duplicate code there in between all the different crawlers
- [x] refractor ebay colly logic to intake html file from chromeDP or colly?
	
	make chromeDP and colly Get HTML functions, have a different parser function that intakes the HTML
- [x] do a walkthrough teacher /tutor skill for opencode
- [x] refractor ebay bid processing into one function after testing is added
- [x] there is a case in bid where its min by itself6 bids · Time left5m left (Today 06:27 PM)
- [x] auto complete when no results are there looks kindn of jank, return sth that has 0 value
- [x] add proxy rotation to depop
- [x] add multi proxy support to crawler and failure and proxy restartere + proxy rsetarter unable to
	1. initialize each proxy
	2. round robin to decide which one to use + failover on remaining
- [x] take proxy management module into its own thing
- [x] should I just pass in a proxy object instead of a proxy bool with the available proxies, and then just take them out if they get to an error, will have to add which specific proxy it is that is causing the incidents and restart that specific one
- [x] refractor crawler module to be more readable, will do this after i figure out the proxy stuff
- [x] split the types and put the proxy stuff and the incident stuff into their own modules?
- [x] noise control feature, basically when sth is down, only escalate it when its keeps being down and not a one off
- [x] Formatted aggregat tables for comparison instead of returning separately?
- [x] Added to new Server -> send init message
- [x] error notification rate limit per crawler type and url
- [x] add error aggregators to see what domains are failing the most, at what level
	1. [x] sanitize url in
	2. [x] chart
	3. [x] table in code block?
	4. [x] figure out which ones usefull and which ones are no t
- [x] 1. Option 3: Proxy “switch” endpoint
	- Glutun expose a control endpoint to switch servers
	- trigger address change when too many requests are failing
- [x] add error incident recording
- [x] double quote is being weird with how titlecorrectness do a fix
	1. okay inch sign is different than double quotes
	2. i still have to add double quote support so...
- [x] comment and document code
- [x] memory leak
		https://medium.com/@bobzsj87/demist-the-memory-ghost-d6b7cf45dd2a
	
	not a real issue apparently, docker stats for memory are weird
- [x] add remove alternative names at some point?,
- [x] i did do the regex thing bc i wanted to use the boundries, if it causes any problems think of sth, 
	
	
	ok i was using it bc was including loweer tier products like non xt versions
- [x] and timer values to get item information
- [x] split actioon into two jobs
- [x] complete readme file
	1. [x] add function descriptions
	2. [x] setup guide
	3. [x] lisence
- [x] add ebay failover proxy into the loop
- [x] fix failover logs
- [x] Cadvisor auto restart
- [x] timer is off by 8 hours
- [x] take out extra slog.info for ebay stuff
- [x] okay time is messed up, add bids to ret arr of logs
- [x] 1. [ ] add and setup cadvisor
	2. [ ] do image on and off for a day see the difference
- [x] add bid support
	1. [ ] only keep track and notify when the time left is less than a day
	2. [ ] and price is less than average?
	3. [ ] DB Change
	4. [ ] response module
	5. [ ] formatter module
	6. [ ] contains today i can just do that
- [x] change proxyfailur defaultcrawler error to warn
- [x] have a setprojection function for optimizing what fields to return for each specific function?
- [x] channel summary for custom lengths
- [x] maybe i should add a min price for ebay 3/4 of the new price?
- [x] if theres too much noise in adding the new option to the ebay query remove it
- [x] add bracket and waterblock to the regex list tmrw
- [x] bug newlly added stuff is gonna have duplicates
- [x] make aggregate tables for all items in the channel https://github.com/jedib0t/go-pretty/tree/v6.7.8/table
- [x] add additional name info to get query
- [x] make it so that it does the ebay stuff for the queries separately?
- [x] refractor all the random maps into an item
- [x] make a good deal Algo?
		1. [ ] Color Code new listings based on their price relative to the aggregate reports
- [x] channel length is out of sync, check for negative length in update channel length
- [x] add multi search word functioonality to items - basically the sub item thing i wanted to do
	1. [ ] discord command for add
	2. [ ] discord command for remove
	3. [ ] DB command for Add
	4. [ ] DB command for Remove
	5. [ ] pass in to secondhand handler
	6. [ ] Pass in to titleCorrectness Check
- [x] change amazon html tag
- [x] will have to add support for channel property change, just override the object and change its properties?
- [x] channel will be werid, i think it might double up or sth check tmrw
- [x] bug too pointers weird with update price alert
- [x] get details function, triggers the errorcrawl alert and sends the requested files?
	3 options, general, ebay, facebook
- [x] the requests are kind of close to each other, set it to like randome 10 min or sth
- [x] add lowest price change to the slog of scheduler
- [x] add err to chromedp
- [x] edit timer still messy
- [x] the second hand price wont take effect unless i also add it as a condition for the status change
- [x] put a manual set price -> removes all trackers, setsup the last available price with the new requested price
- [x] make facebook marketplace optional
- [x] bug: listing history when array is null for aggregation pipeline, also recheck the update price history logic
- [x] also add price increase notifications for normal trackers
- [x] hero picture fall back for amazon?
- [x] refractor stealth actions to be more readable
- [x] add get channel info
- [x] add html to facebook and ebay failovers
- [x] also add proxy pictures for default and facebook and ebay?
- [x] bug: edit_tracker crashed last time, check if its still not working, not working because of values, will have to switch to indexes?
- [x] add tracking list change support
- [x] change handle ebay listing name
- [x] found best buy change all the trackers
- [x] might have to change facebook error
- [x] bug: amazon it used to work but now it doesnt
- [x] on next deployment, update channel map when updating setup
- [x] change the name of the setup function to be both update and create? or make into two function
- [x] add html return to chromedp
- [x] add proxy to chromedp
- [x] Screeshot for errors is still not reliable
- [x] change the avg price and aggregate price of when sold one, maybe its fine actually idk
- [x] recheck duration logic
- [x] add does accept offers?
	1. [x] normal ebay crawl
	2. [x] chromedp crawl
	3. [x] response
	4. [x] types.ebaylisting
- [x] new listing old format
- [x] ebay proxy failover options
- [x] make it so that price change only fires if the difference is more than 5 bucks?
- [x] invalid timer check
- [x] avg price when sold, change it so that it doesnt include items that are still available
- [x] add proton vpn for IP rotation
	https://hub.docker.com/r/genericmale/protonvpn
	https://hub.docker.com/r/qmcgaw/gluetun
- [x] Total price change field
- [x] fix autocomplete for timer in add
- [x] formatter for second hand, make sure it doesnt give duplicate
- [x] Best buy query is faulty
- [x] add number of price reductions and price increases to second hand listing information? pretty useful for leverage determination to make offers
- [x] Maybe have a dummy message that just sends the acknowledged message as an embed?
- [x] updated listing logic testing, add 25 limit to add, per channel
	update for add
	update for remove
- [x] Bug: scheduler logic doesnt update when suppress changes
- [x] change logic for ebay listings?
	1. [x] all listings for the item in the same date
	2. [x] put them in a map
	3. [x] for loop, if the url is in the map, delete from the slice
	4. [x] update
- [x] ebay failover
- [x] maybe also add tax to the prices?
- [x] add custom timer intervals
- [x] Refractor scheduler to update scheduling functions everyhour and delete or add go routines that are out of date
- [x] add best buy support to the image grabber
- [x] converet logs to slog
	1. [ ] add logging module
- [x] logs with graphana and loki
- [x] Setup grafana prometheus
- [x] Setup loki
- [x] Setup alloy
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

- [ ] add mutex protection
- [ ] add event bus for item change
	1. might have to add UUIDs for each item to keep track of name change and such


## Planned

- [ ] i wanted the html files to be there so that when best buy would do sth weird i could immediately see the html it was returning so that i could check it, i stopped saving them bc it was running out of memory or sth like that i think
- [ ] bug: best buy also sometimes behaves very weird
- [ ] do get logs files for the last 5 incidents
- [ ] time in bids is a bit weird
- [ ] make anti bot, cloudflare measures with llm stuff
- [ ] 1. [x] self hosted github runner
	2. [ ] self hosted mongodb database setup, no longer uses atlas search vectors so this shouldnt be an issue
		1. [ ] apparently you can run atlas instances online and i didnt have to migrate off of mongo search but it is what it is
	3. [ ] async replication with the atlas shard?
- [ ] add readme pictures
- [ ] maybe do a third backup for amazon used?
- [ ] https://brightdata.com/pricing/proxy-network/residential-proxies
	its 4$ per gb, residential IP worth it?
- [ ] K8 for centralization of logs deployment
- [ ] i think were done for now
- [ ] it is approaching a MB now which isnt much at all
- [ ] handler to reverse engineer market place tags if brittle
- [ ] move grafana stack to mac mini instead of pi


***

## Archive

- [ ] bug: autocorrect for html for editadd tracker

%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false]}
```
%%