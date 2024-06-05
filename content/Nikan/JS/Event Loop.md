https://www.youtube.com/watch?v=8aGhZQkoFbQ
V8 runtime engine, for chrome

single threaded

blocking: (when things become slow?)
	basically a process is really slow ( like a network reqeust or a very big loop) 
		since its a single threaded language this BLOCKS the call stack

event loop and concurrency: 
	web APIs like setTimeout, get and post requests and DOM functions(onClick), are run on different threads rather than the normal JS one -- they dont run in the V8 engine
		**separate call back queue for the APIs**: that once the waiting is done, the code gets pushed on to those.
	Event Loop: basically looks at both the stack and the call back queue, and as long as the stack is empty pushes one from the call back queue onto the stack 
	There is also a **render queue** that has priority over the call back queue and they work together when the stack is empty.