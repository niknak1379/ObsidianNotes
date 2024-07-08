https://www.youtube.com/watch?v=bP4BeUjNkXc

## Use Cases:
reduces latency and load on the database, and network costs.

## Types of caches by LEVEL
### Client Caching
### CDN caching
### Web Server caching
### Database caching
### Application caching

## Types of caches by DESIGN
### Global cache
only one cache node
### Distributed cache (cache cluster)
multiple cache nodes


## Caching Strategies and Invalidation
### Write-around cache(cache-aside, lazy-loading)
[[Reactive]] approach to caching
Client makes a request to the cache, if it is there, it returns, if not client makes another request to the database and receives the data, then makes another request to the cache and populates it.
### Write-through cache

cache stands in between the [[database]] and the client, so as soon as you make a write request to the cache, the cache is updated and then the DB is updated
This is called a **PROACTIVE** approach
Pros:
	since well synced with the DB, results in fewer reads to the DB
Cons:
	infrequently requested data is also written to the cache, resulting in a larger cache.(since they are usually stored in the RAM this isnt a good thing)

### Write-back cache
Gives Asynchronicity. same thing as write-through cache, but the write request to the database is done asynchronously.
Cons:
	could cause the DB and cache to be out of sync. 

## Eviction Policies
### Least Recently Used(LRU)
has a time frame and a count
### Least Frequently Used(LFU)
only a count
### LIFO
### Random Replacement(RR)

### How to handle out of sync cache:
you can set a time to live(TTL) policy for self-cleanup, for example, every day no matter what you restart the cache. 
or a lazy read repair policy, so anytime you access the cache, you still make a lazy request to the DB to update the cache. 
