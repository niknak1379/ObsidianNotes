---
creation date: 2025-10-28 15:27
---
#AWS-Basics 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Terminalogies

<< ---------------------------------------------------------------- >>
## Solutions Architect:
A role that architects a technical solution using multiple systems via reasearch, documentation, experimentation.

## Cloud Architect
A solutions architect that is focused solely on architecting technical solutions using cloud services. 
you have to know about:
1. availability -> elastic load balancer in instances applied in different availability zones
2. scalability 
3. elasticity -> ability to automatically scale. Uses ASG Auto Scaling Groups(automatically add or remove servers based on scaling rules you define based on metrics)
4. fault tolerance -> no single point of failure -> RDS multi-AZ (multiple copies for failovers)
5. disaster recovery(high durabilty) -> CloudEndure Disaster Recovery continously replicates the machine into a low cost staging area. 
	1. BCP(buisness conintuity plan) a document that outlines how a buisness will continue operating during an unplanned disruption in services.
		1. RTO - recover time objective - how much time u can have down after disaster
		2. RPO - maximum acceptable amount of time since the last data recovery point.
		3. Options:
			1. Backup and restore
			2. pilot light(data replicated to a different region with minimal services to be able to replicate)
			3. warm standby
			4. multi-site active/active
6. security
7. cost
