---
creation date: 2025-07-03 15:07
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Fanout Pattern

<< ---------------------------------------------------------------- >>

https://www.youtube.com/watch?v=J-5JozlYIqI&list=PLjTveVh7FakJOoY6GPZGWHHl4shhDT8iV&index=20

reqs
1. deliver notifications to users in real time based on a topic which multiple users are subscribed to
2. users that are offline can fetch their notifications later

if 1 billion topics and each receives 1000 notifications of 100 bytes per day...
-> storing 100TB per day, 30PB per year

Topics can have millions of users subscribed to them! -> do we want to push thenotification to each user?

![[Obsidian/Excalidraw/Pasted image 20250712144304.png]]