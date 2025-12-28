---
creation date: 2025-12-26 22:30
---
#04-Tools #Linux #Boot-Process

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>
GRUB Boot Loader Basics:

## BIOS
Grub 1 or 2, considered legacy

The boot uses an MS-DOS style partition with a Master Boot Record. The MBR is at the very start of storage space on disk. Boot loader is only 441 bytes.
The main part of GRUB is stored in /boot/grub. BIOS style booting is possible wit the GPT partitioning scheme. A small 512 byte partition is created at the beginging of a boot disk that holds the MBR. 
## UEFI
This is GRUB 2
Boot device uses a modern GPT partitioning scheme with an ESP (EFI System Partition) at the begining of the disk. The ESP holds the GRUB executable file. Firmware starts this file right after POST. The ESP is mounted at /boot/efi. The ESP is flagged as boot and esp at installation and is usually 512mb and 1gb in size. 
UEFI you have to use Secure Boot?

