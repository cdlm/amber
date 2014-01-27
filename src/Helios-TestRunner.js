define("amber_core/Helios-TestRunner", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Helios-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-TestRunner');
smalltalk.packages["Helios-TestRunner"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLTestPackagesWidget', globals.HLWidget, [], 'Helios-TestRunner');


smalltalk.addClass('HLTestResultsWidget', globals.HLWidget, [], 'Helios-TestRunner');


smalltalk.addClass('HLTestRunner', globals.HLWidget, ['packagesListWidget', 'resultsWidget'], 'Helios-TestRunner');
smalltalk.addMethod(
smalltalk.method({
selector: "packagesListWidget",
protocol: 'widgets',
fn: function () {
var self=this;
function $HLTestPackagesWidget(){return globals.HLTestPackagesWidget||(typeof HLTestPackagesWidget=="undefined"?nil:HLTestPackagesWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@packagesListWidget"];
if(($receiver = $2) == nil || $receiver == null){
self["@packagesListWidget"]=_st($HLTestPackagesWidget())._new();
$1=self["@packagesListWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{},globals.HLTestRunner)});},
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [ packagesListWidget := HLTestPackagesWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLTestPackagesWidget"]
}),
globals.HLTestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
function $HLContainer(){return globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLVerticalSplitter(){return globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._packagesListWidget();
$ctx1.sendIdx["packagesListWidget"]=1;
$2=_st($HLVerticalSplitter())._with_with_($3,self._resultsWidget());
$1=_st($HLContainer())._with_($2);
_st(html)._with_($1);
$ctx1.sendIdx["with:"]=1;
_st(self._packagesListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLTestRunner)});},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer\x0a\x09\x09with: (HLVerticalSplitter\x0a\x09\x09\x09with: self packagesListWidget\x0a\x09\x09\x09with: self resultsWidget)).\x0a\x0a\x09self packagesListWidget focus",
messageSends: ["with:", "with:with:", "packagesListWidget", "resultsWidget", "focus"],
referencedClasses: ["HLContainer", "HLVerticalSplitter"]
}),
globals.HLTestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "resultsWidget",
protocol: 'widgets',
fn: function () {
var self=this;
function $HLTestResultsWidget(){return globals.HLTestResultsWidget||(typeof HLTestResultsWidget=="undefined"?nil:HLTestResultsWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@resultsWidget"];
if(($receiver = $2) == nil || $receiver == null){
self["@resultsWidget"]=_st($HLTestResultsWidget())._new();
$1=self["@resultsWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"resultsWidget",{},globals.HLTestRunner)});},
args: [],
source: "resultsWidget\x0a\x09^ resultsWidget ifNil: [ resultsWidget := HLTestResultsWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLTestResultsWidget"]
}),
globals.HLTestRunner);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function () {
var self=this;
return true;
},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLTestRunner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function () {
var self=this;
return "testrunner";
},
args: [],
source: "tabClass\x0a\x09^ 'testrunner'",
messageSends: [],
referencedClasses: []
}),
globals.HLTestRunner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function () {
var self=this;
return "Test Runner";
},
args: [],
source: "tabLabel\x0a\x09^ 'Test Runner'",
messageSends: [],
referencedClasses: []
}),
globals.HLTestRunner.klass);


smalltalk.addClass('HLTestRunnerModel', globals.HLToolModel, [], 'Helios-TestRunner');

});
