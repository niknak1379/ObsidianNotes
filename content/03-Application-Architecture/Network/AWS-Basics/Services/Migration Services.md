---
creation date: 2025-12-09 14:31
---


<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>


## **AWS Migration Hub**

Central dashboard to track application migrations from on-premises to AWS across multiple AWS services (like AWS Application Migration Service, Database Migration Service, etc.). Think of it as your migration "command center."

## **AWS Application Discovery Service**

Discovers and collects data about your on-premises servers to plan migrations.

**Two discovery options:**

- **AWS Discovery Agent** - Lightweight agent installed on VMs/servers to collect detailed system info (CPU, memory, network, processes)
- **AWS Agentless Discovery Connector** - OVA appliance deployed in VMware to collect VM inventory without installing agents

## **Migration Evaluator** (formerly TSO Logic)

Provides a business case for migration by analyzing your current infrastructure costs vs. projected AWS costs.

- **Migration Evaluator Collector** - Tool that gathers on-premises resource utilization data
- Creates TCO (Total Cost of Ownership) reports and right-sizing recommendations

## **AWS Migration Hub Refactor Spaces**

Creates a multi-account refactoring environment where legacy monolithic applications and new microservices can coexist during incremental modernization.

- **Not just networking** - It's an orchestration layer for strangler fig pattern migrations
- Handles routing between old monolith (one account) and new services (another account)
- Enables gradual service extraction

## **Migration Hub Journeys**

Pre-built migration templates and step-by-step guidance for common migration patterns.

- Provides checklists and best practices
- End-to-end playbooks for different workload types
- Not a separate service - just guided workflows within Migration Hub

## **Migration Hub Orchestrator**

Automates and orchestrates migration workflows by creating custom templates with pre-built or custom scripts for migration tasks.

---

### AWS Data Sync
Data transfer service that simplifies migration to from and betwen cloud storage services

supports NFS< SMB, HDFS, object sotrage

Works with [[03-Application-Architecture/Network/AWS-Basics/Services/01-Storage/S3|S3]], [[03-Application-Architecture/Network/AWS-Basics/Services/01-Storage/File Systems|EFS, FSx]], snowcone, Snowball Edge -> to and from google cloud storage, azure etc...

### Amazon AppFlow
Managed integration service for data transfer between data sources. For example between S3 and Google Sheets. 
Its for data transfer beteween SaaS and AWS services. 

Google calender, snapchat ads, zoom, stripe etc...

### AWS DMS - Database Migration Services

Methods:
* Homogenous data migration
	* migrate with native db tooks eg. pg_dump, pg_restore
	* create a migration project in DMS and it use a serverless compute to do it
* instance Replication
	* provision an isntance with chosen instance type to perform replication
* Serverless Replciation
	* must use VPC ednpoints to access AWS services

### AWS Schema Conversion Tool
is a stand alone desktop app that converts your database schema to another database engine.
only on linux and windows. 
