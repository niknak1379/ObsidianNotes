---
creation date: 2025-10-27 14:46
---
#ProjectDocs 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Systems Design

<< ---------------------------------------------------------------- >>

Very simple design, uses a redis queue on an EC2 instance to queue crawled links and for deduplication as well using the hashing function. 

It uses Scrapy clusters as crawlers, and uses the scrapy spider implementation as individual crawlers.

It only uses 2 spiders as I did not want to pay much for EC2 and was not in a rush for it to be complete the full crawl very fast. 

The database that the spiders add the data to is a postgreSQL database hosted on an RDS instance. 

this only crawls multiple webpages per second so no need to implement stream processing with kafka and flink for the redis queue instead of the current implementation.