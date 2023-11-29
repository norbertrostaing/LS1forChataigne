
var myParameters = {};

//========================================================================
//							 INIT FUNCTION
//========================================================================
function init() {

	SyncAll = local.values.addTrigger("Click to Sync All", "Request all the Values from the Console !!" , false);

// CREATE CONTAINERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	playbacks = local.values.addContainer("Playback Faders");
	playbacks.setCollapsed(true);
//	playbacks.addTrigger("Click to Sync Playbacks", "" , false);
	for (var n = 1; n<= 30; n++) {
		playbacks.addFloatParameter("Playback "+n, "","", "0","255");  }
// Executors Coulomn Page 1		
	execbutt = local.values.addContainer("Executors Page 1");
	execbutt.setCollapsed(true);
//	execbutt.addTrigger("Click to Sync Executors", "" , false);
	for (var n = 1; n<= 8; n++) {
	execbutt.addStringParameter("Col "+n, "", ""); }
// Executors Coulomn Page 2		
	execbutt = local.values.addContainer("Executors Page 2");
	execbutt.setCollapsed(true);
//	execbutt.addTrigger("Click to Sync Executors", "" , false);
	for (var n = 1; n<= 8; n++) {
	execbutt.addStringParameter("Col "+n, "", ""); }
// Executors Bouttons Page 1
		
	executors = local.values.addContainer("Executors Buttons Page 1");
	executors.setCollapsed(true);
//	executors.addTrigger("Click to Sync Executors", "" , false);	
	for (var i = 1; i<= 6; i++) {
		executors.addStringParameter("Row "+i, "", "Row "+i);
	for (var n = 1; n<= 8; n++) {		
	var butt = "Row "+i+" _ Button "+n ; 
		executors.addBoolParameter(butt, "", false);  } } 
// Executors Bouttons Page 1
//	executors.addTrigger("Click to Sync Executors", "" , false);	
	executors = local.values.addContainer("Executors Buttons Page 2");
	executors.setCollapsed(true);
	for (var i = 1; i<= 6; i++) {
		executors.addStringParameter("Row "+i, "", "Row "+i);
	for (var n = 1; n<= 8; n++) {		
	var butt = "Row "+i+" _ Button "+n ; 
		executors.addBoolParameter(butt, "", false);  } }  
				
}

//========================================================================
//							 VALUE CHANGE EVENTS
//========================================================================
function moduleValueChanged(value) { 

// >>>>>>>>>>>>>>> SYNC FROM LIGHTSHARK <<<<<<<<<<<<<
	if (value.name == "clickToSyncAll"){
	local.send("/LS/Sync", 0.0); }
	
	if (value.name == "clickToSyncPlaybacks"){
	local.send("/LS/Sync/Playbacks", 0.0); }
	
	if (value.name == "clickToSyncExecutors"){
	local.send("/LS/Sync/Executors", 0.0);
	for (var n = 1; n<= 8; n++) {
	local.values.executorsPage1.getChild("Col"+n).set("");
	local.values.executorsPage2.getChild("Col"+n).set(""); }  }
	
}

//========================================================================
//							 OSC CHANGE EVENTS
//========================================================================
function oscEvent(address, args) {

//Playback Faders
	for (var n = 1; n<= 30; n++) {
	if (address == "/LS/Level/PB/"+n){
	local.values.playbackFaders.getChild('playback'+n).set(args[0]); } }
	
//Executor Buttons Page 1	
	for (var i = 1; i<= 6; i++) {	
	for (var n = 1; n<= 8; n++) {			
	var butt = "row"+i+"_button"+n ;
	if (address == "/LS/Executor/1/"+n+"/"+i){	
	local.values.executorsButtonsPage1.getChild(butt).set(args[0]);
	if (args[0]== true){ var txt = "Button N°"+i+" = ON" ;
	local.values.executorsPage1.getChild("Col"+n).set(txt); } } 
	} }
	
//Executor Buttonss Page 2	
	for (var i = 1; i<= 6; i++) {
	for (var n = 1; n<= 8; n++) {		
	var butt = "row"+i+"_button"+n ;
	if (address == "/LS/Executor/2/"+n+"/"+i){
	local.values.executorsButtonsPage2.getChild(butt).set(args[0]);
	if (args[0]== true){ var txt = "Button N°"+i+" = ON" ;
	local.values.executorsPage2.getChild("Col"+n).set(txt); } } } }
}

//========================================================================
//					KEEP ALIVE
//========================================================================


function update(deltaTime) {
	var now = util.getTime();
	if(now > TSSendAlive) {
		TSSendAlive = now + 5;
		keepAlive(); }
}

function keepAlive() {
	local.send("/LS/Sync",0.0);
}

//========================================================================
//					COMMON FUNCTIONS
//========================================================================

function Page_Up() {
	local.send("/LS/Page/Up", 0.0);
}

function Page_Down() {
	local.send("/LS/Page/Down", 0.0);
}

function DBO(val) {
	local.send("/LS/DBO", val);
}

function Edit() {
	local.send("/LS/Edit", 0.0);
}

function Update() {
	local.send("/LS/Update", 0.0);
}

function Delete() {
	local.send("/LS/Delete", 0.0);
}

function Copy() {
	local.send("/LS/Copy", 0.0);
}

function Move() {
	local.send("/LS/Move", 0.0);
}

function Set() {
	local.send("/LS/Set", 0.0);
}

function Fan() {
	local.send("/LS/Fan", 0.0);
}

function Find() {

	local.send("/LS/Find", 0.0);
}

