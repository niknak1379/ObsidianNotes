---
creation date: 2025-12-09 15:04
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# AWS Batch

<< ---------------------------------------------------------------- >>

plans, schedules and executes your batch computing workloads across the full range of AWS compute services, can utilize Spot instance to save money. 

- Jobs
- jobs definitions
- job queues
- job scheduler
They run EC2, fargate, EKS

has 
- array jobs - share common paramteres, job definition, vCPUS
- multi-node parallel jobs, run single jobs that span multiple EC2 instances
- GPU jobs - run on gpu based instances

Job Dependencies - allows u to speciy a job id to another job. Only when the first one is completed does the second one run. 