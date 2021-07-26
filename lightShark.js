// using https://wiki.munichmakerlab.de/images/1/17/UNOFFICIAL_X32_OSC_REMOTE_PROTOCOL_(1).pdf

var myParameters = {};

function oscEvent(address, args) {
	script.log(" Message received : " + address);
}

function update(deltaTime) {
	var now = util.getTime();
	if(now > TSSendAlive) {
		TSSendAlive = now + 5;
		keepAlive();
	}
}

function keepAlive() {
	local.send("/ping");
}



function Page_Up() {
	local.send("/LS/Page/Up", 1);
	local.send("/LS/Page/Up", 0);
}

function Page_Down() {
	local.send("/LS/Page/Down", 1);
	local.send("/LS/Page/Down", 0);
}

function DBO(val) {
	local.send("/LS/DBO", val, 1);
	local.send("/LS/DBO", val, 0);
}

function Edit() {
	local.send("/LS/Edit", 1);
	local.send("/LS/Edit", 0);
}

function Update() {
	local.send("/LS/Update", 1);
	local.send("/LS/Update", 0);
}

function Delete() {
	local.send("/LS/Delete", 1);
	local.send("/LS/Delete", 0);
}

function Copy() {
	local.send("/LS/Copy", 1);
	local.send("/LS/Copy", 0);
}

function Move() {
	local.send("/LS/Move", 1);
	local.send("/LS/Move", 0);
}

function Set() {
	local.send("/LS/Set", 1);
	local.send("/LS/Set", 0);
}

function Fan() {
	local.send("/LS/Fan", 1);
	local.send("/LS/Fan", 0);
}

function Find() {
	local.send("/LS/Find", 1);
	local.send("/LS/Find", 0);
}

function Clear() {
	local.send("/LS/Clear", 1);
	local.send("/LS/Clear", 0);
}

function Rec() {
	local.send("/LS/Rec", 1);
	local.send("/LS/Rec", 0);
}

function Select_PB(n) { // playBack 1-30
	local.send("/LS/Select/PB/"+n+"", 1);
	local.send("/LS/Select/PB/"+n+"", 0);
}

function Go_PB(n) {// playBack 1-30
	local.send("/LS/Go/PB/"+n+"", 1);
	local.send("/LS/Go/PB/"+n+"", 0);
}

function Flash_PB(n) {// playBack 1-30
	local.send("/LS/Flash/PB/"+n+"", 1);
	local.send("/LS/Flash/PB/"+n+"", 0);
}

function Stop_PB(n) {// playBack 1-30
	local.send("/LS/Stop/PB/"+n+"", 1);
	local.send("/LS/Stop/PB/"+n+"", 0);
}

function Prev_PB(n) {// playBack 1-30
	local.send("/LS/Prev/PB/"+n+"", 1);
	local.send("/LS/Prev/PB/"+n+"", 0);
}

function Next_PB(n) {// playBack 1-30
	local.send("/LS/Next/PB/"+n+"", 1);
	local.send("/LS/Next/PB/"+n+"", 0);
}

function Pause_PB(n) {// playBack 1-30
	local.send("/LS/Pause/PB/"+n+"", 1);
	local.send("/LS/Pause/PB/"+n+"", 0);
}

function Level_PB(n, val) { // playBack 1-30
	val = val*255;
	local.send("/LS/Level/PB/"+n+"", val);
}

function Go_Main() {
	local.send("/LS/Go/Main", 1);
	local.send("/LS/Go/Main", 0);
}

function Stop_Main() {
	local.send("/LS/Stop/Main", 1);
	local.send("/LS/Stop/Main", 0);
}

function Prev_Main() {
	local.send("/LS/Prev/Main", 1);
	local.send("/LS/Prev/Main", 0);
}

function Next_Main() {
	local.send("/LS/Next/Main", 1);
	local.send("/LS/Next/Main", 0);
}

function Pause_Main() {
	local.send("/LS/Pause/Main", 1);
	local.send("/LS/Pause/Main", 0);
}

function Level_GM(val ) {
	val = val*255;
	local.send("/LS/Level/GM", val);
}

function Encoder(n, v) { // encoder 1-4, v = -1 || 1
	local.send("/LS/Encoder/"+n+"");
}

function SelectFixture() {
	local.send("/LS/SelectFixture", 1);
	local.send("/LS/SelectFixture", 0);
}

function SelectGroup() {
	local.send("/LS/SelectGroup", 1);
	local.send("/LS/SelectGroup", 0);
}

function SelectionNext() {
	local.send("/LS/SelectionNext", 1);
	local.send("/LS/SelectionNext", 0);
}

function SelectionPrevious() {
	local.send("/LS/SelectionPrevious", 1);
	local.send("/LS/SelectionPrevious", 0);
}

function Intensity() {
	local.send("/LS/Intensity", 1);
	local.send("/LS/Intensity", 0);
}

function Position() {
	local.send("/LS/Position", 1);
	local.send("/LS/Position", 0);
}

function Color() {
	local.send("/LS/Color", 1);
	local.send("/LS/Color", 0);
}

function Beam() {
	local.send("/LS/Beam", 1);
	local.send("/LS/Beam", 0);
}

function Advance() {
	local.send("/LS/Advance", 1);
	local.send("/LS/Advance", 0);
}

function Gobo() {
	local.send("/LS/Gobo", 1);
	local.send("/LS/Gobo", 0);
}

function Fx() {
	local.send("/LS/Fx", 1);
	local.send("/LS/Fx", 0);
}

