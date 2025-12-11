---
creation date: 2025-12-10 20:54
---


<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Orgs and accs

<< ---------------------------------------------------------------- >>

AWS Organizations: allow the creation of new AWS accounts. Centrally manage billing, control access, compliance, security, and share resources across your AWS accounts. 

Organization Units: are a group of AWS accounts within an organization which can also contain other organizational Units - creating a hierarchy

Service Control Policies: give central control over the allowed permissions for all accounts in your organization, helping to ensure your accounts stay within your organizations guidelines. 


## AWS Control Tower
Helps Enterprises quickly set-up a secure, AWS multi-account Provides you with a baseline environment to get started with a multi-account architecture

1. Landing Zone: a baseline environment that is well-architected and best practices to start launching production ready workloads.
	1. sso enabled, centralized logging, cross account security auditing
2. Account Factory
	1. automates provisioning of new accounts
	2. standardize account creation with pre-approved settings.
3. Guardrails
	1. pre packaged governance rules for security, operations and compliance that customers can select and apply enterprise-wide

## AWS Config
Change management: we have a formal process to monitor changes, enforce changes, remediate changes. 

CaC - Compliance as Code: utilize programming to automate the monitoring, enforcing and remediating changes to stay compliant with a compliance programs or expected configuration


AWS config is a CaC platform


## AWS Quick Starts
prebuilt templates by aws and aws partners to help deploy wide range of stacks.
comes with:
1. a reference architecture for the deployment
2. AWS cloudformation templates that automate and configure the deployment
3. A deployment guide explaining the architecture and implementation

## Tags
just tag different resources, can be used in conjunction with IAM policies

## Resource Groups:
A collection of resources that share one or more tags, helps organize and consolidate information, can display details about a group like metrics, alarms, configuration settings.


## Business Centric Services
1. Amazon Connect: a virtual call center service.
2. Workspaces: virtual remote desktop service. 
3. WorkDocs: a centralized storage to share content and files. Similar to microsoft SharePoint.
4. Chime: video conferance service - zoom basically
5. WorkMail
6. Pinpoit: a marketing campaign management service -> for sending targeted email via SMS, push notifications, and voice messaeges. 
7. SES(Simple Email Service) - transactional email service
8. QuickSight - business intelligence service. Connect multiple data sources and quickly visualize data in the form of graphs with little to no programming knowledge.

