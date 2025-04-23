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

Encodings:
1. compression techniques on the picture frames(if a pixel is repeated n times in a row)
2. compression techniques between subsequent frames(if the frame hasnt changed much only send the difference)
3. 