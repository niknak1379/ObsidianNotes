---
creation date: 2026-02-24 12:24
---
#03-Application-Architecture #Backend #Frameworks #Golang

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Golang Basics

<< ---------------------------------------------------------------- >>


## Go's Memory Allocation & Garbage Collector
### Slice Memory Representation
Slices are represented as a struct of len, capacity and then a pointer to the start of the underylying array.
So passing slices to functions will be weird bc youre copying the pointer to the slice, but you can only modify the already allocated elements, and you cannot append the slice bc the original pointer to the struct is unchanged.

### Go Stack Implementation
Stack is a continous block of memory, allocating here is fast and simple
Params passed and all local variables are allocated on the functions stack
after a function exists its values are deallocated and the return value is copied unto the stack of the caller function and the stack pointer is moved to the returned functions start

#### Go specific Implementation
Go stores things that it knows specifically how big it is at compile time. (this is why size is a part of array), size of a pointer type is also known and they are stored in stack. 

The stack can **Grow and Shrink** in Go which is unique.
Each goroutine has its own stack and goroutines are managed by the go runtime and not by the OS. This has advantages:
Pro: Go stacks start small and use less memory
Con: When stack needs to grow all data have to be copied which is slow

**For data that Pointers point to**:
1. Data must be a local variable whose data size is known at compile time. 
2. The pointer cannot be returned from the function. If the pointer is passed into the function, the compiler has to ensure these conditions still hold(if the pointer is returned its data will be deallocated and the pointer will not be valid anymroe)
because of this sometimes returning a struct is faster than returning a pointer to the struct, if theh object is not too big (i think the limit depends on the cpu but for an m1 chip it was around 100kb), basically copying it to the stack directly is faster than doing an alloc up on the heap and then copying its address to the stack. this will not be true as the struct grows bigger and bigger.  

[Paper: The Tail at Scale](https://oreil.ly/cvLpa) for garbage collector analysis
Heap Vs Stack Analysis and escape Analysis(the algorithm GCs use to determine what heap memory has no valid stack pointers to it)
[paper 1](https://oreil.ly/juu44),[paper 2](https://oreil.ly/c_gvC)

## nil structs
Structs have two pointers: a type pointer and a data pointer and for a struct to be considred nil, both have to be nil. 


## Concurrency & Goroutines

firstly you shouldnt really be using go routines unless its sth that takes a long time like I/O and network stuff, bc although the goroutines are managed by the go runtime scheduler and are not delegated to the OS scheduler like threads in other Programming languages, there is still overhead. So keep it concurrency free most of the time. 
### Channel Blocking Behavior

 | Operations | Unbuffered, Open | Unbuffered, Closed| Buffered, Open | buffered, closed | nil
 |read | pause until written | return zero (have to use ,ok) | pause if buffer empty | return remainig in buffer, if buffer empty return zero | hang foerver |
| write | pause until read | Panic | Panic if buffer full | Panic | Hang Forever |
| Close | Works | Panic | works, buffered values still there | Panic | Panic |

if reading from multiple channels inorder ot not get blocked use a for select statement

### When To use Buffered Vs Unbuffered
use buffered when you know how many go routines you have launched, or you want to limit the amount of work queued. 

#### Implementing Backpressure
You can limit the number of simultaneous requests in a system by using a buffered channel and a for select statement. 