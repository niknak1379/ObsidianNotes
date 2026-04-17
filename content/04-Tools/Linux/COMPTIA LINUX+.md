---
creation date: 2026-04-16 14:16
---
#04-Tools #Linux

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>

# CompTIA Linux+ XK0-006 — Exam Objectives Quick Reference

> **Exam Number:** XK0-006 V8 | **Questions:** Max 90 | **Time:** 90 min | **Format:** Multiple-choice & Performance-based

---

## Domain 1.0 — System Management (23%)

### 1.1 Basic Linux Concepts

#### Boot Process

|Item|Description|Example|
|---|---|---|
|**Bootloader**|First software that runs after firmware, loads the kernel|`grub2-mkconfig -o /boot/grub2/grub.cfg`|
|**Configuration files**|GRUB config files that control boot menu and kernel options|`cat /etc/default/grub`|
|**Kernel**|Core of Linux — manages hardware, memory, and processes|`uname -r`|
|**Parameters**|Options passed to the kernel at boot time|`cat /proc/cmdline`|
|**initrd**|Temporary RAM-based filesystem loaded before root FS mounts|`dracut --force /boot/initramfs-$(uname -r).img $(uname -r)`|
|**PXE**|Boot a machine over the network instead of local disk|`dhclient -v eth0` _(client requests PXE boot info)_|

#### Filesystem Hierarchy Standard (FHS)

|Directory|Description|Example|
|---|---|---|
|`/`|Root of the entire filesystem — top of the directory tree|`ls /`|
|`/bin`|Essential user binaries needed in single-user mode|`ls /bin`|
|`/boot`|Kernel images, initramfs, and bootloader files|`ls /boot`|
|`/dev`|Device files representing hardware components|`ls /dev/sda*`|
|`/etc`|System-wide configuration files (text-based)|`ls /etc`|
|`/home`|Home directories for regular users|`ls /home`|
|`/lib`|Shared libraries needed by `/bin` and `/sbin` binaries|`ls /lib64`|
|`/proc`|Virtual filesystem exposing live kernel and process info|`cat /proc/cpuinfo`|
|`/sbin`|System/admin binaries intended for root use|`ls /sbin`|
|`/tmp`|Temporary files — usually cleared on reboot|`ls /tmp`|
|`/usr`|Secondary hierarchy — most installed software lives here|`ls /usr/bin`|
|`/var`|Variable data that changes during operation (logs, mail, cache)|`ls /var/log`|

#### Server Architectures

|Item|Description|Example|
|---|---|---|
|**AArch64**|64-bit ARM architecture — used in servers, phones, Apple Silicon|`uname -m` _(outputs aarch64)_|
|**RISC-V**|Open, royalty-free instruction set architecture|`uname -m` _(outputs riscv64)_|
|**x86**|Classic 32-bit Intel architecture — limited to 4 GB RAM|`file /bin/bash`|
|**x86_64/AMD64**|Dominant 64-bit extension of x86 — used in most modern servers|`uname -m` _(outputs x86_64)_|

#### Distributions

|Item|Description|Example|
|---|---|---|
|**RPM-based**|Uses `.rpm` packages and `dnf`/`yum` — RHEL, Fedora, AlmaLinux|`dnf install nginx`|
|**dpkg-based**|Uses `.deb` packages and `apt` — Debian, Ubuntu, Kali|`apt install nginx`|

#### GUI

|Item|Description|Example|
|---|---|---|
|**Display managers**|Graphical login screen (GDM, SDDM, LightDM)|`systemctl status gdm`|
|**Window managers**|Controls how windows are drawn and arranged|`which openbox`|
|**X Server**|Traditional display system for Linux (Xorg/X11)|`echo $DISPLAY`|
|**Wayland**|Modern replacement for X11 — more secure, faster|`echo $WAYLAND_DISPLAY`|

#### Software Licensing

|Item|Description|Example|
|---|---|---|
|**Opensource software**|Source code is publicly available and modifiable|`cat /usr/share/licenses/bash/COPYING`|
|**Free software**|FSF-defined four freedoms — free as in freedom, not price|`grep -r "GPL" /usr/share/licenses/`|
|**Proprietary software**|Source is closed; usage governed by a restrictive EULA|`rpm -qi package` _(check license field)_|
|**Copyleft**|License requiring derivatives to use the same license (GPL)|`cat /usr/share/licenses/kernel/COPYING`|

---

### 1.2 Linux Device Management

#### Kernel Modules

|Command|Description|Example|
|---|---|---|
|`depmod`|Builds the kernel module dependency map|`depmod -a`|
|`insmod`|Inserts a module by file path — no dependency resolution|`insmod /lib/modules/$(uname -r)/kernel/drivers/net/e1000.ko`|
|`lsmod`|Lists all currently loaded kernel modules|`lsmod \| grep usb`|
|`modinfo`|Shows metadata about a kernel module|`modinfo e1000`|
|`modprobe`|Loads a module and all its dependencies automatically|`modprobe e1000`|
|`rmmod`|Removes a loaded kernel module|`rmmod e1000`|

#### Device Management

|Command|Description|Example|
|---|---|---|
|`dmesg`|Prints the kernel ring buffer — hardware and driver events|`dmesg -T \| tail -20`|
|`dmidecode`|Reads firmware SMBIOS/DMI table for hardware info|`dmidecode -t memory`|
|`ipmitool`|Interfaces with IPMI/BMC for out-of-band server management|`ipmitool -I lanplus -H mgmt-ip -U admin -P pass power status`|
|`lm_sensors`|Reads hardware sensor data — temps, voltages, fan speeds|`sensors`|
|`lscpu`|Displays detailed CPU architecture information|`lscpu`|
|`lshw`|Comprehensive hardware inventory tool|`lshw -short`|
|`lsmem`|Shows memory blocks and their online/offline state|`lsmem`|
|`lspci`|Lists all PCI/PCIe devices and their drivers|`lspci -k`|
|`lsusb`|Lists all connected USB devices|`lsusb -t`|

#### initrd Management

|Command|Description|Example|
|---|---|---|
|`dracut`|Modern tool for building initramfs images on RHEL systems|`dracut --force`|
|`mkinitrd`|Older initramfs builder — often a wrapper for dracut today|`mkinitrd /boot/initrd-$(uname -r).img $(uname -r)`|

#### Custom Hardware

|Item|Description|Example|
|---|---|---|
|**Embedded systems**|Linux on purpose-built hardware with custom kernels|`file /boot/zImage`|
|**GPU use cases**|GPUs used for display, compute (ML/AI), and virtualization|`lspci \| grep -i vga`|
|`nvtop`|Interactive GPU process monitor — like htop for GPUs|`nvtop`|

---

### 1.3 Storage Management

#### Logical Volume Manager (LVM) — Logical Volumes

|Command|Description|Example|
|---|---|---|
|`lvchange`|Changes attributes of a logical volume (activate/deactivate)|`lvchange -ay /dev/vg0/lv_data`|
|`lvcreate`|Creates a new logical volume in a volume group|`lvcreate -L 20G -n mylv myvg`|
|`lvdisplay`|Shows detailed information about logical volumes|`lvdisplay /dev/vg0/mylv`|
|`lvremove`|Removes a logical volume|`lvremove /dev/vg0/mylv`|
|`lvresize`/`lvextend`|Resizes or grows a logical volume|`lvextend -L +10G /dev/vg0/mylv`|
|`lvs`|Shows a concise table of all logical volumes|`lvs`|

#### LVM — Volume Groups

|Command|Description|Example|
|---|---|---|
|`vgchange`|Activates or deactivates a volume group|`vgchange -ay myvg`|
|`vgcreate`|Creates a volume group from one or more physical volumes|`vgcreate myvg /dev/sdb /dev/sdc`|
|`vgdisplay`|Shows detailed volume group information|`vgdisplay myvg`|
|`vgexport`|Prepares a VG to be moved to another system|`vgexport myvg`|
|`vgextend`|Adds a new PV to an existing volume group|`vgextend myvg /dev/sdd`|
|`vgimport`|Imports a volume group exported from another system|`vgimport myvg`|
|`vgremove`|Removes a volume group|`vgremove myvg`|
|`vgs`|Shows a concise table of all volume groups|`vgs`|
|`vgscan`|Scans all disks for volume groups|`vgscan`|

#### LVM — Physical Volumes

|Command|Description|Example|
|---|---|---|
|`pvcreate`|Initializes a disk or partition as a physical volume|`pvcreate /dev/sdb`|
|`pvdisplay`|Shows detailed physical volume information|`pvdisplay /dev/sdb`|
|`pvmove`|Migrates data off a physical volume to others in the VG|`pvmove /dev/sdb`|
|`pvremove`|Removes LVM metadata from a physical volume|`pvremove /dev/sdb`|
|`pvresize`|Resizes a PV after its underlying partition has grown|`pvresize /dev/sdb`|
|`pvs`|Shows a concise table of all physical volumes|`pvs`|
|`pvscan`|Scans all disks for physical volumes|`pvscan`|

#### Partitions

|Command|Description|Example|
|---|---|---|
|`blkid`|Shows UUID, filesystem type, and label for block devices|`blkid /dev/sdb1`|
|`fdisk`/`gdisk`|Interactive MBR/GPT partition editors|`fdisk /dev/sdb`|
|`growpart`|Grows a partition to fill available space|`growpart /dev/sda 1`|
|`lsblk`|Tree view of all block devices, partitions, and mount points|`lsblk -o NAME,SIZE,TYPE,MOUNTPOINT`|
|`parted`|Scriptable partition tool supporting both MBR and GPT|`parted /dev/sdb print`|

#### Filesystems

|Format|Description|Example|
|---|---|---|
|`xfs`|High-performance journaling filesystem — default on RHEL|`mkfs.xfs /dev/sdb1`|
|`ext4`|Mature, battle-tested default Linux filesystem|`mkfs.ext4 /dev/sdb1`|
|`btrfs`|Modern CoW filesystem with built-in snapshots and checksums|`mkfs.btrfs /dev/sdb1`|
|`tmpfs`|Virtual filesystem that exists entirely in RAM|`mount -t tmpfs tmpfs /mnt/ram`|

#### Filesystem Utilities

|Command|Description|Example|
|---|---|---|
|`df`|Shows disk space usage by filesystem|`df -h`|
|`du`|Shows disk usage of a file or directory|`du -sh /var/log`|
|`fio`|Flexible I/O benchmarking tool for storage performance testing|`fio --name=test --rw=randread --bs=4k --size=1G`|
|`fsck`|Checks and repairs a filesystem (run on unmounted FS)|`fsck -y /dev/sdb1`|
|`mkfs`|Creates a new filesystem on a partition or device|`mkfs.ext4 /dev/sdb1`|
|`resize2fs`|Grows or shrinks an ext4 filesystem|`resize2fs /dev/vg0/mylv`|
|`xfs_growfs`|Grows an XFS filesystem (must be mounted)|`xfs_growfs /mnt/data`|
|`xfs_repair`|Checks and repairs an XFS filesystem|`xfs_repair /dev/sdb1`|

#### RAID

|Item|Description|Example|
|---|---|---|
|`/proc/mdstat`|Live kernel view of all software RAID arrays|`cat /proc/mdstat`|
|`mdadm`|Tool for creating and managing Linux software RAID arrays|`mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc`|

#### Mounted Storage — Mounting

