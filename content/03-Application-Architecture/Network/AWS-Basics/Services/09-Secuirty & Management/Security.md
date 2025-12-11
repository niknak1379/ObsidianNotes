---
creation date: 2025-12-03 15:16
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Security

<< ---------------------------------------------------------------- >>

## KMS - Key Management Service
Makes it easy to create, control and rotate encryption keys used to encrypt you data on aws. KMS is a multi tenant hardware secruity module
integrates with a lot of aws services like, RDS, CodeCommit, S3, CodeDeploy, SNS, SQS, DynamoDB, X-Ray

HSM - Hardware Security Module - is specialized for storing encryption keys. Designed to be tamper proof and stores keys in-memory, so they are never written to disk. 

By default its multi tenant but there is also a multi tenant service called AWS CloudHSM which gives you full control of a dedicated HSM - has FIPS140-2 level 3 for enterprise regulation needs. 

### STS - Security Token Service
web service that enables you to request temporary limited privilege credentials for IAM users or federated users

Returns AccesskeyIS, SecretAccessKey, SessionToken, Expiration

Used for AssumeRole, AssumeRoleWithWebIdentity, GetSessionToken, etc...

11:00:00 for https://www.youtube.com/watch?v=c3Cn4xYfxJY

### Customer Master Key
Is the primary resource that AWS manages, it is the logical representation of the master key that the KMS uses to encrypt all the other keys stored in it.
Supports both Symmetric(both same) and Asymmetric (public, private) keys

## AWS Audit Manager
continualy audit AWS usage to simplify risk and compliance assessments. 

like against PCI, CIS, HIPAA and more. 


## ACM - Amazon Certificate Mangaer
Provision, manage and deploy public and private SSL/TLS certificates for use with AWS services. 

has public and private certificates. Private can cost upto 400$ for some reason.

## Amazon Cognito
Customer identity and access management system that provides auth, authorization and user management for your web and mobile apps. Also provides auth to AWS services. 

### User pools
user directory with authentication to Idp to grant access to your app

### Cognito Identity Pools
provide temp credentials for users to access AWS services 

basically apps login with user credentials and that CIAM generates user specific creds for the app on the user side to do things with AWS services.

## Amazon Detective 
analyzes investigates and quickly identifies the root cause of secuirty findings or suspicous activities. 

See on a map where API calls are being made, launch investigations on IAM princiiples etc...



## AWS Firewall Manager
to centrally configure and manage firewall rules across accounts and applications

Can manage:
- WAF and WAF Classic
- AWS Shield Advanced
- Network Access Controls
- AWS NetworkFirewall
- Route 53 resolver DNS FIrewall
- Third Party Firewall Services

## AWS Inspector

Runs a security benchmark against specific EC2 instances. You can run a variety of security benchmarks. Can perform both Netweork and Host assessments.

## Amazon Macie
Fully managed service for monitoring data access in S3, and generates detailed alerts when detecting risk of unauthorized access or inadvertent data leaks. 

## AWS Security Hub
Cloud Security Posture Management system (CSPM) that allows you to generate a security score to determine your security posture. 

you enable standards which are a collection of secuirty controles
the controls are AWS Config rules

## AWS Secretes Manager
Just aws's implementation of a secrets manager. Does automatically reotate credentials

Supports RDS, redshift DocumentDB, other databases and key, values.

## AWS Shield
Managed DDoS protection service. Route53 and CloudFront automatically use it. 

Protects again Layer 3, 4, 7

Paid version also does Elastic Load Balancer, Global Accelerator and Elastic IP. 

Both Integrate with WAF

## AWS WAF - Web Application Firewall
protects ur app from common web exploits

Write your own rules to allow or deny traffic based on the contents of an HTTP Request
can be attached either to cloudFront or to Application Load Balancer

protect from
1. injection
2. broken auth
3. sensitive data exposure
4. XML external Entities
5. Broken Access Control
6. Security misconfigurations
7. Cross Site Scripting
8. Insecure Deserialization
9. Using components with known vulnerabilities
10. Insufficient logging and monitoring

## CLoudHSM
Single Tenant HSM version of AWS KMS - Key management service
for meeting regulatory needs like FIPS

## Amazon Guard Duty

### IDS/IPS
Intrusion Detection System and Intrusion Protection System

A device or software application that monitors a network or systems for malicious activity or policy violations.

Guard Duty is a thread detection service that continously monitors for malicious, suspicious activity using ML

It uses cloudTrail, VPC flow and DNS logs

## Service Health Dashboard
general status of AWS services

## Personal Health Dashboard

provides alerts and guidance for AWS events that might affect your environment.

All AWS customers get one.

shows recent events to help you manage active events, and shows proactive notifications about scheduled activity.

## AWS Artificat
Self-serve portal for on-demand access to AWS compliance reports.