---
creation date: 2025-04-24 15:07
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Examples

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Ad Clicks ;)

<< ---------------------------------------------------------------- >>

its a system that collects and aggregates data on ad clicks. Used by advertisers to track the performance of their ads and campaigns. 

## Design Steps for Infrastructure and Backend Components
1. Requirements
2. System Interface and Data Flow
3. High-level Design
4. Deep Dives

### Requirements
#### Functional Requirements
- user click an ad and they get directed to the advertisements website
- advertisers can query click metricks over time w/ 1 minute as minimum granularity
Whats the scale of the system?

10 M ads at any given time
10K ad clicks per second at peak. 

### Non Functional Requirements
- Scalability to support 10k peak clicks per s
- low latency analytics queries < 1s
- Fault tolerance
- Data integrity
- As realtime as possible
- Idempotency(an operation has the same effect regardless of how many times it's executed, as long as the input parameters remain the same) of ad clicks


## Interface and Data Flow
Outlining what Data the system receives and what it outputs.

Input:
- click Data
- Advertiser queries
Output:
- redirection
- aggregated click metrics

Data Flow:
1. Click Data comes into the system
2. User is redirected
3. Click data validated(idempotency)
4. Log the click data
5. Aggregate the click data to be readable
6. Aggregated data queried by the advertisers


## High Level Design
Click DB:
has to be optimized for a lot of writes (10k clicks per second) to gather the required information:
- 1st solution: use Cassandra: it uses a sorted structure resembeling LSMs. Inserts and updates into a log like structure(mem table in memory) and it flushes it to disk periodically.
	- But this also causes the read queries used to aggregate data to be very slow(select a bunch of relational stuff about the users that clicked between a certain timestamp and grouped by id for example)
- 2nd Solution:
	- Use a Spark layer: It automatically aggregates the click DB coming in in 1min intervals and puts it into an OLAP(Online Analytical Processing)

![[Obsidian/Excalidraw/Pasted image 20250425132655.png]]
## Deep Dives
- Lowering Latency:
	- You can reduce the number of times the cron job runs Spark but it is pretty computationally expensive and at some point there will be too much over head: need to redesign the system:
		- introduce a stream: when the clicks come in they go to the stream -> then to a stream aggregator sth like Flink
		- Flink keeps an in memory data structure.
		- You specify an aggregation window for example 60s and once the timelimit is reached, it aggregates the in memory data structure and write it directly to the database(OLAP)



