---
creation date: 2024-07-12 12:09
modification date: Friday 12th July 2024 12:09:15
---
#Backend #Frameworks #ExpressJS

# Routing
https://dev.to/mrrishimeena/understanding-expressjs-router-nodejs-a-comprehensive-guide-59o8

https://stackoverflow.com/questions/27227650/difference-between-app-use-and-router-use-in-express

It's just used for sub folder and management, kind of similar to app.use(), lemme see what the actual difference is. 

`router.use();` mounts middleware for the routes served by the specific router, `app.use();` mounts middleware for all routes of the app (or those matching the routes specified if you use `app.use('/ANYROUTESHERE', yourMiddleware());`).

Example use case could be an app with one router with standard routes and one router that handles api routes, which need a valid user.

You would then mount the authentication middleware for the api router only with `router.use(yourAuthMiddleware());`.

If you would have an app though that requires a valid user for all routes, mount the middleware for the app with `app.use(yourAuthMiddleware());`