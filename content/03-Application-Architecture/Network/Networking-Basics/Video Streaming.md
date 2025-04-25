---
creation date: 2025-04-23 13:29
---
#03-Application-Architecture #Network #Networking-Basics

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Video Streaming

<< ---------------------------------------------------------------- >>

80% of residential internet traffic is video streaming. 

## Challenges:
1. Scale:
	1. a lot of people will be using the services
2. Heterogeneity
	1. different users have different devices, and networks(wired vs mobile, bandwidth differences)

You use a sophisticated application layer distributed infrastructure. 

Videos are sequences of images(frames, 2d array of pixels)

Encoding compression teqniques:
1. **Spatial** compression techniques on the picture frames(if a pixel is repeated n times in a row)
2. **Temporal** compression techniques between subsequent frames(if the frame hasn't changed much only send the difference)

Types of encoding:
 1. Constant Bit Rate:
	 1. encoding rate is fixed
 2. Variable Bit Rate: 
	 1. encoding rate changes as the amount of spatial and temporal coding changes. 

Server to client bandwidth will vary over time -> changing network congestion levels
Packet loss and delays due to congestion will delay playout or result in poor video quality. 


### Client Side
Continuous playout constraint: during client video playout, playout timing must match original timing, but network delyas are variable, so will need client side buffering(waiting before begining playout so that you can play at the same constant rate as the video on the server). 


## Streaming Multimedia: DASH
### Dynamic Adaptive Streaming over HTTP
Server: 
1. divides the video file into multiple chunks
2. each chunk encoded at multiple different rates and qualities
3. different rate encodings stored in different files. 
4. the different files are replicated and stored in various CDN nodes
5. Manifest File: provides URLs for different chunks

Client:
 1. periodically estimates server to client bandwidth
 2. consults the manifest file, requests one chunk at a time
	 1. chooses maximum coding rate sustainable at the bandwidth
	 2. makes variable playout quality at different bandwidths possible


## CDN
Option 1:
one giant server, result in a single point of failure and network congestion
Option 2:
store several multiple copies of videos at multiple geographically distributed sites. (application level CDNs)
1. Enter Deep approach: push CDN servers deep into many access networks
2. Bring Home approach: smaller number of larger clusters in POPs near access networks 