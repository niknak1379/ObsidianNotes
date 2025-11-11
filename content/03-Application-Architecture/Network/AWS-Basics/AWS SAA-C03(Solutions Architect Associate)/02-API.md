---
creation date: 2025-11-09 14:26
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# API Intro

<< ---------------------------------------------------------------- >>

### Smithy
Smithy 2.0 is AWS's open-source interface Definition Language for web services

It is a language for defining services and SDKs.

Forces you to define your interface first rather than let your API to become implicitly defined by your implementation choices.

### STS - Security Token Service
web service that enables you to request temporary limited privilege credentials for IAM users or federated users

Returns AccesskeyIS, SecretAccessKey, SessionToken, Expiration

Used for AssumeRole, AssumeRoleWithWebIdentity, GetSessionToken, etc...

11:00:00 for https://www.youtube.com/watch?v=c3Cn4xYfxJY

### Service Endpoints
AWS uses 4 types
1. global - for global services
2. regional endpoints - for regional services 
3. FIPS endpoints - for enterprise use
4. Dualstack endpoints

