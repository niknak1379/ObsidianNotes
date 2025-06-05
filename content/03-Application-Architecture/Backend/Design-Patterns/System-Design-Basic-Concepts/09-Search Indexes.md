---
creation date: 2025-05-13 14:15
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Search Indexes

<< ---------------------------------------------------------------- >>

## Search Indexes(text searching)
We can index the DB fields but the search term might not be the starting substring of the indexed field so not that valuable. 

We use search indexes:
it takes a document and tokenizes it -> creates an inverted index -> basically makes a k,v pairings of word tokens and the IDs of documents they can be found in. 
Prefix searching: 
The inverted index is sorted so you can binary search it for specific indexes. 

Suffix Searching:
you can keep a second copy of the inverted index for searching words by their suffix(reverse the key of the indexes) apple:10 -> elppa:10
Still ordered by suffix. -> you can reverse the search string and then binary search the suffix search index. 

## Apache Lucene

Pretty popular open source search index
Many types of indexes supported for complicated variants of search!
texts, numbers, coordinates, etc...

Uses an LSM tree variant to support fast document ingestion ... writes first go to memory

it can also store the entire document for faster acce ss and fewer network trips instead of just the document ID.
## ElasticSearch
Convenience wrapper around Apache Lucene to allow for fast searching in a distributed system. 

Supports REST API
Its own query language
managed replication and partitioning
visualization


It maintains a [[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/06-Partitioning#Secondary Index Partitioning|local index]](for a given key on a partition we have all the possible values for it) per node.

If were doing local indexing then we have to query multiple nodes and then aggregate the results in an aggregator node which is more latency. 

so Try to keep all searches limited to one partition. 

### Caching
Normally: cache piece of index or full query result

ElasticSearch: cache part of a query

for example cache all products that are on sale since sale is going to be a popular query. 