|Item|Description|Example|
|---|---|---|
|`/etc/fstab`|Defines filesystems to mount at boot (use UUIDs)|`cat /etc/fstab`|
|`/etc/mtab`|Tracks currently mounted filesystems (often symlink to /proc/mounts)|`cat /etc/mtab`|
|`/proc/mounts`|Authoritative live kernel view of all mounted filesystems|`cat /proc/mounts`|
|`autofs`|Mounts filesystems on demand when a path is accessed|`systemctl enable --now autofs`|
|`mount`|Attaches a filesystem to the directory tree|`mount /dev/sdb1 /mnt/data`|
|`umount`|Detaches a mounted filesystem|`umount /mnt/data`|

#### Mount Options

|Option|Description|Example|
|---|---|---|
|`noatime`|Don't update access time on reads — improves performance|`mount -o noatime /dev/sdb1 /mnt/data`|
|`nodev`|Don't interpret device files — security hardening|`mount -o nodev /dev/sdb1 /mnt/data`|
|`nodiratime`|Don't update directory access times|`mount -o nodiratime /dev/sdb1 /mnt/data`|
|`noexec`|Prevent execution of binaries — security hardening for /tmp|`mount -o noexec /dev/sdb1 /mnt/data`|
|`nofail`|Don't halt boot if this filesystem fails to mount|`mount -o nofail /dev/sdb1 /mnt/data`|
|`nosuid`|Ignore setuid bits — prevents privilege escalation|`mount -o nosuid /dev/sdb1 /mnt/data`|
|`remount`|Re-apply options to an already-mounted filesystem|`mount -o remount,ro /mnt/data`|
|`ro`|Mount read-only|`mount -o ro /dev/sdb1 /mnt/data`|
|`rw`|Mount read-write (default)|`mount -o rw /dev/sdb1 /mnt/data`|

#### Network Mounts

|Item|Description|Example|
|---|---|---|
|**NFS**|Native Linux network filesystem — shares directories over network|`mount -t nfs server:/export /mnt/nfs`|
|**SMB/Samba**|Windows-compatible file sharing protocol|`mount -t cifs //server/share /mnt/smb -o username=user`|

#### Inodes

|Item|Description|Example|
|---|---|---|
|**Inodes**|Data structure storing all metadata about a file except its name|`stat /etc/passwd`|
|Inode usage|Check inode usage — can exhaust even with free disk space|`df -i`|

---

### 1.4 Network Services & Configuration

#### Network Configuration Files

|File|Description|Example|
|---|---|---|
|`/etc/hosts`|Static local hostname-to-IP mapping table|`cat /etc/hosts`|
|`/etc/resolv.conf`|Configures DNS servers and search domains|`cat /etc/resolv.conf`|
|`/etc/nsswitch.conf`|Controls the order of name resolution sources|`grep hosts /etc/nsswitch.conf`|

#### NetworkManager

|Command|Description|Example|
|---|---|---|
|`nmcli`|Full-featured command-line interface for NetworkManager|`nmcli connection show`|
|`nmconnect`|Simplified interactive connection tool for NetworkManager|`nmcli device connect eth0`|

#### Netplan

|Command|Description|Example|
|---|---|---|
|`netplan apply`|Apply Netplan configuration changes immediately|`netplan apply`|
|`netplan status`|Show current applied network state|`netplan status`|
|`netplan try`|Apply changes with automatic rollback after 120 seconds|`netplan try`|
|`/etc/netplan`|Directory containing YAML network configuration files|`ls /etc/netplan/`|

#### Common Network Tools

| Command        | Description                                              | Example                       |
| -------------- | -------------------------------------------------------- | ----------------------------- |
| `arp`          | View and manage the ARP cache (IP-to-MAC mappings)       | `arp -n`                      |
| `curl`         | Transfer data using HTTP, HTTPS, FTP and many protocols  | `curl -I https://example.com` |
| `dig`          | Preferred full-featured DNS query tool                   | `dig google.com @8.8.8.8`     |
| `ethtool`      | Query and configure NIC hardware settings and statistics | `ethtool eth0`                |
| `hostname`     | View or set the system's hostname                        | `hostname -f`                 |
| `ip address`   | View and manage IP addresses on interfaces               | `ip address show`             |
| `ip link`      | View and manage network interface state and properties   | `ip link show`                |
| `ip route`     | View and manage the routing table                        | `ip route show`               |
| `iperf3`       | Network bandwidth benchmark tool                         | `iperf3 -c server-ip`         |
| `mtr`          | Combines ping and traceroute into a live path monitor    | `mtr --report google.com`     |
| `nc`           | Netcat — creates raw TCP/UDP connections for testing     | `nc -zv host 22`              |
| `nmap`         | Network port scanner and host discovery tool             | `nmap -sV 192.168.1.0/24`     |
| `nslookup`     | Basic interactive DNS query tool                         | `nslookup google.com`         |
| `ping`/`ping6` | Send ICMP echo requests to test basic reachability       | `ping -c 4 8.8.8.8`           |
| `ss`           | Modern replacement for netstat — shows socket statistics | `ss -tulnp`                   |
| `tcpdump`      | Packet capture tool for live traffic analysis            | `tcpdump -i eth0 port 80`     |
| `tracepath`    | Traces network path and discovers MTU (no root required) | `tracepath google.com`        |
| `traceroute`   | Shows hop-by-hop path packets take to a destination      | `traceroute google.com`       |

---

### 1.5 Common Shell Operations

#### Environmental Variables

|Variable|Description|Example|
|---|---|---|
|`DISPLAY`|Identifies the X11 display server for GUI applications|`echo $DISPLAY`|
|`HOME`|Current user's home directory path|`echo $HOME`|
|`PATH`|Colon-separated list of directories searched for commands|`echo $PATH`|
|`PS1`|Primary prompt string — defines what your shell prompt looks like|`echo $PS1`|
|`SHELL`|Path to the user's default shell|`echo $SHELL`|
|`USER`|Current logged-in username|`echo $USER`|

#### Paths

|Item|Description|Example|
|---|---|---|
|`~`|Shorthand for the current user's home directory|`cd ~`|
|`/`|Filesystem root — the top of the entire directory tree|`ls /`|
|`.`|Current directory|`./script.sh`|
|`..`|Parent directory — one level up|`cd ..`|
|`-`|Previous working directory — toggles between last two locations|`cd -`|

#### Shell Environment Configurations

|File|Description|Example|
|---|---|---|
|`.bashrc`|Runs for interactive non-login shells (new terminal window)|`source ~/.bashrc`|
|`.bash_profile`|Runs for login shells only (SSH login, console login)|`cat ~/.bash_profile`|
|`.profile`|Login shell config used when `.bash_profile` doesn't exist|`cat ~/.profile`|

#### Channel Redirection

|Operator|Description|Example|
|---|---|---|
|`<`|Redirect file to stdin|`sort < names.txt`|
|`>`|Redirect stdout to file (overwrite)|`ls > files.txt`|
|`<<`|Here document — feed multi-line text as stdin|`cat << EOF`|
|`>>`|Redirect stdout to file (append)|`echo "line" >> log.txt`|
|`\|`|Pipe stdout of one command into stdin of the next|`ls \| grep conf`|
|Standard output|Stream 1 — default output destination of a command|`echo "hello" > /dev/stdout`|
|Standard error|Stream 2 — where error messages are written|`cmd 2> errors.txt`|
|Standard input|Stream 0 — default input source for a command|`read name < /dev/stdin`|
|Here docs `<<<`|Here string — feed a single string as stdin|`bc <<< "5 * 8"`|

#### Basic Shell Utilities

|Command|Description|Example|
|---|---|---|
|`!`|Repeat a command from history by number or string|`!42`|
|`!!`|Repeat the last command|`sudo !!`|
|`alias`|Create a shorthand name for a longer command|`alias ll='ls -lah'`|
|`awk`|Pattern scanning and field-based text processing tool|`awk -F: '{print $1}' /etc/passwd`|
|`bc`|Command-line arbitrary precision calculator|`echo "5 * 8" \| bc`|
|`cat`|Concatenate and display file contents|`cat /etc/hosts`|
|`cut`|Extract fields or character ranges from lines|`cut -d: -f1 /etc/passwd`|
|`echo`|Print text to stdout|`echo "Hello World"`|
|`grep`|Search for patterns in text|`grep -i "error" /var/log/syslog`|
|`head`|Show the first N lines of a file|`head -n 20 /var/log/syslog`|
|`history`|Show the command history list|`history \| tail -20`|
|`less`|Page through output interactively (supports forward/backward)|`less /var/log/syslog`|
|`more`|Older forward-only file pager|`more /etc/passwd`|
|`printf`|Formatted output — more precise than echo|`printf "%-10s %5d\n" "Alice" 42`|
|`sed`|Stream editor for non-interactive text transformation|`sed 's/old/new/g' file.txt`|
|`sort`|Sort lines of text input|`sort -n numbers.txt`|
|`source`|Execute a script in the current shell (not a subshell)|`source ~/.bashrc`|
|`tail`|Show the last N lines of a file|`tail -f /var/log/syslog`|
|`tee`|Write to both stdout and a file simultaneously|`command \| tee output.txt`|
|`tr`|Translate or delete characters|`echo "hello" \| tr 'a-z' 'A-Z'`|
|`uname`|Print system information (kernel, arch, hostname)|`uname -a`|
|`uniq`|Filter or count duplicate adjacent lines|`sort file.txt \| uniq -c`|
|`wc`|Count lines, words, and characters|`wc -l /etc/passwd`|
|`xargs`|Build and execute commands from stdin|`find . -name "*.log" \| xargs rm`|

#### Text Editors

|Editor|Description|Example|
|---|---|---|
|`vi`/`vim`|Modal terminal text editor — universal on all Unix/Linux|`vim /etc/nginx/nginx.conf`|
|`nano`|Beginner-friendly modeless terminal text editor|`nano /etc/hosts`|

---

### 1.6 Backup & Restore Operations

#### Archiving

|Command|Description|Example|
|---|---|---|
|`cpio`|Copy-in/copy-out archiver — used internally by RPM and initramfs|`find /home -type f \| cpio -ov > backup.cpio`|
|`tar`|Standard Linux archiving tool — bundles files into a single archive|`tar -czvf backup.tar.gz /home/alice`|

#### Compression Tools

|Command|Description|Example|
|---|---|---|
|`7-Zip`|Cross-platform archiver with excellent compression ratio|`7z a archive.7z /home/alice`|
|`bzip2`|Better compression than gzip, slower — common in source tarballs|`bzip2 file.txt`|
|`gzip`|Fast, widely supported compression — most common on Linux|`gzip file.txt`|
|`unzip`|Extract `.zip` files — the format native to Windows|`unzip archive.zip -d /target/`|
|`xz`|Best compression ratio of standard tools — used for kernel tarballs|`xz -k file.txt`|

#### Other Tools

| Command    | Description                                                        | Example                                                    |
| ---------- | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| `dd`       | Raw block-level copying — disk imaging, cloning, wiping            | `dd if=/dev/sda of=/backup/disk.img bs=4M status=progress` |
| `ddrescue` | Data recovery tool that handles read errors and supports resume    | `ddrescue -r 3 /dev/sdb /backup/rescue.img rescue.log`     |
| `rsync`    | Efficient incremental file synchronization locally or over network | `rsync -avzh /home/ user@server:/backup/home/`             |
| `zcat`     | Print contents of a gzip-compressed file without decompressing     | `zcat /var/log/syslog.2.gz`                                |
| `zgrep`    | Run grep against gzip-compressed files directly                    | `zgrep "error" /var/log/syslog.2.gz`                       |
| `zless`    | Page through a gzip-compressed file interactively                  | `zless /var/log/syslog.1.gz`                               |

