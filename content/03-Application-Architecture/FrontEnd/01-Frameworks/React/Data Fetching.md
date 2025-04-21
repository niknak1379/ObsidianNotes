---
creation date: 2025-03-14 13:08
---
#03-Application-Architecture #FrontEnd #01-Frameworks #React

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Data fetching

<< ---------------------------------------------------------------- >>

https://www.youtube.com/watch?v=00lxm_doFYw

## Submitting Forms
#### Controlled Vs. Uncontrolled Components
in Uncontrolled components, the data sending is handled by the dom(you use a useRef for this)
Controlled Components, the states and behavior is managed by useState hooks.


# Fetch on Render and Render on Fetch

[[03-Application-Architecture/FrontEnd/Web Apps/Rendering Patterns/SSR|SSR]]
## Fetch on Render:
1. user fetches the html
2. parses HTML fetches .JS scripts
3. JS renders components, requests USER info
4. Server Authenticates and sends UserInfo
5. Browser renders UserInfo, needs to request FriendsList
6. Server Authenticates and responds with FriendsList
7. Browser Renders the list and request Individual Friend Infor
8. Server Authenticates and responds with Individual Friend Info
There is a lot of water falling here. 

## Render on Fetch:
1. user fetches the HTML
2. the server does authentication, getinng userInfo, FriendsList, individual friends
3. User parses HTML, fetches JS, awaits the rest of the data.
4. Server finishes process the firendslist and individual friends and userinfo requests and sends them to the client to be displayed
Basically this one does no waterfalling so it gets a lot faster. 