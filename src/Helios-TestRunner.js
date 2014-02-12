define("amber_core/Helios-TestRunner", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Helios-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-TestRunner');
smalltalk.packages["Helios-TestRunner"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLTestPackagesWidget', globals.HLWidget, [], 'Helios-TestRunner');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.HLTestPackagesWidget.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" packages");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.HLTestPackagesWidget)});},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' packages'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.HLTestPackagesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
protocol: 'rendering',
fn: function () {
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._packages())._first_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},globals.HLTestPackagesWidget)});},
args: [],
source: "packages\x0a\x09^ Smalltalk packages first: 3",
messageSends: ["first:", "packages"],
referencedClasses: ["Smalltalk"]
}),
globals.HLTestPackagesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._packages())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
return self._renderPackage_on_(each,html);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLTestPackagesWidget)});},
args: ["html"],
source: "renderContentOn: html\x0a\x09html ul with: [\x0a\x09\x09self packages do: [ :each |\x0a\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09self renderPackage: each on: html ]]]",
messageSends: ["with:", "ul", "do:", "packages", "li", "renderPackage:on:"],
referencedClasses: []
}),
globals.HLTestPackagesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPackage:on:",
protocol: 'rendering',
fn: function (aPackage, html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._input())._type_("checkbox");
_st(html)._with_(_st(aPackage)._name());
return self}, function($ctx1) {$ctx1.fill(self,"renderPackage:on:",{aPackage:aPackage,html:html},globals.HLTestPackagesWidget)});},
args: ["aPackage", "html"],
source: "renderPackage: aPackage on: html\x0a\x09html input type: 'checkbox'.\x0a\x09html with: aPackage name",
messageSends: ["type:", "input", "with:", "name"],
referencedClasses: []
}),
globals.HLTestPackagesWidget);



smalltalk.addClass('HLTestResultsWidget', globals.HLWidget, [], 'Helios-TestRunner');


smalltalk.addClass('HLTestRunner', globals.HLWidget, ['packagesListWidget', 'resultsWidget'], 'Helios-TestRunner');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.HLTestRunner.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" hl_testrunner");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.HLTestRunner)});},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' hl_testrunner'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.HLTestRunner);

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
_st(html)._with_(_st($HLContainer())._with_(_st($HLVerticalSplitter())._with_with_(self._packagesListWidget(),self._resultsWidget())));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLTestRunner)});},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer\x0a\x09\x09with: (HLVerticalSplitter\x0a\x09\x09\x09with: self packagesListWidget\x0a\x09\x09\x09with: self resultsWidget))",
messageSends: ["with:", "with:with:", "packagesListWidget", "resultsWidget"],
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
