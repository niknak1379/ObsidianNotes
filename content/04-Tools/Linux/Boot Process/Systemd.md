---
creation date: 2025-11-18 19:53
---
#04-Tools #Linux

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Startup command basically

<< ---------------------------------------------------------------- >>
## SystemD (INIT) basics
pid 1 and stays running, loads, starts, stops system services. Also has the abilit to run timers, logging and on demand activation to save system resources. Its the default init for most modern linux distributions.

### Systemd vs System V
system v is the original linux init system adapted from unix systems. execution is linear. executes one command after another, with the introduction of multi core processing, it needed a replacement. 

Systemd is goal oriented, it works toward a goal when booting and therefore can adapt to things like some services taking too long. 

Systemd jobs are units, and units are activated by when a target is reached(event)

Unit Types:
1. Service units (.service)
	1. manage lifecycel of system services, daemons, startup, shutdown and restart behavior
2. Socket units - .socket
	1. define network sockets or IPC - inter process communication - that can activate services upon receiving connections or data
3. Target units - .target
	1. synchronization points during the boot process or for grouping other units. similar to run levels
4. Device units - .device
	1. represent kernel-managed devices and can be used to manage device specific actions or dependencies
5. Mount units - .mount
	1. units manage file system mount points, defining how and where file systems are mounted.
6. Automount units - .automount
	1. define mount points that are auto mounted on demand when accessed rather than at boot time
7. Swap units - .swap
	1. manage swap files or partitions, controlling activation and deactivation
8. Path units - .path
	1. monitor specific file system paths and can trigger the activation of other units when changes occur in those paths - eg a file is created or modified
9. Timer units - .timer
	1. define timers similar to [[04-Tools/Linux/Cron Jobs|Cron Jobs]] but managed by systemd
10. Snapshot units - .snapshot
	1. represent snapshots of current systemd state, allowing for potential rollback
11. Slice units - .slice
	1. used for resource management through linux 
12. Control Groups - cgroups
	1. allows for allocation and restriction of resources to processes
13. scope units (.scope): these units are used to manage groups of externally created processes, providing a way to monitor and control them within systemds framework
## systemctl
creates sysmlinks between startup services?, basically runs the scripts one after another?? is my understanding so far




