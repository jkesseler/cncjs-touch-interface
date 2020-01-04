# Notes
First version only support 3 axis milling machines based on GRBL

## Layouts
	- Default
		- Main area,
		- Sidebar: buttons: E-Stop, Pause / Resume, Stop
		- Bottombar: Page links
	- Settings


## Pages
- Job info (Default Layout)
	- Gcode visualizer / GCode console
	- Gcode status (min/max and dimensions on all axis )
	- Gcode Job status (Elapsed time, Total lines / lines send)
	- Feeds / Spindle / Rapid override buttons
- Probe
- App Settings
- GRBL connection info


## Components
- DRO
- MDI
- JOG buttons


## Architecture
- PWA compliant
- Replace material-ui with react-bootstrap / [Bootswatch Slate theme](https://bootswatch.com/slate/)?


# GUI's to take inspiration from
<a name="gui-1"></a>[GRBL Controller](https://zeevy.github.io/grblcontroller/file-streaming-panel.html)
<a name="gui-2"></a>[Promaxx Iso Dr](http://www.promax.it/products/IsoDr)
<a name="gui-3"></a>[Custom made GUI](https://discuss-assets.s3.amazonaws.com/original/2X/4/4aeea29f55550e8151bcb66ef948eafa1c61d467.jpg) (https://discuss.inventables.com/t/hacking-the-x-controller/15097)
<a name="gui-4"></a>[LinuxCNC User Interface Proposal - YouTube](https://www.youtube.com/watch?v=lRZ_AMuayoM) [Screenshots](https://forum.linuxcnc.org/media/kunena/attachments/24125/Thumbs.jpg)
