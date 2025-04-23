---
creation date: 2025-04-22 15:37
---
#03-Application-Architecture #Backend #Design-Patterns #Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Untitled

<< ---------------------------------------------------------------- >>

In [database theory](https://en.wikipedia.org/wiki/Database_theory "Database theory"), the **CAP theorem**, also named **Brewer's theorem** after computer scientist [Eric Brewer](https://en.wikipedia.org/wiki/Eric_Brewer_\(scientist\) "Eric Brewer (scientist)"), states that any [distributed data store](https://en.wikipedia.org/wiki/Distributed_data_store "Distributed data store") can provide only [two of the following three](https://en.wikipedia.org/wiki/Trilemma "Trilemma") guarantees:[[1]](https://en.wikipedia.org/wiki/CAP_theorem#cite_note-Gilbert_Lynch-1)[[2]](https://en.wikipedia.org/wiki/CAP_theorem#cite_note-2)[[3]](https://en.wikipedia.org/wiki/CAP_theorem#cite_note-3)

[Consistency](https://en.wikipedia.org/wiki/Consistency_model "Consistency model")

Every read receives the most recent write or an error. Note that consistency as defined in the CAP theorem is quite different from the consistency guaranteed in [ACID](https://en.wikipedia.org/wiki/ACID "ACID") [database transactions](https://en.wikipedia.org/wiki/Database_transaction "Database transaction").[[4]](https://en.wikipedia.org/wiki/CAP_theorem#cite_note-4)

[Availability](https://en.wikipedia.org/wiki/Availability "Availability")

Every request received by a non-failing node in the system must result in a response. This is the definition of availability in CAP theorem as defined by Gilbert and Lynch.[[1]](https://en.wikipedia.org/wiki/CAP_theorem#cite_note-Gilbert_Lynch-1) Note that availability as defined in CAP theorem is different from [high availability](https://en.wikipedia.org/wiki/High_availability "High availability") in software architecture.[[5]](https://en.wikipedia.org/wiki/CAP_theorem#cite_note-Fowler_2015-5)

[Partition tolerance](https://en.wikipedia.org/wiki/Network_partitioning "Network partitioning")

The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.

When a [network partition](https://en.wikipedia.org/wiki/Network_partition "Network partition") failure happens, it must be decided whether to do one of the following:

- cancel the operation and thus decrease the availability but ensure consistency
- proceed with the operation and thus provide availability but risk inconsistency. Note this doesn't necessarily mean that system is [highly available](https://en.wikipedia.org/wiki/High_availability "High availability") to its users.[[5]](https://en.wikipedia.org/wiki/CAP_theorem#cite_note-Fowler_2015-5)