function Executor(page, col, row, action) { // page 1-2, col 1-8, line 1-6
	if (action == 2) {
		local.send("/LS/Executor/"+page+"/"+col+"/"+row+"", 1);
		local.send("/LS/Executor/"+page+"/"+col+"/"+row+"", 0);
	} else {
		local.send("/LS/Executor/"+page+"/"+col+"/"+row+"", action);
	}
}

function ExecutorLine(line) { // line 1-6
	local.send("/LS/ExecutorLine/"+line+"", 1);
	local.send("/LS/ExecutorLine/"+line+"", 0);
}

function Sync() {
	local.send("/LS/Sync", 1);
	local.send("/LS/Sync", 0);
}

function Sync_Playbacks() {
	local.send("/LS/Sync/Playbacks", 1);
	local.send("/LS/Sync/Playbacks", 0);
}

function Sync_Executors() {
	local.send("/LS/Sync/Executors", 1);
	local.send("/LS/Sync/Executors", 0);
}

function StopAll() {
	local.send("/LS/StopAll", 1);
	local.send("/LS/StopAll", 0);
}





/*
Page Up
/LS/Page/Up 
0 = Released1 = Pressed
Page Down
/LS/Page/Down
0 = Released1 = Pressed
DBO
/LS/DBO
0 = Released1 = Pressed
Edit
/LS/Edit
0 = Released1 = Pressed
Update
/LS/Update
0 = Released1 = Pressed
Delete
/LS/Delete
0 = Released1 = Pressed
Copy
/LS/Copy
0 = Released1 = Pressed
Move
/LS/Move
0 = Released1 = Pressed
Set
/LS/Set
0 = Released1 = Pressed
Fan
/LS/Fan
0 = Released1 = Pressed
Find
/LS/Find
0 = Released1 = Pressed
Clear
/LS/Clear
0 = Released1 = Pressed
Rec
/LS/Rec
0 = Released1 = Pressed
Playback Selection
/LS/Select/PB/[x]
Playback Number From=1To=300 = Released1 = PressedTo select the Playback number 9:
/LS/Select/PB/9Playback Go
/LS/Go/PB/[x]
Playback Number From=1To=300 = Released1 = PressedTo press Go on Playback number 9: 
/LS/Go/PB/9Playback Flash
/LS/Flash/PB/[x]
Playback Number From=1To=300 = Released1 = PressedTo press Flash on Playback 9:
/LS/Flash/PB/9Playback Stop
/LS/Stop/PB/[x]
Playback Number From=1To=300 = Released1 = PressedTo press Stop on Playback 9:
/LS/Stop/PB/9Playback Prev
/LS/Prev/PB/[x]
Playback Number From=1To=300 = Released1 = PressedTo press Prev on Playback 9:
/LS/Prev/PB/9Playback Next
/LS/Next/PB/[x]
Playback Number From=1To=300 = Released1 = PressedTo press Next on Playback 3:
/LS/Next/PB/3Playback Pause
/LS/Pause/PB/[x]
Playback Number From=1To=300 = Released1 = PressedTo press Pause on Playback 1:
/LS/Pause/PB/1Playback Fader Level
/LS/Level/PB/[x]
Playback Number From=1To=30From = 0To = 255To Adjust Fader Level on PB 17:
/LS/Level/PB/17Main Playback Go
/LS/Go/Main
0 = Released1 = Pressed
Main Playback Stop
/LS/Stop/Main
0 = Released1 = Pressed
Main Playback Prev
/LS/Prev/Main
0 = Released1 = Pressed
Main Playback Next
/LS/Next/Main
0 = Released1 = Pressed
Main Playback Pause
/LS/Pause/Main
0 = Released1 = Pressed
Set GM Level
/LS/Level/GM
From = 0To = 255
Encoders
/LS/Encoder/[x]= Encoder Selected From=1To=4From = 
1To = 1To Adjust parameters using Encoder B:
/LS/Encoder/2Select Fixture
/LS/SelectFixture
0 = Released1 = Pressed
Select Group
/LS/SelectGroup
0 = Released1 = Pressed
Selection Next
/LS/SelectionNext
0 = Released1 = Pressed
Selection Prev
/LS/SelectionPrevious
0 = Released1 = Pressed

132ControlCmdElementParameterExampleIntensity
/LS/Intensity
0 = Released1 = Pressed
Position
/LS/Position
0 = Released1 = Pressed
Colour
/LS/Color
0 = Released1 = Pressed
Beam
/LS/Beam
0 = Released1 = Pressed
Advanced
/LS/Advance
0 = Released1 = Pressed
Gobo
/LS/Gobo
0 = Released1 = Pressed
Fx
/LS/Gobo
0 = Released1 = Pressed
Executor Push Mode
/LS/Executor/[x]/[y]/[z]x]= Executor Page From=1To=2[y]= Select X position From=1To=8[z]= Select Y position From=1To=60 = Released1 = PressedTo Trigger Executor Position 2
2
/LS/Executor/1/2/2Executor Toggle Mode
/LS/Executor/[x]/[y]/[z]
/LS/Executor/[x]/[y]/[z][x]= Executor Page From=1To=2[y]= Select X position From=1To=8[z]= Select Y position From=1To=60 = Released0 = Pressed
Trigger Executor Row
/LS/ExecutorLine/[x]= Row Number From=1To=60 = Released1 = Pressed
Sync All
/LS/Sync
0 = Released1 = Pressed
Sync Only Parameters
/LS/Sync/Playbacks
0 = Released1 = Pressed
Sync Only Executors
/LS/Sync/Executors
0 = Released1 = Pressed
Release All
/LS/StopAll
0 = Released1 = Presse
*/