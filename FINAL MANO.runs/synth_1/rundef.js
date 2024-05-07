//
// Vivado(TM)
// rundef.js: a Vivado-generated Runs Script for WSH 5.1/5.6
// Copyright 1986-2018 Xilinx, Inc. All Rights Reserved.
//

var WshShell = new ActiveXObject( "WScript.Shell" );
var ProcEnv = WshShell.Environment( "Process" );
var PathVal = ProcEnv("PATH");
if ( PathVal.length == 0 ) {
  PathVal = "C:/Users/alikh/OneDrive/Desktop/SDK/2018.2/bin;C:/Users/alikh/OneDrive/Desktop/Vivado/2018.2/ids_lite/ISE/bin/nt64;C:/Users/alikh/OneDrive/Desktop/Vivado/2018.2/ids_lite/ISE/lib/nt64;C:/Users/alikh/OneDrive/Desktop/Vivado/2018.2/bin;";
} else {
  PathVal = "C:/Users/alikh/OneDrive/Desktop/SDK/2018.2/bin;C:/Users/alikh/OneDrive/Desktop/Vivado/2018.2/ids_lite/ISE/bin/nt64;C:/Users/alikh/OneDrive/Desktop/Vivado/2018.2/ids_lite/ISE/lib/nt64;C:/Users/alikh/OneDrive/Desktop/Vivado/2018.2/bin;" + PathVal;
}

ProcEnv("PATH") = PathVal;

var RDScrFP = WScript.ScriptFullName;
var RDScrN = WScript.ScriptName;
var RDScrDir = RDScrFP.substr( 0, RDScrFP.length - RDScrN.length - 1 );
var ISEJScriptLib = RDScrDir + "/ISEWrap.js";
eval( EAInclude(ISEJScriptLib) );


ISEStep( "vivado",
         "-log Mainn.vds -m64 -product Vivado -mode batch -messageDb vivado.pb -notrace -source Mainn.tcl" );



function EAInclude( EAInclFilename ) {
  var EAFso = new ActiveXObject( "Scripting.FileSystemObject" );
  var EAInclFile = EAFso.OpenTextFile( EAInclFilename );
  var EAIFContents = EAInclFile.ReadAll();
  EAInclFile.Close();
  return EAIFContents;
}
