---
creation date: 2025-12-26 22:29
---


<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Map Of Content

<< ---------------------------------------------------------------- >>

%% Begin Waypoint %%
- **[[Boot Process]]**
	- [[BIOS]]
	- [[Boot Process]]
	- [[Linux Kernel]]
	- [[Systemd]]

%% End Waypoint %%
#04-Tools #Linux

<< ---------------------------------------------------------------- >>

# Simplified view of the boot process
1. POST(Power on Self Test)
	1. runs diagnostics on hardware
	2. eg cpu, gpu other externally connected hardware like ram
2. Either BIOS(old) or GRUB(New) -> finds and starts the boot loader
3. [[BIOS]] - Basic Input Output System
4. GRUB - Grand Unified Boot Loader
	1. gives users a change to choose an OS, older kernels, recovery mode, memory testing and shell. 
	2. Usually loads the latest linux kernel and Initramfs automatically
	3. It starts the kernel and exits. 
5. Linux Kernel - 
	1. Initializes devices and loads drivers, kernel mmodules, the init program from initramfs. 
	2. it then mounts the root filesystem and starts init with PID of 1. User space begins here
	3. InitRamFS - acts as an initial root file system for the kernel to run in and do its operations, like an archive but not really a like a RAM drive (ram drives are file systems that live in memory)
	4. BIOS cant read hard drives in an efficient way - uses LBA which is clumsy? - so loading this archive into memory gives you a more robust kernel initializaiton
6. [[Systemd]] - the init program on most modern linux distribution.
	1. starts and manages essential services such as udevd and syslogd.
	2. sets up network configs and starts high level services like cron and cups(for printing). 
	3. Once those are set up it starts getty for user login or a graphic desktop manager like KDM - KDE desktop manager, GDM - Gnome Desktop manager - or lightDM. 
	4. the init program is also used to eprform an orderly computer shutdown