---

### 1.7 Virtualization

#### Linux Hypervisors

|Item|Description|Example|
|---|---|---|
|**QEMU**|Full system emulator — handles device emulation for VMs|`qemu-img info vm.qcow2`|
|**KVM**|Kernel module that enables near-native CPU virtualization|`lsmod \| grep kvm`|

#### Virtual Machines

|Item|Description|Example|
|---|---|---|
|**Paravirtualized drivers**|Drivers that know they're virtualized for better performance|`lspci \| grep -i virtio`|
|**VirtIO**|Standard paravirtualization framework for KVM guests|`lsblk` _(shows vda for VirtIO disk)_|
|**Convert**|Convert disk images between formats (qcow2, raw, vmdk)|`qemu-img convert -f vmdk -O qcow2 vm.vmdk vm.qcow2`|
|**Resize**|Resize a VM disk image|`qemu-img resize vm.qcow2 +20G`|
|**Image properties**|View VM disk image metadata and information|`qemu-img info vm.qcow2`|
|**VM states**|Running, Paused, Saved, Shut off, Crashed states of a VM|`virsh list --all`|
|**Nested virtualization**|Running a hypervisor inside a VM|`cat /sys/module/kvm_intel/parameters/nested`|

#### VM Operations

|Item|Description|Example|
|---|---|---|
|**Storage**|Attaching disks and volumes to virtual machines|`virsh attach-disk myvm /dev/sdb vdb`|
|**RAM**|Allocating memory to virtual machines|`virsh setmem myvm 4G --live`|
|**CPU**|Assigning virtual CPUs to VMs|`virsh setvcpus myvm 4 --live`|
|**Network**|Configuring virtual NICs for VMs|`virsh attach-interface myvm bridge br0`|
|**Baseline image templates**|Pre-built, generalized images for rapid VM deployment|`virt-clone --original base-vm --name new-vm --auto-clone`|
|**Cloning**|Creating a full independent copy of a VM|`virt-clone --original base-vm --name new-vm --auto-clone`|
|**Migrations**|Moving a running or stopped VM to another physical host|`virsh migrate --live myvm qemu+ssh://dest/system`|
|**Snapshots**|Capturing the complete state of a VM at a point in time|`virsh snapshot-create-as myvm snap1 "Before upgrade"`|

#### Bare Metal vs. Virtual Machines

|Item|Description|Example|
|---|---|---|
|**Bare metal**|Full hardware access — no virtualization overhead|`dmidecode -s system-product-name`|
|**Virtual machines**|Shared hardware via hypervisor — flexible but with overhead|`systemd-detect-virt`|

#### Network Types

| Type                   | Description                                                  | Example                                  |
| ---------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| **Bridged**            | VM appears as a full peer on the physical LAN with own IP    | `virsh net-info default`                 |
| **NAT**                | VMs on private network; host translates traffic to outside   | `firewall-cmd --zone=libvirt --list-all` |
| **Host-only/isolated** | VMs can only communicate with host and each other            | `virsh net-define isolated.xml`          |
| **Routed**             | Host routes traffic between VM network and external networks | `virsh net-create routed.xml`            |
| **Open**               | Virtual switch with no firewall rules applied by libvirt     | `virsh net-define open.xml`              |

#### Virtual Machine Tools

| Tool           | Description                                                | Example                     |
| -------------- | ---------------------------------------------------------- | --------------------------- |
| `libvirt`      | Management API and daemon for KVM/QEMU VMs                 | `systemctl status libvirtd` |
| `virsh`        | Primary command-line interface to libvirt                  | `virsh list --all`          |
| `virt-manager` | Graphical desktop application for managing KVM/libvirt VMs | `virt-manager`              |

---

## Domain 2.0 — Services and User Management (20%)

### 2.1 File & Directory Management

#### Utilities

| Command  | Description                                                  | Example                                  |
| -------- | ------------------------------------------------------------ | ---------------------------------------- |
| `cd`     | Change the current working directory                         | `cd /etc/nginx`                          |
| `cp`     | Copy files and directories                                   | `cp -a /source /dest`                    |
| `diff`   | Show line-by-line differences between two files              | `diff -u file1.txt file2.txt`            |
| `file`   | Determine file type by inspecting magic bytes                | `file /bin/bash`                         |
| `find`   | Search the live filesystem with rich criteria                | `find / -name "*.log" -mtime +30`        |
| `ln`     | Create hard or symbolic links between files                  | `ln -s /etc/nginx/nginx.conf nginx.conf` |
| `locate` | Fast filename search using a pre-built database              | `locate passwd`                          |
| `ls`     | List directory contents                                      | `ls -lah`                                |
| `lsof`   | List open files — shows which processes have files open      | `lsof -i :80`                            |
| `mkdir`  | Create directories                                           | `mkdir -p /opt/app/logs`                 |
| `mv`     | Move or rename files and directories                         | `mv old.txt new.txt`                     |
| `pwd`    | Print the current working directory                          | `pwd`                                    |
| `rm`     | Remove files and directories                                 | `rm -rf /tmp/old_dir`                    |
| `rmdir`  | Remove empty directories only                                | `rmdir emptydir`                         |
| `sdiff`  | Side-by-side diff display of two files                       | `sdiff file1.txt file2.txt`              |
| `stat`   | Show detailed file metadata — permissions, timestamps, inode | `stat /etc/passwd`                       |
| `touch`  | Create empty files or update timestamps                      | `touch newfile.txt`                      |

#### Links

|Type|Description|Example|
|---|---|---|
|**Symbolic link**|A file containing a path to another file — can cross filesystems|`ln -s /var/www/html /opt/webroot`|
|**Hard link**|A second directory entry pointing to the same inode|`ln source.txt hardlink.txt`|

#### Device Types in /dev

|Type|Description|Example|
|---|---|---|
|**Block devices**|Transfer data in fixed-size blocks — support random access (disks)|`ls -l /dev/sda`|
|**Character devices**|Transfer data one byte at a time as a sequential stream|`ls -l /dev/tty`|
|**Special character devices**|Kernel-provided virtual devices (/dev/null, /dev/zero, /dev/random)|`cat /dev/null`|

---

### 2.2 Local Account Management

#### Adding Accounts

|Command|Description|Example|
|---|---|---|
|`adduser`|High-level interactive user creation wrapper (Debian/Ubuntu)|`adduser alice`|
|`groupadd`|Create a new group|`groupadd -g 1500 developers`|
|`useradd`|Low-level user creation with explicit options|`useradd -m -s /bin/bash alice`|

#### Deleting Accounts

|Command|Description|Example|
|---|---|---|
|`deluser`|High-level user removal wrapper (Debian/Ubuntu)|`deluser --remove-home alice`|
|`groupdel`|Remove a group|`groupdel developers`|
|`userdel`|Remove a user account|`userdel -r alice`|

#### Modifying Accounts

|Command|Description|Example|
|---|---|---|
|`chsh`|Change a user's login shell|`chsh -s /bin/zsh alice`|
|`groupmod`|Modify group attributes (name, GID)|`groupmod -n newname developers`|
|`passwd`|Manage passwords — set, lock, unlock, expire|`passwd alice`|
|`usermod`|Modify user attributes — groups, shell, home, expiry|`usermod -aG wheel alice`|

#### Locking Accounts

| Command      | Description                                          | Example                     |
| ------------ | ---------------------------------------------------- | --------------------------- |
| `chage`      | Manage password aging — also expires accounts        | `chage -E 2025-12-31 alice` |
| `passwd -l`  | Lock an account by prepending ! to the password hash | `passwd -l alice`           |
| `usermod -L` | Lock an account (same mechanism as passwd -l)        | `usermod -L alice`          |

#### Expiration

| Item                    | Description                                                   | Example                              |
| ----------------------- | ------------------------------------------------------------- | ------------------------------------ |
| **Configuration files** | `/etc/login.defs` defines system-wide password aging defaults | `grep PASS_MAX_DAYS /etc/login.defs` |
| `chage`                 | Set and view password and account expiration dates            | `chage -l alice`                     |

#### Listing Accounts

|Command|Description|Example|
|---|---|---|
|`getent passwd`|Query account databases including LDAP/NIS|`getent passwd alice`|
|`groups`|List group memberships for a user|`groups alice`|
|`id`|Show UID, GID, and all group memberships|`id alice`|
|`last`|Show login history from /var/log/wtmp|`last -n 20`|
|`lastlog`|Show most recent login time for every account|`lastlog -u alice`|
|`w`|Who is logged in and what they are doing (detailed)|`w`|
|`who`|List currently logged-in users|`who`|
|`whoami`|Print the effective current username|`whoami`|

#### User Profile Templates

|Item|Description|Example|
|---|---|---|
|`/etc/profile`|System-wide shell initialization script for all login shells|`cat /etc/profile`|
|`/etc/skel`|Skeleton directory — contents copied to new user home dirs|`ls -la /etc/skel`|

#### Account Files

|File|Description|Example|
|---|---|---|
|`/etc/group`|Group database — name, GID, and member list|`cat /etc/group`|
|`/etc/passwd`|User account database — username, UID, GID, home, shell|`cat /etc/passwd`|
|`/etc/shadow`|Password hashes and aging information (root-readable only)|`sudo cat /etc/shadow`|

#### Attributes

|Item|Description|Example|
|---|---|---|
|**UID**|Unique numeric user identifier used by the kernel|`id -u alice`|
|**GID**|Unique numeric group identifier|`id -g alice`|
|**EUID**|Effective UID used for permission checks (changes with setuid)|`python3 -c "import os; print(os.geteuid())"`|
|**EGID**|Effective GID used for permission checks (changes with setgid)|`python3 -c "import os; print(os.getegid())"`|

#### Account Types

|Type|Description|Example|
|---|---|---|
|**User accounts**|Human interactive accounts — UID 1000+ — have home dirs|`useradd -m alice`|
|**System accounts**|OS-created accounts for kernel subsystems — UID 1–999|`useradd -r sysaccount`|
|**Service accounts**|Created by packages to run daemons with minimal privilege|`useradd -r -s /sbin/nologin nginx`|
|**UID range**|UID ranges define account type — configured in /etc/login.defs|`grep UID_MIN /etc/login.defs`|

---

### 2.3 Process & Job Management

#### Process Verification

|Command|Description|Example|
|---|---|---|
|`/proc/<PID>`|Virtual directory exposing live kernel data about a process|`cat /proc/1234/status`|
|`atop`|Advanced system monitor that records historical performance|`atop`|
|`htop`|Enhanced interactive process viewer with mouse support|`htop -u alice`|
|`lsof`|List open files and network connections per process|`lsof -p 1234`|
|`mpstat`|Reports CPU utilization per core|`mpstat -P ALL 1 5`|
|`pidstat`|Per-process CPU, memory, and I/O statistics|`pidstat -u 1 5`|
|`ps`|Static snapshot of running processes|`ps aux --sort=-%cpu \| head -15`|
|`pstree`|Shows processes in a visual parent-child hierarchy tree|`pstree -p`|
|`strace`|Traces every system call a process makes|`strace -p 1234`|
|`top`|Real-time continuously updating process monitor|`top -u alice`|

