---
creation date: 2024-07-16 14:23
modification date: Tuesday 16th July 2024 14:23:51
---
#Backend #DevOps

<< ---------------------------------------------------------------- >>

# Kubernetes

<< ---------------------------------------------------------------- >>

https://www.youtube.com/watch?v=r2zuL9MW6wc

A tool for [[Containers|containerization]] that packages the software and all its dependancies so that it runs reliably in all environments. 

## Kubernetes Cluster
### Control Plane(master node)
every cluster has a master node or control plane, its its own linux environment and can be a virtual or physical machine, you don't deploy the applications on this node, its used as a control center for the worker nodes

## Worker Nodes
just more linux machines
### Kubelet
listens to instructions from the Kube API, to deploy or destroy containers. 
### Kube-proxy
allows services to talk to other containers on other nodes. 
### Pod
where ur containers and applications actually run. 

## Kubernetes Deployments
basically you specify the state of the application in a YAML file, and the clusters ensures that the application has that state at all times.

## Kubernetes [[Scaling]]
https://www.youtube.com/watch?v=jM36M39MA3I&t=48s
https://www.youtube.com/watch?v=FfDI08sgrYY
### Kube Scheduler
Schedules Pods onto Nodes, by default it uses Best Effort Quality of Service to schedule pods,

You also have to set limits on the cpu and memory usage, this is kind of useless, I'm just familiarizing myself with it, I have to actually make one and deploy it to actually learn it.

Theres also a bunch of abstractions like **Services** and stuff that I need to learn. #todo 
[[Promethius]] for Monitoring