function Clear() {
	local.send("/LS/Clear", 0.0);
}

function Rec() {
	local.send("/LS/Rec", 0.0);
}

//========================================================================
//					PLAYBACK FUNCTIONS
//========================================================================

function Select_PB(n) { // playBack 1-30

	local.send("/LS/Select/PB/"+n+"", 0.0);
}

function Go_PB(n) {// playBack 1-30

	local.send("/LS/Go/PB/"+n+"", 0.0);
}

function Tap_PB(n) {// playBack 1-30
	local.send("/LS/Tap/PB/"+n+"", 0.0);
}

function Flash_PB(n, val) {// playBack 1-30
	local.send("/LS/Flash/PB/"+n+"", val);
}

function Stop_PB(n) {// playBack 1-30
	local.send("/LS/Stop/PB/"+n+"", 0);
}

function Prev_PB(n) {// playBack 1-30
	local.send("/LS/Prev/PB/"+n+"", 0);
}

function Next_PB(n) {// playBack 1-30
	local.send("/LS/Next/PB/"+n+"", 0);
}

function Pause_PB(n) {// playBack 1-30
	local.send("/LS/Pause/PB/"+n+"", 0);
}

function Level_PB(n, val) { // playBack 1-30
	val = val*255;
	local.send("/LS/Level/PB/"+n+"", val);
}

//========================================================================
//					MAIN FUNCTIONS
//========================================================================

function Go_Main() {
	local.send("/LS/Go/Main", 0.0);
}

function Stop_Main() {
	local.send("/LS/Stop/Main", 0.0);
}

function Prev_Main() {
	local.send("/LS/Prev/Main", 0.0);
}

function Next_Main() {
	local.send("/LS/Next/Main", 0.0);
}

function Pause_Main() {
	local.send("/LS/Pause/Main", 0.0);
}

function Level_GM(val ) {
	val = val*255;
	local.send("/LS/Level/GM", val);
}

function Encoder(n, v) { // encoder 1-4, v = -1 || 1
	local.send("/LS/Encoder/"+n+"");
}

//========================================================================
//					ACTIONS FUNCTIONS
//========================================================================

function SelectFixture() {
	local.send("/LS/SelectFixture", 0.0);
}

function SelectGroup() {
	local.send("/LS/SelectGroup", 0.0);
}

function SelectionNext() {
	local.send("/LS/SelectionNext", 0.0);
}

function SelectionPrevious() {
	local.send("/LS/SelectionPrevious", 0.0);
}

//========================================================================
//					ATTRIBUTE FUNCTIONS
//========================================================================

function Intensity() {
	local.send("/LS/Intensity", 0.0);
}

function Position() {
	local.send("/LS/Position", 0.0);
}

function Color() {
	local.send("/LS/Color", 0.0);
}

function Beam() {
	local.send("/LS/Beam", 0.0);
}

function Advance() {
	local.send("/LS/Advance", 0.0);
}

function Gobo() {
	local.send("/LS/Gobo", 0.0);
}

function Fx() {
	local.send("/LS/Fx", 0.0);
}

//========================================================================
//					CUES FUNCTIONS
//========================================================================

function Executor(page, col, row, action) { // page 1-2, col 1-8, line 1-6
	if (action == 2) {
		local.send("/LS/Executor/"+page+"/"+col+"/"+row+"", 1);
		local.send("/LS/Executor/"+page+"/"+col+"/"+row+"", 0);
	} else {
		local.send("/LS/Executor/"+page+"/"+col+"/"+row+"", action);
	}
}

function ExecutorLine(line) { // line 1-6
//	local.send("/LS/ExecutorLine/"+line+"", 1);
	local.send("/LS/ExecutorLine/"+line+"", 0);
}

function Sync() {
	local.send("/LS/Sync", 0.0);
}

function Sync_Playbacks() {
	local.send("/LS/Sync/Playbacks", 0.0);
}

function Sync_Executors() {
	local.send("/LS/Sync/Executors", 0.0);
}

function StopAll() {
	local.send("/LS/StopAll", 0.0);
}

function Tap() {
	local.send("/LS/Tap", 0.0);
}

//========================================================================
//					NEW FUNCTIONS
//========================================================================

function TapPBSpeed(pb) {
	local.send("/LS/Tap/PB/"+pb, 0.0);
}

function PlaybackChaseSpeed(pb, val) {
	local.send("/LS/ChaseValue/PB/"+pb, val);
}

function ResetSmChase() {
	local.send("/LS/Reset/SmChase/", 0.0);
}

function ChaseSpeed(val) {
	var val = val/200*255 ;
	local.send("/LS/Level/SmChase/", val);
}

function ResetSmSize() {
	local.send("/LS/Reset/SmSize/", 0.0);
}

function FxSize(val) {
	var val = val/200*255 ;
	local.send("/LS/Level/SmSize/", val);
}

function ResetSmSpeed() {
	local.send("/LS/Reset/SmSpeed/", 0.0);
}

function TapFxSpeed() {
	local.send("/LS/FxTap", 0.0);
}

function FxSpeed(val) {
	var val = val/200*255 ;
	local.send("/LS/Level/SmSpeed/", val);
}

function GotoCue(pb, cue, decim) {
	if (decim <10) {decim = decim*10 ;}
	var cue = cue*100 + decim ;
	local.send("/LS/GotoCue/PB/"+pb, cue);
}

function PreloadCue(pb, cue, decim) {
	if (decim <10) {decim = decim*10 ;}
	var cue = cue*100 + decim ;
	local.send("/LS/PreloadCue/PB/"+pb, cue);
}