#### Process ID

|Item|Description|Example|
|---|---|---|
|**PPID**|Parent Process ID — the PID of the process that spawned this one|`echo $PPID`|
|**PID**|Unique numeric Process ID assigned by the kernel|`echo $$`|

#### Process States

|State|Description|Example|
|---|---|---|
|**Running**|Actively executing on a CPU or in the run queue|`ps aux \| awk '$8=="R"'`|
|**Blocked**|Waiting on a resource — encompasses D and S states|`ps aux \| awk '$8=="D"'`|
|**Sleeping**|Waiting for an event — can be woken by a signal|`ps aux \| awk '$8=="S"'`|
|**Stopped**|Execution suspended by SIGSTOP or Ctrl+Z|`ps aux \| awk '$8=="T"'`|
|**Zombie**|Finished but exit status not collected by parent yet|`ps aux \| awk '$8=="Z"'`|

#### Priority

|Command|Description|Example|
|---|---|---|
|`nice`|Launch a process with a specified priority level (-20 to +19)|`nice -n 10 ./backup.sh`|
|`renice`|Change the priority of an already-running process|`renice 10 -p 1234`|

#### Process Limits

|Item|Description|Example|
|---|---|---|
|**Process limits**|Resource limits per process via ulimit and /etc/security/limits.conf|`ulimit -a`|

#### Job & Process Management

|Command|Description|Example|
|---|---|---|
|`&`|Run a command immediately in the background|`./backup.sh &`|
|`bg`|Resume a stopped job in the background|`bg %1`|
|`Ctrl+C`|Send SIGINT to the foreground process — requests termination|_(keyboard shortcut)_|
|`Ctrl+D`|Send EOF on stdin — closes shells and interactive programs|_(keyboard shortcut)_|
|`Ctrl+Z`|Send SIGTSTP to foreground process — suspends it|_(keyboard shortcut)_|
|`exec`|Replace the current shell process with a new command|`exec /bin/bash`|
|`fg`|Bring a background or stopped job to the foreground|`fg %1`|
|`jobs`|List all jobs in the current shell session|`jobs`|
|`kill`|Send a signal to a process by PID|`kill -15 1234`|
|`killall`|Kill all processes matching an exact name|`killall nginx`|
|`nohup`|Make a process immune to SIGHUP so it survives logout|`nohup ./script.sh &`|
|`pkill`|Kill processes by pattern match|`pkill -f "python app.py"`|
|**Signal 1 HUP**|SIGHUP — reload config without restart; hangup signal|`kill -1 $(pgrep nginx)`|
|**Signal 9 KILL**|SIGKILL — immediate unconditional kill — cannot be caught|`kill -9 1234`|
|**Signal 15 TERM**|SIGTERM — polite termination request — default kill signal|`kill -15 1234`|

#### Scheduling

|Command|Description|Example|
|---|---|---|
|`anacron`|Cron for systems that aren't always on — runs missed jobs on boot|`anacron -n`|
|`at`|Schedule a command to run once at a specific future time|`echo "/opt/backup.sh" \| at 2:00 AM`|
|`crontab`|Schedule recurring jobs using cron expression syntax|`crontab -e`|

---

### 2.4 Software Management

#### Installation, Update & Removal

|Item|Description|Example|
|---|---|---|
|**Repository**|Curated collection of packages served by a package manager|`dnf repolist`|
|**Source**|Building software from source code using make/cmake|`./configure && make && make install`|
|**Package dependencies**|Libraries and tools a package requires to function|`dnf deplist nginx`|
|**Package managers**|Tools managing install/update/remove (dnf, apt, rpm, dpkg)|`dnf install nginx`|
|`pip`|Python package manager|`pip3 install requests`|
|`cargo`|Rust package manager and build tool|`cargo install ripgrep`|
|`npm`|Node.js package manager|`npm install -g pm2`|

#### Repository Management

|Item|Description|Example|
|---|---|---|
|**Enabling/disabling**|Turn individual repositories on or off|`dnf config-manager --disable nginx-stable`|
|**Third party**|Repositories provided by vendors outside the OS distribution|`dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo`|
|**GPG signatures**|Cryptographic signatures verifying package authenticity|`rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release`|

#### Other Software Configuration Items

|Item|Description|Example|
|---|---|---|
|**Package exclusions**|Prevent specific packages from being installed or updated|`dnf install nginx --exclude="nginx-module-*"`|
|**Update alternatives**|Manage multiple versions of the same tool|`update-alternatives --config java`|
|**Software configuration**|Post-install configuration of installed services|`vim /etc/nginx/nginx.conf`|
|**Sandboxed applications**|Apps bundled with dependencies running in isolation (Flatpak, Snap)|`flatpak install flathub org.gimp.GIMP`|

#### Common Service Configurations

|Service|Description|Example|
|---|---|---|
|**DNS**|Resolves domain names to IP addresses|`named-checkconf`|
|**NTP/PTP**|Synchronizes system time across the network|`chronyc sources -v`|
|**DHCP**|Dynamically assigns IP addresses to network clients|`systemctl enable --now dhcpd`|
|**Apache httpd**|Open-source web server — widely used on Linux|`apachectl configtest`|
|**Nginx**|High-performance web server and reverse proxy|`nginx -t`|
|**SMTP**|Protocol for sending email between servers|`postfix check`|
|**IMAP4**|Protocol allowing email clients to access server mailboxes|`systemctl enable --now dovecot`|

---

### 2.5 systemd Management

#### systemd Units

|Type|Description|Example|
|---|---|---|
|**Services**|Describe a daemon or one-shot process managed by systemd|`systemctl status nginx.service`|
|**Timers**|Schedule service activation — systemd's replacement for cron|`systemctl list-timers`|
|**Mounts**|Manage filesystem mounts as systemd units|`systemctl status mnt-data.mount`|
|**Targets**|Synchronization points and grouping mechanisms (like runlevels)|`systemctl get-default`|

#### Utilities

|Command|Description|Example|
|---|---|---|
|`hostnamectl`|View and set the system hostname and machine identity|`hostnamectl set-hostname webserver01`|
|`resolvectl`|Manage and query systemd-resolved DNS resolver|`resolvectl status`|
|`sysctl`|Read and write live kernel runtime parameters|`sysctl -w net.ipv4.ip_forward=1`|
|`systemctl`|Primary command-line interface to systemd|`systemctl list-units --state=failed`|
|`systemd-analyze`|Analyze boot performance and unit startup times|`systemd-analyze blame`|
|`systemd-blame`|List units sorted by initialization time (part of systemd-analyze)|`systemd-analyze blame \| head -10`|
|`systemd-resolved`|Local DNS stub resolver daemon with caching|`systemctl status systemd-resolved`|
|`timedatectl`|Manage system time, timezone, and NTP synchronization|`timedatectl set-timezone America/New_York`|

#### Managing Unit States

|Command|Description|Example|
|---|---|---|
|`daemon-reload`|Re-read all unit files from disk after editing|`systemctl daemon-reload`|
|`disable`|Remove boot symlink — don't start at boot|`systemctl disable nginx`|
|`edit`|Create/edit drop-in override file for a unit|`systemctl edit nginx`|
|`enable`|Create boot symlink — start at boot|`systemctl enable nginx`|
|`mask`|Symlink unit to /dev/null — cannot be started by any means|`systemctl mask bluetooth`|
|`reload`|Reload service config without a full restart|`systemctl reload nginx`|
|`restart`|Stop then start a service|`systemctl restart nginx`|
|`start`|Start a unit now|`systemctl start nginx`|
|`status`|Show current state, recent logs, and PID|`systemctl status nginx`|
|`stop`|Stop a running unit|`systemctl stop nginx`|
|`unmask`|Remove mask — restore normal behavior|`systemctl unmask bluetooth`|

---

### 2.6 Container Management

#### Runtimes

|Runtime|Description|Example|
|---|---|---|
|`runC`|OCI reference runtime — actually creates containers via kernel primitives|`which runc`|
|`Podman`|Daemonless, rootless-native Docker-compatible runtime|`podman run -d nginx`|
|`containerd`|Industry-standard high-level container runtime used by Kubernetes|`systemctl status containerd`|
|`Docker`|Most widely known container platform with daemon architecture|`docker run -d nginx`|

#### Image Operations

|Item|Description|Example|
|---|---|---|
|**Pulling images**|Download container images from a registry|`docker pull nginx:1.25`|
|`FROM`|Specifies the base image for a Dockerfile|`FROM ubuntu:22.04`|
|`ENTRYPOINT`|Defines the fixed executable that always runs in a container|`ENTRYPOINT ["nginx", "-g", "daemon off;"]`|
|`CMD`|Provides default arguments to ENTRYPOINT or the default command|`CMD ["dist/server.js"]`|
|`USER`|Sets the user for subsequent RUN, CMD, ENTRYPOINT instructions|`USER appuser`|
|**Pruning**|Remove unused images to free disk space|`docker image prune -a`|
|**Tags**|Named references to specific image versions|`docker tag nginx:1.25 myregistry/nginx:stable`|
|**Layers**|Read-only stacked filesystem layers that make up an image|`docker history nginx:1.25`|

#### Container Operations

|Operation|Description|Example|
|---|---|---|
|**Read logs**|View stdout/stderr output from a container|`docker logs -f mycontainer`|
|**Map volumes**|Mount host directories or volumes into containers|`docker run -v /data:/app/data nginx`|
|**Start/stop**|Start or stop a running container|`docker stop mycontainer`|
|**Inspect**|View detailed JSON metadata about a container|`docker inspect mycontainer`|
|**Delete**|Remove a stopped container|`docker rm mycontainer`|
|`run`|Create and start a container from an image|`docker run -d --name web -p 80:80 nginx`|
|`exec`|Run a command inside a running container|`docker exec -it web bash`|
|**Pruning**|Remove stopped containers to free resources|`docker container prune`|
|**Tags**|Tag a container image for a registry|`docker tag myapp:latest myregistry/myapp:v2`|
|**Env vars**|Inject environment variables into containers|`docker run -e DB_HOST=postgres myapp`|

#### Volume Operations

|Item|Description|Example|
|---|---|---|
|**Create volume**|Create a named Docker-managed volume|`docker volume create mydata`|
|**Mapping volume**|Attach a volume to a container at a mount point|`docker run -v mydata:/var/lib/postgres postgres`|
|**Pruning**|Remove unused volumes to free disk space|`docker volume prune`|
|**SELinux context**|Apply SELinux labels to bind mounts with :z or :Z|`docker run -v /host/path:/data:Z nginx`|
|**Overlay**|Copy-on-write filesystem used for container storage layers|`docker info \| grep "Storage Driver"`|

#### Container Networks

|Item|Description|Example|
|---|---|---|
|**Create network**|Create a custom Docker network|`docker network create mynet`|
|**Port mapping**|Map a host port to a container port|`docker run -p 8080:80 nginx`|
|**Pruning**|Remove unused networks|`docker network prune`|
|**macvlan**|Assigns real MAC address to container — appears on physical LAN|`docker network create -d macvlan --subnet=192.168.1.0/24 -o parent=eth0 macnet`|
|**ipvlan**|Shares parent interface MAC — containers get own IPs|`docker network create -d ipvlan -o parent=eth0 ipvnet`|
|**Host**|Container shares host's network namespace — no isolation|`docker run --network host nginx`|
|**Bridge**|Default — containers connect to virtual bridge on private subnet|`docker network create mybridge`|
|**Overlay**|Enables container communication across multiple Docker hosts|`docker network create -d overlay myoverlay`|
|**None**|Container has no network interfaces except loopback|`docker run --network none alpine`|

