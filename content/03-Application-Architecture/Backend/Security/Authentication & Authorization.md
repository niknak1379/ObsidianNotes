---
creation date: 2025-04-07 15:59
---
#Authentication

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Authentication vs Authorization

<< ---------------------------------------------------------------- >>

article link: https://auth0.com/intro-to-iam/authentication-vs-authorization

## Authorization:
Process of confirming that a certain user of device has permission to access certain resources.
## Authentication:
Process of confirming the identity of a user or a device






## why the difference is important:
once you already sign in, the application will not be asking you about ur user and password(authentication) anymore. However they are interested in what things you are allowed to do, this information is usually in a token(authorization token)

**Authentication leads to Authorization but not the other way around**

## Flows:
https://auth0.com/docs/get-started/authentication-and-authorization-flow#authorization-code-flow

God this access vs refresh token is breaking my brain so freaking hard.