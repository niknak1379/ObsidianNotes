---
creation date: 2025-04-30 12:28
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Column Oriented Storage

<< ---------------------------------------------------------------- >>


## Row oriented storage:
the rows are divided into chunks and the chunks are stored in different files. Each row in each file is adjacent to each other on disk

## Column Oriented Storage
Do the same thing but for each column(one column for emails, phone, etc)

**Whats the Point?**
Row is useful for things like getting social media profiles where u need the entire information of a profile in one request. (and we dont need the data for other columns)

### Column Compression:
Bit map encoding and then run length encoding:
you go through the columns each value(distinct value in a column) and do a 0-1 for the columns that include that value or not. 1: 001 -> only the third column has the value one for the column we are encoding.


Run length encoding: you take the number of zeroes then number of ones and then zeroes again. 001 -> 21

By using these two DB can compress columns a lot which makes running data science and analytics queries on the data values a lot faster and more efficient.

### Dictionary Compression:
Get a certain number of bits to assign to all the key values in a column. 00, 01, 10, 11
You can save a lot of storage here. 


### Predicate Push Down
Parquet -> open source apache file format that allows for column oriented storage. 

Basically each file that the columns are stored in also stores some metadata about the values in the file(such as min, max or whatever) and if the query constraint are outside of that meta data it skips that file entirely making the queries a lot faster. 

#### Downsides of column oriented:
Every column has to be in the same sorted order. (otherwise the data would be nonsensical)
Each time we write a new row it has to access multiple parts of the disk for each column file making it slower unless:

We can use a LSM Tree and SSTree indexing
SSTree would be the column files. 
 