#### Privileged vs. Unprivileged

|Item|Description|Example|
|---|---|---|
|**Privileged**|Container gets all Linux capabilities and device access|`docker run --privileged mycontainer`|
|**Unprivileged**|Default — limited capabilities, seccomp filter, no host device access|`docker run nginx` _(default is unprivileged)_|

---

## Domain 3.0 — Security (18%)

### 3.1 Authentication, Authorization & Accounting

|Item|Description|Example|
|---|---|---|
|**Polkit**|Fine-grained policy-based authorization framework for system actions|`pkcheck --action-id org.freedesktop.systemd1.manage-units --process $$`|
|**PAM**|Pluggable Authentication Modules — modular authentication framework|`cat /etc/pam.d/sshd`|
|**SSSD/Winbind**|Connect Linux to Active Directory or LDAP for centralized auth|`realm join example.com`|
|**LDAP**|Hierarchical protocol for accessing directory information (users, groups)|`ldapsearch -x -H ldap://ldap.example.com -b "dc=example,dc=com" "(uid=alice)"`|
|**Kerberos**|Network authentication protocol using tickets — no passwords over wire|`kinit alice`|
|**Samba**|Linux implementation of SMB — file sharing and AD integration|`testparm`|
|`journalctl`|Query and display systemd journal logs|`journalctl -u sshd -n 50`|
|`rsyslog`|System logging daemon that routes messages to files/remote servers|`systemctl status rsyslog`|
|`logrotate`|Rotates, compresses, and removes old log files automatically|`logrotate -f /etc/logrotate.conf`|
|`/var/log`|Standard directory containing all system log files|`ls /var/log`|
|`audit.rules`|Rules file defining what security events auditd captures|`cat /etc/audit/rules.d/99-custom.rules`|
|`auditd`|Kernel-level audit daemon producing tamper-evident event logs|`systemctl status auditd`|

---

### 3.2 Firewalls

#### firewalld

|Item|Description|Example|
|---|---|---|
|`firewall-cmd`|Command-line interface for managing firewalld|`firewall-cmd --list-all`|
|**Runtime vs. permanent**|Runtime changes are immediate; permanent survive reboot|`firewall-cmd --permanent --add-service=http && firewall-cmd --reload`|
|**Rich rules**|Granular firewall rules combining source, port, protocol, and logging|`firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="10.0.0.0/8" service name="ssh" accept'`|
|**Zones**|Named trust levels assigned to interfaces or source IPs|`firewall-cmd --get-active-zones`|
|**Ports vs. services**|Services are named port groups; ports are explicit numbers|`firewall-cmd --permanent --add-port=8080/tcp`|

#### Other Firewall Tools

|Item|Description|Example|
|---|---|---|
|`ufw`|Simplified iptables frontend — default on Ubuntu|`ufw allow ssh`|
|`nftables`|Modern replacement for iptables with unified syntax|`nft list ruleset`|
|`iptables`|Classic userspace tool for configuring Netfilter rules|`iptables -L -n -v`|
|`ipset`|Creates efficient sets of IPs/ports for iptables to reference|`ipset create blocklist hash:ip`|
|**Netfilter**|Kernel framework all Linux firewall tools use underneath|`lsmod \| grep nf_`|
|**NAT**|Rewrites IP addresses in packet headers|`iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE`|
|**PAT**|Port Address Translation — many IPs share one public IP|`firewall-cmd --permanent --zone=external --add-masquerade`|
|**DNAT**|Rewrites destination IP — used for port forwarding|`firewall-cmd --permanent --add-forward-port=port=80:proto=tcp:toport=80:toaddr=192.168.1.10`|
|**SNAT**|Rewrites source IP — used for outbound NAT|`iptables -t nat -A POSTROUTING -o eth0 -j SNAT --to-source 203.0.113.1`|
|**Stateful**|Tracks connection state — return traffic handled automatically|`iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT`|
|**Stateless**|Rules evaluated per-packet with no connection state memory|`iptables -A INPUT -p tcp --dport 22 -j ACCEPT`|
|`net.ipv4.ip_forward`|Kernel parameter enabling IP routing/forwarding between interfaces|`sysctl -w net.ipv4.ip_forward=1`|

---

### 3.3 OS Hardening

#### Privilege Escalation

|Item|Description|Example|
|---|---|---|
|`/etc/sudoers`|Main sudo configuration file — defines who can run what|`visudo`|
|`NOEXEC`|Prevents sudo commands from spawning subshells or child processes|`carol ALL=(ALL) NOEXEC: /usr/bin/vim`|
|`NOPASSWD`|Allows sudo without a password — use with caution|`deploy ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx`|
|`/etc/sudoers.d/`|Drop-in directory for modular sudo configuration files|`visudo -f /etc/sudoers.d/webadmins`|
|`visudo`|Safe editor for sudoers that validates syntax before saving|`visudo`|
|`sudo -i`|Start a root login shell loading root's full environment|`sudo -i`|
|**wheel group**|Group whose members get full sudo access (RHEL/Fedora default)|`usermod -aG wheel alice`|
|**sudo group**|Group whose members get full sudo access (Debian/Ubuntu default)|`usermod -aG sudo alice`|
|`su -`|Switch to root with a full login environment|`su -`|

#### File Attributes

|Command|Description|Example|
|---|---|---|
|`chattr`|Set extended filesystem attributes on files and directories|`chattr +i /etc/passwd`|
|`lsattr`|List extended filesystem attributes|`lsattr /etc/passwd`|
|**immutable**|File cannot be modified, deleted, or renamed — even by root|`chattr +i /etc/sudoers`|
|**append only**|File can only be appended to — cannot overwrite or delete|`chattr +a /var/log/audit.log`|

#### Permissions

|Item|Description|Example|
|---|---|---|
|`chgrp`|Change the group ownership of a file|`chgrp developers /opt/project`|
|`chmod` (Octal)|Set permissions using numeric notation (e.g., 755, 644)|`chmod 755 /opt/script.sh`|
|`chmod` (Symbolic)|Set permissions using symbolic notation (u+x, g-w)|`chmod u+x,g-w script.sh`|
|`chown`|Change file owner and/or group ownership|`chown alice:developers /opt/project`|
|**Sticky bit**|On directories — users can only delete their own files|`chmod +t /tmp`|
|**setuid**|Binary runs with the file owner's privileges (e.g., passwd)|`chmod u+s /usr/bin/program`|
|**setgid**|On directories — new files inherit the directory's group|`chmod g+s /opt/shared/`|
|**umask**|Defines which permissions are removed from new files by default|`umask 027`|

#### Access Control

|Command|Description|Example|
|---|---|---|
|`setfacl`|Set fine-grained ACL permissions on files|`setfacl -m u:alice:rwx /opt/project`|
|`getfacl`|View ACL permissions on a file or directory|`getfacl /opt/project`|
|`restorecon`|Restore correct SELinux context based on policy database|`restorecon -Rv /var/www/html/`|
|`semanage`|Make persistent changes to SELinux policy (contexts, ports)|`semanage fcontext -a -t httpd_sys_content_t "/opt/web(/.*)?"`|
|`chcon`|Change SELinux context temporarily (not persistent)|`chcon -t httpd_sys_content_t /opt/web/index.html`|
|`ls -Z`|List files with their SELinux security context labels|`ls -Z /var/www/html/`|
|`getenforce`|Show current SELinux mode (Enforcing/Permissive/Disabled)|`getenforce`|
|`setenforce`|Temporarily switch SELinux mode without reboot|`setenforce 0`|
|`getsebool`|Show current value of SELinux booleans|`getsebool httpd_can_network_connect`|
|`setsebool`|Set SELinux boolean values (use -P for persistent)|`setsebool -P httpd_can_network_connect on`|
|`audit2allow`|Generate SELinux policy from audit denial messages|`ausearch -m AVC -ts recent \| audit2allow -M mymodule`|
|`sealert`|Analyze and explain SELinux denials in human-readable format|`sealert -a /var/log/audit/audit.log`|
|**Enforcing**|SELinux fully active — violations blocked and logged|`setenforce 1`|
|**Permissive**|SELinux logs violations but does not block them|`setenforce 0`|
|**Disabled**|SELinux completely off — requires reboot to change|`SELINUX=disabled` in `/etc/selinux/config`|

#### Secure Remote Access

|Item|Description|Example|
|---|---|---|
|**Key vs. password auth**|Key-based auth is stronger and recommended over passwords|`ssh-keygen -t ed25519 -C "alice@server"`|
|**SSH tunneling**|Route traffic through an encrypted SSH connection|`ssh -L 5432:db:5432 jumphost`|
|`PermitRootLogin`|Disable direct root SSH login for security|`grep PermitRootLogin /etc/ssh/sshd_config`|
|**Disabling X forwarding**|Disable X11 forwarding to reduce attack surface|`echo "X11Forwarding no" >> /etc/ssh/sshd_config`|
|`AllowUsers`|Whitelist specific users allowed to log in via SSH|`AllowUsers alice bob` in sshd_config|
|`AllowGroups`|Whitelist specific groups allowed to log in via SSH|`AllowGroups sshusers admins` in sshd_config|
|**SSH agent**|Caches SSH keys in memory to avoid repeated passphrase entry|`eval $(ssh-agent) && ssh-add ~/.ssh/id_ed25519`|
|**SFTP**|Secure file transfer over SSH|`sftp user@server`|
|**SFTP chroot**|Jail SFTP users to a specific directory|`ChrootDirectory /opt/sftp/%u` in sshd_config|
|`fail2ban`|Automatically bans IPs after repeated failed login attempts|`fail2ban-client status sshd`|

#### Other Hardening

|Item|Description|Example|
|---|---|---|
|**Avoid Telnet**|Telnet sends all data including passwords in plaintext|`systemctl mask telnet.socket`|
|**Avoid FTP**|FTP transmits credentials and data unencrypted|`systemctl disable --now vsftpd`|
|**Avoid TFTP**|TFTP has no authentication at all|`systemctl mask tftp.socket`|
|**Disable unused filesystems**|Reduce kernel attack surface by blocking unneeded modules|`echo "install cramfs /bin/true" > /etc/modprobe.d/disable-filesystems.conf`|
|**Remove unnecessary SUID**|SUID binaries are prime privilege escalation targets|`find / -perm /4000 -type f 2>/dev/null`|
|**Secure boot / UEFI**|Cryptographically verifies the boot chain to prevent rootkits|`mokutil --sb-state`|

---

### 3.4 Account Hardening

