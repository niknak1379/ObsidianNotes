---
creation date: 2025-10-30 11:30
---
#AWS-Basics 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# white paper

<< ---------------------------------------------------------------- >>

White paper created by AWS to help customers build using best-practices defined by aws. 

the frame work has 5 sections:

1. Operational Excellence
	1. Run and monitor systems
	2. Design Principles:
		1. Perform operations as code
		2. make frequent small reversible changes
		3. refine operations procedures frequently
		4. Anticipate failure
		5. Learn from all operational failures
2. Security
	1. Protect data and systems, mitigate risk
	2. Design Principles:
		1. Implement a strong identity foundation
		2. Enable traceability
		3. apply secuiurty at all layers
		4. Automate secuirty best practices
		5. protect data in transt and at rest
		6. keep people away from data
		7. prepare for secuirty events.
3. Reliability
	1. Mitigate and recover from disruptions
	2. Design Principles:
		1. Automatically recover from failures
		2. Test recovery procedures
		3. Scale horizontally to increase aggregate system availability
		4. stop guessing capacity
		5. manage change in automation
4. Performance Efficiency
	1. Use computing resouces effectively
	2. Design Principles:
		1. democratize advance techologies
			1. use already available cloud tech that is cheap instead of setting up ur own so u can focus on procurement
		2. Go global in minues
		3. use serverless architectures
		4. experiment more often
		5. consider mechanical sympathy
5. Cost Optimization
	1. Get the lowest price.
	2. Design Principles:
		1. implement cloud financial management
		2. adopt a consumption model
		3. measure overall efficiency 
		4. stop spending money on undifferentiated heavy lifting
		5. Analyze and attribute expenditure. 

How each pillar is organized:
1. Design Princples: list of design principles that need to be considred during implementation
2. Defenition: overview of the best practice category
3. Best Practices: detailed information about each best practice with AWS service
4. Resources: additional documentation, whitepapers, and video to implement this pillar. 

## Team organiztion
Usual on-premise enterprise:
Centralized team consist of techinical architect, solution architect
data architect, netwroking architect, security architect
Managed by either TOGAF or Zachman Framework
AWS proposed:
Distributed teams consisting of Practices(team experts who raise the bar), Mechanisms(automated checks for standards), Amazon Leadership Principles. 
Supported by a community of SMEs, and principle Engineers. 


### Amazon Leadership Principles
1. Customer Obsession
2. Ownership
3. invent and simplify
4. Are right, a lot
5. Learn and be Curious
6. Hire and Develop the Best
7. Insist on the highest Standards
8. Think big
9. Bias for action
10. Frugality
11. Earn Trust
12. Dive Deep
13. Have backbone; disagree and commit
14. Deliver results
15. Strive to be Earth's best Employer
16. Success and scale bring broad responsibility


### General Design Principles
1. Stop guessing your capacity needs
	1. cloud computing can be scaled on demand
2. Test systems at production scale
	1. clone production env to testing, tear down testing not in use to save money
3. Automate to make architectural experimentation easier
	1. cloudformation, stackjpdates
4. Allow for evolutionary architectures
	1. Ci/CD, rapid or nightly releases, 
5. Drive architectures using data
	1. cloudwatch, cloud trail
6. Improve through game days
	1. simulate traffic on production or purposely kill EC2 instances to see test recovery.

### AWS Well-Architected Tool
Is an auditing tool to be used to asset your cloud workloads for alignment with the AWS well architected framework

### AWS Architecture Center
a web portal that contains best practices and reference architectures. 