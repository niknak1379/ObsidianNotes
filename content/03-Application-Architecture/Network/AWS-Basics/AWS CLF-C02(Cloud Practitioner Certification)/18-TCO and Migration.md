---
creation date: 2025-10-30 12:04
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# TCO & Migration

<< ---------------------------------------------------------------- >>


## TCO - Total Cost of Ownership

TCO is a financial estimate intended to help buyers and owners determine the direct and indirect costs of a product or service.  


## CAPEX vs OPEX
Spending money upfront on physical infrastructure is **Capital Expenditure - CAPEX**, some can be deducted from tax bill over time

Operational Expenditure(OPEX) - customer only has non-physical costs, you dont have to do any upfront spending. 


## AWS Pricing Calculator
calculator.aws u just get a cost estimate. 

### Migration Evaluator
Estimate tool used to determine an organization exisiting on-premise cost so it can compare it against AWS costs for planned cloud migration


Theres also migration tools both for VMs into EC2 instances and DBs.

## AWS Cloud Adoption Framework
a whitepaper to help you plan migration from on premise to AWS
has 6 focus areas:
1. buidness perspective
2. people perspective
3. governance perspective
4. platform perspective
5. security perspective
6. Operations Perspective

Its basically a detailed guide on how to update the skills of each sector that has to deal with one of these. 

### AWS Support Plans
1. Basic
	1. Email support only for billing and account 
	2. 7 trusted advisor checks
	3. free
2. Develop
	1. Tech support via Email ~24 hours until reply
	2. no third party support
	3. General Guidance < 24 hours
	4. system Impaired < 12 hours
	5. 29 per month
3. Business
	1. Tech support via chat, phone 24/7
	2. Production system impaired < 4 hours
	3. Production system Down < 1 hr
	4. all trusted advisor checks
	5. 100 per month
4. Enterprise
	1. Business Critical System Down < 15m
	2. Personal COncierge
	3. TAM - technical Account manager
	4. 15000 per month

#### Technical Account Manager
provides both proactive guidance and reactive support. 

## Service Level Agreements
SLA: a formal commitment of expected levels of service between a customer and provider that can mean financial or credit compensation if the service is not met

SLI - service level indicator: indicates measure of performance 

SLO - Service level Objective: as a target percentage what objectives the provider has met over a period of time(availability, etc...)