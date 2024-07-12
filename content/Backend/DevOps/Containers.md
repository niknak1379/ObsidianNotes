#Backend #DevOps
## VM:
virtualization at the hardware level
Sth called a **HyperVisor(HV)** basically divides at a hardware level and manages the allocation of resources between different VMs. 
Virtual HW: presented to the guest OS as if they were real hardware
Type 1 HV: hardware HV
Type 2 HV: hosted HV, runs on top of an existing OS

Use Cases
1. having access to multiple OSes, like testing apps on diff platforms
2. isolation
3. legacy(running apps on legacy OSs and not change the main OS)

## Container:
mostly used for [[Microservice|micro-services]].
virtualization at the OS level. 
only whats installed in them they are able to access, provides isolation of process. 

### [[Docker]]:
use cases:
1. [[Microservice]]
2. rapid development and deployment
3. resource efficiency(smaller footprint than VMs)
### Kubernetes:
https://www.youtube.com/watch?v=2vMEQ5zs1ko
very useful for scaling docker containers

it has **Nodes**, one master node and then worker nodes on different machines,
the master nodes decides what the worker nodes run or do

it provides:
1. Deployment: decide when to restart the dockers, how many of the to have, what to do when a container crashes etc...
2. Development: deploys load balancers, makes a service for each docker file, and allows each service to talk to each other using the service names. 
3. Monitoring: lets u see logs, cpu load and other stuff