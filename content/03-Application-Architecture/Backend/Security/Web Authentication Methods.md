---
creation date: 2024-07-17 14:43
modification date: Wednesday 17th July 2024 14:43:54
---
#Backend #Security

<< ---------------------------------------------------------------- >>

# Web Authentication Methods

<< ---------------------------------------------------------------- >>

https://www.youtube.com/watch?v=LB_lBMWH4-s


## Password based Authentication
Could be very insecure if you allow bad passwords, and do not hash the passwords in the Data base, and if you use HTTP. 
It could be secure tho if you us HTTPS for communications, properly hash with a salt
[Adding Salt to Hashing: A Better Way to Store Passwords - Auth0](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/)

Sessions are remembered either using cookies, or JWTs. 

### Cookies
You create a session ID and attach it to the response, with a change in headers and use set-cookie. 

### JWT
it is stateless, the server sends the JWT to the client and is usually stored in local storage, cookies, or session storage. and the JWT is then passed along to the server on each request and verified server side. 

## SSO(Single Sign on)

it can be used to grant authorization using **OAuth**

## MFA(Multi Factor Authentication)
Combination of password and sth the user has, cards, token, etc...

## Passwrodles Authentication
It uses Magic Links or Magic code, not sure what that is or how it is used. 

## Biometric Authentication
Basically it has been staandardized and all major browsers now support its API.


