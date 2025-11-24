---
creation date: 2025-11-21 19:03
---
#05-Project-Docs #Personal-Website-Docs

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# AWS Lambda

<< ---------------------------------------------------------------- >>

Uses AWS SAM to build it out
Uses Github actions to create a new image and push it to the [[03-Application-Architecture/Network/AWS-Basics/AWS CLF-C02(Cloud Practitioner Certification)/05-Management and Development Tools|CloudFormation]]
using AWS Sam to build the .YML file. 

Git Push -> github Action -> build Dockerfile -> upload image to dockerHub -> redeploy Lambda

