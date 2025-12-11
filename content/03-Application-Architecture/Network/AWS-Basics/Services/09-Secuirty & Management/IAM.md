---
creation date: 2025-12-10 20:33
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>

# Identity and Access manager

<< ---------------------------------------------------------------- >>

### Types of Policy
1. Managed Policy: provided by AWS
2. Custom managed Policy: you create
3. Inline policies: directly attached to roles. 

### Root user specific abilities
Changes your account settings such as email, name, root pass and access key
Restore IAM permissions
Close aws account
Change or cancel support plan


### Temporary Security Credentials

Are just like programmatic access keys, except they are temporary. 

Temporary credentials are useful in scenarios that involve: 
1. identity federation
2. Delegation
3. Cross account access
4. IAM roles
Can last for minutes to hours. And are not stores with the user but generated dynamically. -> id roles and federation automatically generates a STS for you and uses it under the hood (IAM secuirty Token Service)