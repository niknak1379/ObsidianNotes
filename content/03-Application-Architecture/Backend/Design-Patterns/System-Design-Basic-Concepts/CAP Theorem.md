---
creation date: 2025-04-22 15:37
---
#03-Application-Architecture #Backend #Design-Patterns #Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# CAP Theorem

<< ---------------------------------------------------------------- >>
https://www.youtube.com/watch?v=VdrEq0cODu4
## System Design Specifics
The theorem suggests that in a distributed system you can only achieve 2 out of 3 of the following qualities at all times. 
1. Consistency: all nodes/users see the same data at the same time
	1. selling stocks, buying airplane tickets etc... 
2. Availability: every request gets a response(successful or not)
	1. you can risk stale data(social media apps etc...)
3. Partition tolerance: system works despite network failures between nodes. In a distributed system this is needed by default

Why are consistency and availability at odds with each other if partition tolerance is achieved??

Like for example if u have 2 user bases and servers one in EU and US, and u are selling a stock. The stock prices depending on the size of buy or sell of a user could change a lot and should be reflected on the other server. Strong consistency is required bc its more important for the other buyer to have the correct price(strong consistency) rather than just never seeing an error(strong availability)


Different parts of the system can prioritize different aspects,
for exmample for ticket master, u should prioritize consistency to prevent double booking, but for event information availability is good so that everyone has access to the event information.

### Different Types of Consistency
1. Strong Consistency: all reads reflect most recent write
2. Casual Consistency: related events appear in order
3. Read-your-writes Consistency: user sees their own updates
4. Eventual Consistency: updates will propagate eventually
