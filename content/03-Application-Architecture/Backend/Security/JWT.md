---
creation date: 2025-04-01 12:26
---
#JWT

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# JWT

<< ---------------------------------------------------------------- >>

## Access Token
the token that you send to the client. Since it is a client side token it should expire pretty fast, usually around 15 mins or so. 

In order to make sure that attackers do not have access to this token, do not store it in local storage or serverside cookies. Store it in memory. So in the context of a [[03-Application-Architecture/FrontEnd/01-Frameworks/React/React|React]] application, in a [[03-Application-Architecture/FrontEnd/01-Frameworks/React/Hooks/useState|useState]] hook.
## Refresh Token
the token that lives on the server, usually in a cookie that is not able to be accessed by JS or code. Since it is serverside the expiration date on it can be a lot longer than an Auth token so can be around 30 days.

The server uses this to refresh the expired acess token