|Item|Description|Example|
|---|---|---|
|**Password complexity**|Enforce character class requirements via pam_pwquality|`grep minclass /etc/security/pwquality.conf`|
|**Password length**|Set minimum password length (recommended 14+)|`grep minlen /etc/security/pwquality.conf`|
|**Password expiration**|Force periodic password changes using chage or login.defs|`chage -M 90 alice`|
|**Password reuse**|Prevent users from re-using recent passwords|`grep remember /etc/pam.d/system-auth`|
|**Password history**|Store hashed history to enforce reuse prevention|`cat /etc/security/opasswd`|
|**MFA**|Require a second factor (TOTP, hardware key) in addition to password|`pam_google_authenticator.so` in `/etc/pam.d/sshd`|
|**Breach lists**|Check passwords against known-breached password databases|`pip-audit` or `k-anonymity HIBP API check`|
|`/sbin/nologin`|Completely prevents interactive login for a user account|`usermod -s /sbin/nologin serviceuser`|
|`/bin/rbash`|Restricted bash shell — limits what logged-in users can do|`usermod -s /bin/rbash limiteduser`|
|`pam_tally2`|Account lockout after repeated failed logins (legacy)|`pam_tally2 --user alice --reset`|
|**Avoid running as root**|Use sudo for specific commands — never log in as root|`sudo systemctl restart nginx`|

---

### 3.5 Cryptography

|Item|Description|Example|
|---|---|---|
|**GPG**|GNU Privacy Guard — file encryption and digital signing|`gpg -e -r alice@example.com secret.txt`|
|**LUKS2**|Linux standard for full disk and partition encryption|`cryptsetup luksFormat --type luks2 /dev/sdb1`|
|**Argon2**|Modern password-based key derivation function — resistant to GPU attacks|`cryptsetup luksFormat --pbkdf argon2id /dev/sdb1`|
|**OpenSSL**|Widely used TLS toolkit and cryptographic library|`openssl s_client -connect example.com:443`|
|**WireGuard**|Modern minimal VPN protocol built into the Linux kernel|`wg show`|
|**LibreSSL**|OpenBSD fork of OpenSSL with security-first rewrite|`openssl version` _(shows LibreSSL if installed)_|
|**TLS protocol versions**|TLS 1.2 acceptable; TLS 1.3 preferred; all older versions deprecated|`openssl s_client -connect host:443 -tls1_3`|
|**SHA-256**|Secure 256-bit hash function — used for integrity verification|`sha256sum file.txt`|
|**HMAC**|Hash with a secret key — provides both integrity and authentication|`openssl dgst -sha256 -hmac "key" file.txt`|
|**Removal of weak algorithms**|Disable MD5, SHA-1, RC4, DES, TLS 1.0/1.1 system-wide|`update-crypto-policies --set FUTURE`|
|**Trusted root certificates**|CA certificates pre-installed and trusted by the system|`update-ca-trust extract`|
|**No-cost certificates**|Free certificates from Let's Encrypt using ACME protocol|`certbot --nginx -d example.com`|
|**Commercial certificates**|Paid CA certificates with OV/EV validation for business use|`openssl req -new -key private.key -out request.csr`|
|**Avoiding self-signed**|Self-signed certs provide encryption but no identity verification|`openssl verify certificate.crt`|

---

### 3.6 Compliance & Audit

|Item|Description|Example|
|---|---|---|
|**Anti-malware**|ClamAV and similar tools scanning for malicious software|`clamscan -r /var/www/html`|
|**IOC**|Indicators of Compromise — evidence of system intrusion|`find /tmp -executable -type f 2>/dev/null`|
|**CVEs**|Standardized identifiers for publicly disclosed vulnerabilities|`dnf updateinfo list cves`|
|**CVSS**|Numerical scoring system (0–10) for vulnerability severity|`dnf updateinfo info CVE-2024-1234`|
|**Backporting patches**|Applying security fixes to older package versions without upgrading|`rpm -q --changelog nginx \| grep CVE`|
|**Service misconfigurations**|Insecure defaults, unnecessary services, wrong permissions|`lynis audit system`|
|**Port scanners**|Discover open ports and running services on hosts|`nmap -sV 192.168.1.0/24`|
|**Protocol analyzer**|Capture and analyze network traffic packets|`tcpdump -i eth0 -w capture.pcap`|
|**OpenSCAP**|Automated security compliance scanning against standards|`oscap xccdf eval --profile cis_server_l2 ssg-rhel9-ds.xml`|
|**CIS Benchmarks**|Consensus-based security configuration guidelines|`oscap xccdf eval --profile cis /path/to/ssg.xml`|
|**AIDE**|File integrity monitoring — detects unauthorized file changes|`aide --check`|
|**rkhunter**|Rootkit hunter — scans for known rootkits and backdoors|`rkhunter --check --skip-keypress`|
|**Signed package verification**|Verify package files against GPG-signed RPM/dpkg database|`rpm -Va \| grep "^..5"`|
|**Installed file verification**|Check package-owned files for unauthorized modifications|`debsums -c`|
|`shred`|Securely overwrite files multiple times before deletion|`shred -vzu -n 3 file.txt`|
|`badblocks -w`|Write-mode block test that overwrites all blocks|`badblocks -w /dev/sdb`|
|`dd if=/dev/urandom`|Overwrite a disk with random data for secure erasure|`dd if=/dev/urandom of=/dev/sdb bs=4M status=progress`|
|**Cryptographic destruction**|Destroy LUKS header making encrypted data permanently unreadable|`cryptsetup erase /dev/sdb`|
|**Software supply chain**|Security of all components in the software build and deploy process|`trivy image nginx:latest`|
|`/etc/issue`|Pre-login banner displayed on local console before login prompt|`echo "Authorized access only" > /etc/issue`|
|`/etc/issue.net`|Pre-login banner displayed to SSH users before authentication|`echo "Authorized access only" > /etc/issue.net`|
|`/etc/motd`|Message of the Day displayed after successful login|`cat /etc/motd`|

---

## Domain 4.0 — Automation, Orchestration & Scripting (17%)

### 4.1 Automation & Orchestration

#### Ansible

|Item|Description|Example|
|---|---|---|
|**Playbooks**|YAML files defining automation tasks and their order|`ansible-playbook site.yml`|
|**Inventory**|Defines which hosts Ansible manages and organizes them into groups|`ansible-inventory --list`|
|**Modules**|Units of work in Ansible — Python programs doing one specific thing|`ansible webservers -m service -a "name=nginx state=started"`|
|**Ad hoc**|Quick one-off commands without writing a full playbook|`ansible all -m ping`|
|**Collections**|Distributable packages of Ansible modules, roles, and plugins|`ansible-galaxy collection install ansible.posix`|
|**Facts**|Automatically collected system information available in playbooks|`ansible webserver01 -m setup`|
|**Agentless**|Connects over SSH — no software needed on managed nodes|`ansible all -m command -a "uptime"`|

#### Puppet

|Item|Description|Example|
|---|---|---|
|**Classes**|Named blocks of reusable Puppet configuration code|`puppet apply -e "include nginx"`|
|**Certificates**|Mutual TLS certificates authenticating agents to Puppet server|`puppetserver ca list`|
|**Modules**|Self-contained units of Puppet code with standard directory structure|`puppet module install puppetlabs-apache`|
|**Facts**|System properties automatically available in manifests via Facter|`facter os.family`|
|**Agent/Agentless**|Agent mode polls server; agentless uses `puppet apply` locally|`puppet agent --test`|

#### OpenTofu

|Item|Description|Example|
|---|---|---|
|**Provider**|Plugin that interfaces with a specific cloud/infrastructure API|`tofu init`|
|**Resource**|Infrastructure object being created and managed|`tofu plan`|
|**State**|File tracking all managed resources — source of truth|`tofu state list`|
|**API**|OpenTofu interacts with infrastructure through provider REST APIs|`tofu apply -auto-approve`|

#### Unattended Deployment

|Item|Description|Example|
|---|---|---|
|**Kickstart**|Fully automated RHEL/Fedora installation from a single answer file|`ksvalidator /var/www/html/ks/server.ks`|
|**cloud-init**|Standard cloud VM initialization — runs on first boot|`cloud-init status --wait`|

#### CI/CD

|Item|Description|Example|
|---|---|---|
|**Version control**|Git-based tracking of all code and infrastructure changes|`git log --oneline --graph --all`|
|**Shift left testing**|Move testing earlier in development to catch issues sooner|`ansible-lint playbooks/ && yamllint .`|
|**GitOps**|Git as the single source of truth — operators reconcile state|`kubectl get applications -n argocd`|
|**Pipelines**|Automated stages (test, build, scan, deploy) triggered by Git events|`gitlab-runner verify`|
|**DevSecOps**|Security integrated at every stage of the development lifecycle|`trivy image --severity HIGH,CRITICAL myapp:latest`|

#### Deployment Orchestration — Kubernetes

|Item|Description|Example|
|---|---|---|
|**ConfigMaps**|Store non-sensitive configuration data for pods|`kubectl create configmap myapp-config --from-literal=ENV=prod`|
|**Secrets**|Store sensitive data (passwords, tokens) for pods|`kubectl create secret generic db-creds --from-literal=password=secret`|
|**Pods**|Smallest deployable unit — one or more containers sharing network|`kubectl get pods -n production`|
|**Deployments**|Manage pod lifecycle — rolling updates, rollbacks, scaling|`kubectl rollout status deployment/myapp`|
|**Volumes**|Persistent storage attached to pods|`kubectl get pvc`|
|**Services**|Stable network endpoints for pods — load balancing and discovery|`kubectl expose deployment myapp --port=80`|
|**Variables**|Inject configuration into pods via env vars, ConfigMaps, Secrets|`kubectl set env deployment/myapp APP_ENV=production`|

#### Deployment Orchestration — Docker Swarm

|Item|Description|Example|
|---|---|---|
|**Service**|Long-running containers managed across the swarm|`docker service create --name web --replicas 3 nginx`|
|**Nodes**|Individual machines (managers and workers) in the swarm cluster|`docker node ls`|
|**Tasks**|Individual container instances of a service running on a node|`docker service ps webapp`|
|**Networks**|Overlay networks enabling container communication across nodes|`docker network create -d overlay appnet`|
|**Scale**|Increase or decrease the number of service replicas|`docker service scale webapp=5`|

#### Docker/Podman Compose

|Item|Description|Example|
|---|---|---|
|**Compose file**|YAML file defining a multi-container application stack|`cat docker-compose.yml`|
|**Up/down**|Start or stop the entire application stack|`docker compose up -d`|
|**Logs**|View log output from all services in the compose stack|`docker compose logs -f`|

---

### 4.2 Shell Scripting

#### Expansion

|Item|Description|Example|
|---|---|---|
|`${var}`|Parameter expansion — access and manipulate variable values|`echo ${name:-"default"}`|
|`$(foo)`|Command substitution — capture command output as a string|`date=$(date +%Y-%m-%d)`|
|`` `foo` ``|Legacy backtick command substitution (avoid — use `$()` instead)|`` hostname=`hostname` ``|
|`(foo)`|Subshell — run commands in an isolated child shell|`(cd /tmp && ls)`|

#### Core Scripting Concepts

|Item|Description|Example|
|---|---|---|
|**Functions**|Named reusable blocks of code in a shell script|`greet() { echo "Hello $1"; }`|
|**IFS/OFS**|Defines what characters separate fields when bash splits strings|`IFS=',' read -r a b c <<< "one,two,three"`|

#### Conditional Statements

|Item|Description|Example|
|---|---|---|
|`if`|Execute code block based on a condition|`if [[ -f /etc/passwd ]]; then echo "exists"; fi`|
|`case`|Pattern-matching conditional — cleaner than chained if/elif|`case "$action" in start) systemctl start nginx ;; esac`|

