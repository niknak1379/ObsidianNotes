---
creation date: 2025-11-24 14:53
---
#03-Application-Architecture #FrontEnd #HTML #Accessiblity #Untitled

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Intro

<< ---------------------------------------------------------------- >>

AWS's PaaS(platform as a service)

allows customers to develop, run and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app. 

You can also run docker containers here.  

## Environments
Web vs Worker Environmentes

Web:
- creates ASG
- creates an ELB
- 2 types of web Environment
	1. Single-Instance Env
		1. still uses an ASG but desired capacity set to 1 to ensure server is always running
	2. Load-Balanced ENV
		1. Uses ASG and set to scale
		2. uses an ELB
		3. Designed to scale 
Worker:
- creates an ASG
- Creates an SQS queue
- Installs SQS Daemon on EC2 instance
- Creates cloudWatch alarm to dynamically scale instances based on health