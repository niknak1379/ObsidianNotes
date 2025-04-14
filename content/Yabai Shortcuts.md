---
creation date: 2025-04-14 12:56
---
#yabai

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Untitled

<< ---------------------------------------------------------------- >>
# Navigation
alt - j : yabai -m window --focus west
alt - k : yabai -m window --focus south
alt - i : yabai -m window --focus north
alt - l : yabai -m window --focus east

# Resize windows
shift + cmd - a : yabai -m window --resize left:-20:0; \
                  yabai -m window --resize right:-20:0
shift + cmd - s : yabai -m window --resize bottom:0:20; \
                  yabai -m window --resize top:0:20
shift + cmd - w : yabai -m window --resize top:0:-20; \
                  yabai -m window --resize bottom:0:-20
shift + cmd - d : yabai -m window --resize right:20:0; \
                  yabai -m window --resize left:20:0
## toggle window fullscreen zoom
alt - f         : yabai -m window --toggle zoom-fullscreen

# Moving windows
shift + alt - j : yabai -m window --warp west
shift + alt - k : yabai -m window --warp south
shift + alt - i : yabai -m window --warp north
shift + alt - l : yabai -m window --warp east