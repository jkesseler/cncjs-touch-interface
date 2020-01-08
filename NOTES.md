# Notes
First version only supports 3 axis milling machines based on GRBL


## Pages
- Main page
	- DRO (Machine / Work Position)
	- Jog buttons
	- Feeds / Spindle / Rapid override buttons
	- Spindle / Coolant en-, disable buttons
- Probe tab
- App Settings
- GRBL connection


## TODO
- Make PWA compliant with offline cache
- Replace Glyphicons wirh react-fontawsome
- Add Gcode visualizer / GCode console ()
- Add Gcode status (min/max and dimensions on all axis )
- Add Gcode Job status (Elapsed time, Total lines / lines send)


# GUI's to take inspiration from
<a name="gui-1"></a>[GRBL Controller](https://zeevy.github.io/grblcontroller/file-streaming-panel.html)
<a name="gui-2"></a>[Promaxx Iso Dr](http://www.promax.it/products/IsoDr)
<a name="gui-3"></a>[Custom made GUI](https://discuss-assets.s3.amazonaws.com/original/2X/4/4aeea29f55550e8151bcb66ef948eafa1c61d467.jpg) (https://discuss.inventables.com/t/hacking-the-x-controller/15097)
<a name="gui-4"></a>[LinuxCNC User Interface Proposal - YouTube](https://www.youtube.com/watch?v=lRZ_AMuayoM) [Screenshots](https://forum.linuxcnc.org/media/kunena/attachments/24125/Thumbs.jpg)


npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome