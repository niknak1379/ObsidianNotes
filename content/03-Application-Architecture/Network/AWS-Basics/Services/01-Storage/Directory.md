---
creation date: 2025-12-10 21:13
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>

## AWS Directory service

provides multiple ways to use microsoft AD


offerings:
1. Simple AD
	1. microsoft AD compatiple directory powered by samba 4. 
2. AD Connector
	1. proxy service to connect on-premise with AD
3. AWS Managed Microsoft AD
4. Also integrates with Amazon Cognito


### Directory Service

directory service maps the names of network resources to their network addresses.
Shared information infra for locating manageing and organizing volumes folders files printers users etc...

### Active Directory
Organizations shared directory that can be managed?

### LDAP
open vendor-neutral industry standard application protocol for accessing and maintaining distributed directory information services over an IP network.

LDAP enables Same-sign on. allows users to single ID and pass but have to enter it everytime they login. 

LDAP was not desined natively to work with web apps and SSO uses LDAP underneath. 