#### Looping Statements

|Item|Description|Example|
|---|---|---|
|`until`|Inverse of while — runs while condition is false|`until pg_isready -q; do sleep 2; done`|
|`for`|Iterate over a list, range, array, or command output|`for f in /var/log/*.log; do echo "$f"; done`|
|`while`|Execute while a condition is true|`while IFS= read -r line; do echo "$line"; done < file.txt`|

#### Interpreter Directive

|Item|Description|Example|
|---|---|---|
|`#!`|Shebang — tells kernel which interpreter to use for the script|`#!/usr/bin/env bash`|

#### Comparisons — Numerical

|Operator|Description|Example|
|---|---|---|
|`-eq`|Numeric equal to|`[[ $a -eq $b ]]`|
|`-ge`|Numeric greater than or equal to|`[[ $count -ge 5 ]]`|
|`-gt`|Numeric greater than|`[[ $usage -gt 80 ]]`|
|`-le`|Numeric less than or equal to|`[[ $retries -le 3 ]]`|
|`-lt`|Numeric less than|`[[ $pid -lt 1000 ]]`|
|`-ne`|Numeric not equal to|`[[ $exit_code -ne 0 ]]`|

#### Comparisons — String

|Operator|Description|Example|
|---|---|---|
|`>`|String greater than (lexicographic)|`[[ "$b" > "$a" ]]`|
|`<`|String less than (lexicographic)|`[[ "$a" < "$b" ]]`|
|`==`|String equal to|`[[ "$str" == "expected" ]]`|
|`=`|String equal to (POSIX)|`[ "$str" = "expected" ]`|
|`=~`|Regex match|`[[ "$email" =~ ^[a-z]+@[a-z]+\.[a-z]+$ ]]`|
|`!=`|String not equal to|`[[ "$env" != "production" ]]`|
|`<=`|String less than or equal to|`[[ "$a" <= "$b" ]]`|
|`>=`|String greater than or equal to|`[[ "$a" >= "$b" ]]`|

#### Regular Expressions

|Item|Description|Example|
|---|---|---|
|`[[ $foo =~ regex ]]`|Bash extended regex match — captures in BASH_REMATCH array|`[[ "$ip" =~ ^([0-9]{1,3}\.){3}[0-9]{1,3}$ ]]`|

#### Test Operators

|Operator|Description|Example|
|---|---|---|
|`!`|Negate a test condition|`[[ ! -f /tmp/lock ]]`|
|`-d`|Test if path is a directory|`[[ -d /var/log ]]`|
|`-f`|Test if path is a regular file|`[[ -f /etc/passwd ]]`|
|`-n`|Test if string is non-empty|`[[ -n "$hostname" ]]`|
|`-z`|Test if string is empty (zero length)|`[[ -z "$input" ]]`|

#### Variables

