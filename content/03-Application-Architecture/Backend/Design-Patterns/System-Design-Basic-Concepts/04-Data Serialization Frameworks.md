---
creation date: 2025-04-30 13:28
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Serialization Frameworks

<< ---------------------------------------------------------------- >>

JSON XML: basically how to keep relational data but not in a database ?noSQL?? framworks??

They are less type safe so harder to work with in larger companies and applications 

also harder to compress JSON and XML files.

Serialize libaries:
1. Google protocol buffers
2. Apache Thrift

How they work:

1. You have a massage(such as a row of a database)
2. Give each row in the message a number
3. You can keep a mapping of the tag number to the field value and do not need to store the fields in the file objects multiple times. 
4. This serialization and encoding does require cpu but the space trade off is usually worth it 

Disadvantages:
require a file for the data Schema. 

Means you need to own the database to be able to access the schema. 
So if youre writing to the database from a different server you will use one schema and if you are using a third server to read from the DB you will use another different read Schema. 


Reader vs Writer Scheme
Apache Avro fixes the discrepencies between the reader and writer schemas allowing you to read from the reader server data written to the DB by the writer server using the writer schema. 

