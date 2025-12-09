---
creation date: 2025-12-01 12:28
---
;#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# basics

<< ---------------------------------------------------------------- >>

enables governance, compliance, operational auditing, and risk auditing of your AWS account. 
Used to monitor API calls and actions made on an AWS account, easily identify which users and accounts made the call to AWS. 

Already logging by default and will collect logs for last 90 days via Event History. 
If you need more than 90 days you need to create a TRIAL
Trails are output to S3 and you have to use Amazon Athena to analyze them. 


## CloudTrail Lake
lets you run SQL like queries on the trails. Lake is managed and thus easier to setup while athena is more customizable and complex

