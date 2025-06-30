---
creation date: 2025-06-26 14:40
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Video Groupchats

<< ---------------------------------------------------------------- >>

https://www.youtube.com/watch?v=7KO7o55dcuw&list=PLjTveVh7FakJOoY6GPZGWHHl4shhDT8iV&index=25

1. build a video chatting application supporting 1:1 and group calls
2. we should be able to support large group calls of up to 100 people
3. we should be able to record video calls and upload them to the cloud. 

We should obv use UDP

## Pear to Pear Communication
Not always want to do this especially in a big group chat, wed have to send video to and recive from many different places

for 1:1 p2p is good but bc of different kinds of NAT not exposing the IP address correctly this could cause an extra hop in the network for every packet which will introduce a lot of lag.

## Central Chat Server
Con: server will be under a lot of load. 

Option 1: central server takes in all streams, compiles it down to one video source, and sends to all clients

Cons:
lots of work on the server to merge videos together
each client has to watch the same stream
this is fine in sth like twitch but not when a lot of people are on the call

### Selective Forwarding
Only send clients the streams they actively care about, in the appropriate resolutions

Use a websocket from client to server, server caches what each client wants. 


![[Obsidian/Excalidraw/Pasted image 20250627142100.png]]
 