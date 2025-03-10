---
creation date: 2024-07-14 13:42
modification date: Sunday 14th July 2024 13:42:36
---
#Backend #Security

# Auth0
Normally you just collect username or email and password from the user and store it in a database and verify on the backend.
But Auth0 is a platform that basically does all of that for you?
There also multi-factor authentication and social logins like apple and google that use the [[openID-Connect]] standard. 

**Its a security standard that allows you to access data in another application**. Instead of giving them a username password, you give them an access key.
	1. authorization
	2. delegated authorization

## OAuth Flow
visible steps to grand consent from the user.

## [[openID-Connect]]
Auth0 is only authentication, openID is basically a user profile, basically **Single-Sign-on(SSO)**.
So it gives both an access token and an Identity token.


## Tutorial for later
https://www.youtube.com/watch?v=tgO_ADSvY1I