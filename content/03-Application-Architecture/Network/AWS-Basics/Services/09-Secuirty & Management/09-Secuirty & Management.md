---
creation date: 2025-12-10 20:33
---


<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Map Of Content

<< ---------------------------------------------------------------- >>

%% Begin Waypoint %%
- **[[09-Secuirty & Management]]**
	- [[09-Secuirty & Management]]
	- [[IAM]]

%% End Waypoint %%


#AWS-Basics 

<< ---------------------------------------------------------------- >>

# Identity

<< ---------------------------------------------------------------- >>

## Zero Trust Model
Principle of trust no one, verify everything. 

Primary Security Perimiter: defines the first line of defense and its secuirty controls that protect a company's cloud resources and assets

Network-Centri(old way): traditional security focused on firewalls and VPNs.

Identity-Centric(new way): bring your own device, remote workstations is much more common, we cant trust if the employee is in a secure location, we have identity based security controls like MFA.

### Zero Trust at AWS
1. IAM policies
2. Permission Boundaries
3. Service Control Policies(organization-wide Policies)
4. IAM policy Conditions
	1. Restrict on IP address or region
	2. MFA is off or on
	3. based on time.

You have to set everything up yourself so there is no automatic zero trust at AWS.

A collection of services can be used to setup intelligent-ish detection of identity concerns but requires expert knowledge

AWS CloudTrail(tracks all API calls) -> Amazon GuardDuty(detects suspicious or malicious activity based on CloudTrail and other logs) -> Amazon Detective (used to analyze and investigate security issues and can ingest findings from guard duty)

### Third Parties:
Azure Active Directory, Google BeyondCorp, JumpCloud all have more intelligent secuirty controls for real-time detection. you use those for AWS Single Sign on and then access AWS resources

## Terms
Directory Service:
Maps the name of network resources to their network addresses.
Shared information infrastrucutre for locating managing and administering resources:
Volumes, folders, files, printers, users, devices.
DNS is an example. 


Active Directory:
a Domain Service that gives organizations the capability to manage multiple on-premise infrastructure components and systems using a single identity per user. 

Identity Providers(IdPs):
a system entity that creates, maintains and manages identity information for principles and also provides authentication services to applications within a federation or distributed network. A trusted provider that lets you use authenitcate to access other services: Facebook, amazon, google, github

Federated Identity: is a method of linking a user's identity across multiple separate identity management systems.
[[openID-Connect||OpenID]]: being able to login to social media from a different platform
[[oAuth2.0]]: uses authorization tokens
SAML: Security Assertion Markup Language, is an open standard for exchanging authentication and authorization. A use case is Single-Sign-on via web browser.


Single Sign on: is an authentication scheme that allows a user to log in with a. single ID and password to different systems and software.
So once a user is logged in to the primary directory, they are not presented with multiple login screens for different softwares.

LDAP(Lightweight Directory Access Protocol): is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an IP network.

SSOs use LDAP under the hood, but it wasnt designed for webapps.

Principle of Least Privilage(PoLP)
the computer security concept of providing a user, role, or application the least amount of permissions to perform a operation or action.

JEA Just enought access
JIT Just in time(permitting the smallest length of duration with permission)


## 7 Layers of Security
1. Data
2. Application
3. Compute
4. Network
5. Perimeter(DDoS)
6. Identity and acess
7. Physical

## CIA Triad
Confidentiality, integrity availability
