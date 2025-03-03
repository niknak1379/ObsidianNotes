#Backend #DevOps
##Important Topics
## C-groups
allocate resources among processes
## name Spaces
change access and visibility to other processes in the system. 

## Logs
[[Promethius]], [[grafana]]

# INTRO:
https://www.youtube.com/watch?v=pg19Z8LL06w

## Why
virtualization software, makes deploying apps a lot easier
Packages the app and all its dependancies and configs in one place

basically u dont have to install different services for different development environments(node, db, etc every time u switch between windows mac and linux)
U dont have to install the binaries every single time. 

### Before Docker
Dev team would give an artifact, DB and deployment instructions to the Operations team to configure and run it on the server. 
Could cause dependancy version conflicts(different parts of the app depending on diff versions of the same software)

### After Docker
U just give them a docker artifact, which includes everything including the dependancies

## Docker vs VMs
Docker virtualizes the OS application layer of an OS and uses the kernel of the host, while the VM virtualizes both app and kernel layers.
VMs get a lot bigger as a result and slower. Docker images are only a few MGBytes and can be run in seconds.
Docker desktop has a mini linux kernel which is why docker desktop can run linux based containers on both mac and windows.

### Docker Image Vs. Container
The image contains source code and also environment config, the dependancies and the linux os layer.
The container is what starts the application. **Container is the running instance of the image(u can run multiple containers based on one image(multiple instance of the application))**

## Docker Registries
basically an appstore for official and unofficial images of services like redis, DBs and etc [hub.docker.com]

u just pull the docker image from the hub and then run it

## [[IP(Internet Protocol)|Port]] Binding
**How do u access a container?**
you need to know what port the application inside the image is running on so that u can bind it to a custom port that u have with the flag -p. so for example -p 3000:80 (80 being the port the app inside the image defaults to being binded on to 3000)

## Dockerfile
basically a text file with instructions on how to build a docker image from normal files. You can have multi layered images. Lower layers have things like the java or node or python runtimes installed, upper layers could have application specific images.

* You define base images using a directive called `FROM` for example `FROM node:19-alpine`
* you run commands using `RUN` for example: `RUN npm install`
* than you have to copy all directories and necessary files into the image using the `COPY` command 
* You set the default location to run all of ur commands(the folder to run commands in) by using the `WORKDIR` command.
* The last command that starts the application in the dockerfile is the `CMD` command.

## Build Image from Dockerfile
`docker build -t nodeapp:1.0 ./dockerfileDir`


## Docker Compose
