---
creation date: 2025-12-26 22:57
---
#04-Tools #Linux #Boot-Process

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>

GRUB:
Loads the selected linux kernel and its correspondingn intiramfs file into memory from /boot directory. It follows the commands in grub.cfg. It may also load additional kernel modules along with the main kernel. The grub.cfg file is maintained by the distributionn but users can modify it by editing /etc/default/grub and then updating the GRUB program with the update-grub command

Boot:
The kernel starts and GRUB exits. The kernel inspects the system and sets up hardware by loading drivers from initramfs. Mounts the root file system and then starts init.

dmesg:
kernel emits status messages during boot but most distros hide them from the user, not all are logged but most of them can be seen by runnign dmesg command right after boot time. 