|Item|Description|Example|
|---|---|---|
|**Environmental**|Variables inherited from the shell environment|`echo $HOME`|
|**Arguments**|Positional parameters passed to a script ($1, $2, $@, $#)|`echo "Arg 1: $1, Count: $#"`|
|`alias`|Create a shorthand name for a command|`alias ll='ls -lah'`|
|`export`|Make a variable available to child processes|`export APP_ENV=production`|
|`local`|Restrict a variable's scope to a function|`local count=0`|
|`set`|Set shell options or positional parameters|`set -euo pipefail`|
|`unalias`|Remove an alias|`unalias ll`|
|`unset`|Remove a variable or function|`unset MY_VAR`|
|`$?`|Return code of the last executed command|`echo $?`|

---

### 4.3 Python for Sysadmin

|Item|Description|Example|
|---|---|---|
|**Virtual environment**|Isolated Python installation to avoid dependency conflicts|`python3 -m venv myenv && source myenv/bin/activate`|
|**Built-in modules**|Standard library modules requiring no installation (os, sys, subprocess)|`import subprocess; subprocess.run(['df', '-h'])`|
|**Installing dependencies**|Install third-party packages using pip|`pip3 install -r requirements.txt`|
|**Indentations**|Python uses 4-space indentation to define code blocks|_(enforced by language — no braces)_|
|**Current versions**|Python 3.x is active; Python 2.x is end-of-life|`python3 --version`|
|**Boolean**|True/False values used in conditions and logic|`is_running = True`|
|**Dictionary**|Key-value pairs — ordered, mutable (Python 3.7+)|`server = {'hostname': 'web01', 'ip': '10.0.0.1'}`|
|**Floating point**|Decimal numbers — not exact due to IEEE 754 representation|`usage = 87.5`|
|**Integer**|Whole numbers with arbitrary precision in Python|`port = 22`|
|**List**|Ordered, mutable sequence of items allowing duplicates|`servers = ["web01", "web02", "db01"]`|
|**String**|Immutable sequence of characters|`hostname = f"server-{id:03d}.example.com"`|
|**Modules & packages**|Extend Python with reusable code libraries|`import paramiko`|
|**PEP 8**|Python's official style guide — naming, formatting, imports|`flake8 script.py`|

---

### 4.4 Git Version Control

|Command|Description|Example|
|---|---|---|
|`.gitignore`|File telling Git which files and directories to never track|`echo "*.pyc" >> .gitignore`|
|`git add`|Stage changes for the next commit|`git add -p file.py`|
|`git branch`|Create, list, rename, and delete branches|`git branch feature/new-feature`|
|`git checkout`|Switch branches or restore files|`git checkout -b feature/new-feature`|
|`git clone`|Clone an existing repository from a URL|`git clone git@github.com:org/repo.git`|
|`git commit`|Record staged changes with a message|`git commit -m "feat: add backup rotation"`|
|`git config`|Set user identity and Git behavior settings|`git config --global user.email "alice@example.com"`|
|`git diff`|Show differences between commits, branches, or working tree|`git diff main feature/new-feature`|
|`git fetch`|Download changes from remote without merging|`git fetch --prune`|
|`git init`|Initialize a new Git repository|`git init my-project`|
|`git log`|Browse commit history with filtering options|`git log --oneline --graph --all`|
|`git merge`|Combine another branch into the current branch|`git merge --no-ff feature/new-feature`|
|**squash**|Combine all feature commits into one before merging|`git merge --squash feature/messy-history`|
|`git pull`|Fetch from remote and merge into current branch|`git pull --rebase origin main`|
|`git push`|Upload commits to a remote repository|`git push -u origin feature/new-feature`|
|`git rebase`|Reapply commits on top of a different base commit|`git rebase -i HEAD~3`|
|`git reset`|Move HEAD and optionally reset staging/working directory|`git reset --soft HEAD~1`|
|`git stash`|Temporarily save uncommitted changes without committing|`git stash push -m "WIP: feature work"`|
|`git tag`|Create named references to specific commits for releases|`git tag -a v2.0.0 -m "Release 2.0.0"`|

---

### 4.5 AI Best Practices

#### Common Use Cases

|Use Case|Description|Example|
|---|---|---|
|**Code generation**|AI accelerates writing scripts, functions, and boilerplate code|_Prompt: "Write a bash script to monitor disk usage and alert via email"_|
|**Regex generation**|AI generates and explains complex regular expressions|_Prompt: "Generate a Python regex to validate IPv4 addresses"_|
|**IaC generation**|AI generates Ansible, Terraform, Kubernetes manifests|_Prompt: "Write an Ansible playbook to harden SSH on RHEL 9"_|
|**Documentation**|AI writes docstrings, README files, and inline comments|_Prompt: "Add Google-style docstrings to this Python function"_|
|**Compliance recommendations**|AI analyzes configs against CIS/NIST standards|_Prompt: "Review this sshd_config against CIS Benchmark Level 2"_|
|**Security review**|AI identifies vulnerabilities and suggests fixes in code|_Prompt: "Review this function for command injection vulnerabilities"_|
|**Code optimization**|AI suggests performance improvements and better algorithms|_Prompt: "Optimize this function for processing 1GB log files"_|
|**Code linting**|AI explains linting errors and suggests corrections|_Prompt: "Explain these flake8 errors and show corrected code"_|

#### Best Practices

|Practice|Description|Example|
|---|---|---|
|**Review before use**|Never run AI-generated code without reading every line|_Always read and understand before executing_|
|**Verify output**|AI can be confidently wrong — cross-reference all facts|`nginx -t` _(validate AI-generated nginx config)_|
|**LLM training data security**|Never send private keys, PII, or proprietary code to public AI|_Sanitize all inputs before sharing with public LLMs_|
|**Human review**|AI output requires human expert review for high-stakes changes|_Code review process for all AI-generated commits_|
|**Local models**|Use local models (Ollama, llama.cpp) for sensitive data|`ollama run codellama`|
|**Corporate policy**|Verify AI tools are approved by IT/Security before using|_Check acceptable use policy before adopting AI tools_|
|**Prompt engineering**|Clear, detailed, constrained prompts yield better AI output|_Include context, constraints, format, and examples in prompts_|

---

## Domain 5.0 — Troubleshooting (22%)

### 5.1 Monitoring Concepts

#### Service Monitoring

|Item|Description|Example|
|---|---|---|
|**SLA**|Formal contract defining expected service level and remedies for breach|_"99.9% uptime monthly or service credits apply"_|
|**SLI**|Quantitative measurement of specific service behavior|`awk '{sum+=$NF; count++} END {print sum/count}' access.log`|
|**SLO**|Internal target for an SLI — stricter than the SLA to provide buffer|_"p99 API latency < 200ms over any 30-minute window"_|

#### Data Acquisition Methods

|Item|Description|Example|
|---|---|---|
|**SNMP**|Protocol for collecting metrics from network devices and servers|`snmpwalk -v3 -l authPriv -u user -a SHA -A pass 192.168.1.10`|
|**SNMP Traps**|Async notifications sent from device to manager on significant events|`snmptrap -v2c -c public mgr-ip "" coldStart.0`|
|**MIBs**|Hierarchical databases defining what metrics an SNMP agent exposes|`snmpget -v3 ... sysUpTime.0`|
|**Agent/Agentless**|Agent = software installed on host; Agentless = remote protocols only|`systemctl status node_exporter`|
|**Webhooks**|HTTP callbacks — monitored service pushes data to monitoring system|`curl -X POST http://receiver:9095/alert -d '{"alert":"disk_full"}'`|
|**Health checks**|Active probes verifying a service is functioning correctly|`curl -sf http://localhost/health \| exit 1`|
|**Log aggregation**|Centralizing logs from multiple sources into one queryable platform|`systemctl status filebeat`|

#### Configurations

|Item|Description|Example|
|---|---|---|
|**Thresholds**|Boundaries defining when a metric transitions from normal to alert|`alert: expr: disk_usage > 90`|
|**Alerts**|Definitions of what happens when a threshold is crossed|`systemctl status alertmanager`|
|**Events**|Discrete occurrences — deployments, errors, state changes|`logger -t monitor "Deployment complete: v2.1.0"`|
|**Notifications**|Delivery mechanisms for alerts (email, Slack, PagerDuty)|`curl -X POST $SLACK_WEBHOOK -d '{"text":"Alert!"}'`|
|**Logging**|Structured, retained records of system and application activity|`journalctl -u nginx --since "1 hour ago"`|

---

### 5.2 Hardware, Storage & OS Troubleshooting

|Issue|Description|Diagnostic Command|
|---|---|---|
|**Kernel panic**|Fatal unrecoverable kernel error — system halts to prevent data loss|`journalctl -b -1 -p err`|
|**Data corruption**|Files unreadable, checksums fail, filesystem errors|`fsck -n /dev/sdb1`|
|**Kernel corruption**|`/boot` files damaged, modules fail to load, random crashes|`rpm -V kernel-$(uname -r)`|
|**Package dependency issues**|Package install fails due to conflicting or missing dependencies|`dnf check`|
|**Filesystem won't mount**|`mount` fails, wrong type, corruption, missing driver|`dmesg \| tail -20`|
|**Server not turning on**|No power, no POST, system dead|`ipmitool -I lanplus -H mgmt-ip -U admin -P pass power status`|
|**OS filesystem full**|`No space left on device` — disk capacity exhausted|`df -h && du -sh /* 2>/dev/null \| sort -rh \| head -10`|
|**Server inaccessible**|Cannot SSH, ping fails, service unreachable|`ping server-ip && nc -zv server-ip 22`|
|**Device failure**|Disk errors in dmesg, I/O errors, device disappears|`smartctl -H /dev/sda`|
|**Inode exhaustion**|"No space left" but `df -h` shows free space|`df -i`|
|**Partition not writable**|Read-only filesystem error on a partition|`mount \| grep "ro,"`|
|**Segmentation fault**|Application crashes with SIGSEGV signal|`journalctl \| grep segfault`|
|**GRUB misconfiguration**|System won't boot, GRUB rescue prompt, wrong default kernel|`grub2-mkconfig -o /boot/grub2/grub.cfg`|
|**Killed processes**|Process disappears, OOM kill messages, exit code 137|`dmesg \| grep -i "killed process"`|
|**PATH misconfiguration**|"command not found" for commands that exist|`echo $PATH`|
|**Systemd unit failures**|Service fails to start, exits immediately|`systemctl status nginx && journalctl -u nginx -n 50`|
|**Missing/disabled drivers**|Hardware not recognized, device missing from lsblk|`dmesg \| grep -i firmware && lspci -k`|
|**Unresponsive process**|100% CPU, hangs, not responding to requests|`strace -p $(pgrep app)`|
|**Quota issues**|"Disk quota exceeded" even with available space|`quota -u alice && repquota -a`|
|**Memory leaks**|Memory usage grows continuously, OOM kills over time|`smem -k -s rss -r \| head -10`|

---

### 5.3 Network Troubleshooting

|Issue|Description|Diagnostic Command|
|---|---|---|
|**Misconfigured firewalls**|Connection refused/times out — firewall blocking traffic|`firewall-cmd --list-all && iptables -L -n -v`|
|**DHCP issues**|No IP assigned, wrong IP, can't connect after reboot|`tcpdump -i eth0 port 67 or port 68`|
|**DNS issues**|Cannot resolve hostnames, wrong IP, intermittent failures|`dig google.com && cat /etc/resolv.conf`|
|**MTU mismatch**|Large transfers fail; small pings work but large ones don't|`ping -M do -s 1472 gateway-ip`|
|**Bonding**|Bond interface down, only one link active, failover broken|`cat /proc/net/bonding/bond0`|
|**MAC spoofing**|MAC address mismatch, duplicate MAC on network|`ethtool -P eth0 && arp -n`|
|**Subnet**|Can reach some hosts but not others — wrong mask|`ipcalc 192.168.1.50/24`|
|**Cannot ping server**|No ICMP response — firewall, down host, or routing issue|`arping -I eth0 192.168.1.100`|
|**Gateway issues**|Can reach local subnet but nothing beyond it|`ip route show default`|
|**Server unreachable**|All connection attempts fail at all layers|`mtr --report server-ip`|
|**IP conflicts**|Intermittent connectivity, ARP conflict messages in logs|`arping -D -I eth0 192.168.1.50`|
|**Dual stack issues**|Works with IPv4 but not IPv6 or vice versa|`ip -6 address show && ping6 ::1`|
|**Link down**|Interface shows DOWN state, NO-CARRIER|`ip link show && ethtool eth0`|
|**Link negotiation**|Connected but slow, high errors, duplex mismatch|`ethtool eth0 \| grep -E "Speed\|Duplex"`|

---

### 5.4 Security Troubleshooting

|Issue|Description|Diagnostic Command|
|---|---|---|
|**SELinux policy**|Service blocked by SELinux MAC policy|`ausearch -m AVC -ts recent \| audit2allow`|
|**SELinux context**|File has wrong SELinux type label — service denied access|`ls -Z /path && restorecon -Rv /path`|
|**SELinux booleans**|Feature works in Permissive but not Enforcing — boolean needed|`getsebool -a \| grep httpd`|
|**ACL issues**|Correct standard permissions but access still denied|`getfacl /opt/project/file.txt`|
|**File attributes**|Permission denied even as root — chattr attributes set|`lsattr /path/to/file`|
|**Account access**|Login fails — locked, expired, wrong shell, wrong key perms|`passwd -S alice && faillock --user alice`|
|**Unpatched systems**|Known CVEs exploitable in installed package versions|`dnf updateinfo list sec`|
|**Misconfigured services**|Unnecessary services exposed, default credentials, info disclosure|`ss -tulnp && lynis audit system`|
|**Remote access issues**|SSH fails — key mismatch, cipher mismatch, GSSAPI delays|`ssh -vvv user@host 2>&1 \| grep -i "auth\|denied"`|
|**Certificate issues**|Expired cert, chain incomplete, self-signed, key mismatch|`openssl x509 -in cert.pem -noout -checkend 0`|
|**Misconfigured repository**|GPG signature failure, wrong URL, mixed versions|`dnf clean all && dnf makecache`|
|**Insecure protocols**|SSLv3/TLS 1.0/RC4/MD5 still enabled — security policy violation|`testssl.sh https://example.com`|
|**Cipher negotiation**|"no shared cipher" — client and server have no common cipher|`openssl s_client -connect host:443 -v 2>&1 \| grep cipher`|

---

### 5.5 Performance Troubleshooting

|Symptom|Description|Diagnostic Command|
|---|---|---|
|**Swapping**|System writing RAM contents to disk — causes dramatic slowdown|`vmstat 1 5` _(watch si/so columns)_|
|**Out of memory**|Processes killed by OOM killer — exit code 137|`dmesg \| grep -i "killed process"`|
|**Slow application response**|Requests take longer than expected — SLO breach|`time curl -s -o /dev/null http://localhost/api/`|
|**System unresponsiveness**|System frozen, SSH unresponsive, commands timeout|`uptime && ps aux \| awk '$8=="D"'`|
|**High CPU usage**|CPU saturated — applications or kernel consuming all cycles|`mpstat -P ALL 1 && perf top`|
|**High load average**|Load >> CPU count — processes queuing for CPU or I/O|`uptime && vmstat 1 5` _(watch r and b)_|
|**High context switching**|Excessive thread scheduling overhead — high %sys|`vmstat 1 5` _(watch cs column)_|
|**High failed logins**|Brute force attack consuming CPU and filling auth logs|`lastb \| awk '{print $3}' \| sort \| uniq -c \| sort -rn`|
|**Slow startup**|System or service takes too long to initialize|`systemd-analyze blame`|
|**High I/O wait**|CPU waiting for disk I/O — storage bottleneck|`iostat -x 1 5` _(watch await and %util)_|
|**Packet drops**|Network data lost — NIC buffer overflow or socket saturation|`ethtool -S eth0 \| grep -i drop`|
|**Jitter**|Network latency varies wildly — inconsistent response times|`mtr --report target` _(check mdev column)_|
|**Random disconnects**|Connections drop unexpectedly — keepalive, firewall, resource issue|`ss -ti \| grep retrans`|
|**Random timeouts**|Requests fail intermittently with timeout errors|`netstat -s \| grep -i "retransmit"`|
|**High latency**|All operations consistently slower than expected|`ping -c 20 target \| tail -1`|
|**Slow response times**|Application responses exceed acceptable thresholds|`ab -n 1000 -c 10 http://localhost/`|
|**High disk latency**|Storage I/O taking too long — device saturated or failing|`iostat -x 1 5` _(watch await column)_|
|**Low throughput**|Transfers slower than hardware should support|`fio --name=seqread --ioengine=libaio --rw=read --bs=128k --size=4G`|
|**Blocked processes**|Processes stuck in D state waiting on I/O or locks|`ps aux \| awk '$8=="D" {print $2, $11}'`|
|**Hardware errors**|MCE events, ECC corrections, disk SMART failures|`dmesg \| grep -iE "mce\|hardware error"`|
|**Sluggish terminal**|SSH connects slowly, commands lag, prompt is slow|`time ssh user@host echo test`|
|**Exceeding baselines**|Metrics drift above established normal ranges|`sar -r -f /var/log/sa/sa$(date +%d)`|
|**Slow remote storage**|NFS/iSCSI operations have high latency|`nfsstat -c \| grep retrans`|
|**CPU bottleneck**|CPU saturated — run queue consistently > CPU count|`vmstat 1 5` _(r column > nproc)_|

---

## Acronym Reference (Key Terms)

|Acronym|Definition|
|---|---|
|ACL|Access Control List|
|AIDE|Advanced Intrusion Detection Environment|
|API|Application Programming Interface|
|CI/CD|Continuous Integration/Continuous Deployment|
|CIS|Center for Internet Security|
|CVE|Common Vulnerabilities and Exposures|
|CVSS|Common Vulnerability Scoring System|
|DHCP|Dynamic Host Configuration Protocol|
|DNAT|Destination Network Address Translation|
|DNS|Domain Name System|
|FHS|Filesystem Hierarchy Standard|
|GPG|GNU Privacy Guard|
|GRUB|Grand Unified Bootloader|
|HMAC|Hashed Message Authentication Code|
|IaC|Infrastructure as Code|
|LDAP|Lightweight Directory Access Protocol|
|LLM|Large Language Model|
|LUKS2|Linux Unified Key Setup 2|
|LVM|Logical Volume Manager|
|MFA|Multifactor Authentication|
|MIB|Management Information Base|
|MTU|Maximum Transmission Unit|
|NAT|Network Address Translation|
|NFS|Network File System|
|NTP|Network Time Protocol|
|OOM|Out of Memory|
|OpenSCAP|Open Security Content Automation Protocol|
|PAM|Pluggable Authentication Modules|
|PAT|Port Address Translation|
|PEP|Python Enhancement Proposal|
|PID|Process Identification Number|
|PPID|Parent Process Identification Number|
|PTP|Precision Time Protocol|
|PXE|Preboot Execution Environment|
|QEMU|Quick Emulator|
|RAID|Redundant Array of Independent Disks|
|SNAT|Source Network Address Translation|
|SNMP|Simple Network Management Protocol|
|SELinux|Security Enhanced Linux|
|SFTP|Secure File Transfer Protocol|
|SLA|Service-level Agreement|
|SLI|Service-level Indicator|
|SLO|Service-level Objective|
|SMB|Server Message Block|
|SMTP|Simple Mail Transfer Protocol|
|SSH|Secure Shell|
|SSSD|System Security Services Daemon|
|TLS|Transport Layer Security|
|UEFI|Unified Extensible Firmware Interface|
|UFW|Uncomplicated Firewall|

---

_CompTIA Linux+ XK0-006 V8 | Exam Objectives Document Version 5.0 | Copyright © 2024 CompTIA, Inc._