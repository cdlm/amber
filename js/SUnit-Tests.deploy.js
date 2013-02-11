smalltalk.addPackage('SUnit-Tests', {});
smalltalk.addClass('ExampleSetTest', smalltalk.TestCase, ['empty', 'full'], 'SUnit-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@full"]=_st((smalltalk.Set || Set))._with_with_((5),smalltalk.symbolFor("abc"));
return self}, self, "setUp", [], smalltalk.ExampleSetTest)}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testAdd",
smalltalk.method({
selector: "testAdd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._assert_(_st(self["@empty"])._includes_((5)));
return self}, self, "testAdd", [], smalltalk.ExampleSetTest)}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testGrow",
smalltalk.method({
selector: "testGrow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._assert_(_st(_st(self["@empty"])._size()).__eq((100)));
return self}, self, "testGrow", [], smalltalk.ExampleSetTest)}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testIllegal",
smalltalk.method({
selector: "testIllegal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) { 
})}),(smalltalk.Error || Error));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) { 
})}),(smalltalk.Error || Error));
return self}, self, "testIllegal", [], smalltalk.ExampleSetTest)}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testIncludes",
smalltalk.method({
selector: "testIncludes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._assert_(_st(self["@full"])._includes_(smalltalk.symbolFor("abc")));
return self}, self, "testIncludes", [], smalltalk.ExampleSetTest)}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testOccurrences",
smalltalk.method({
selector: "testOccurrences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._assert_(_st(_st(self["@full"])._occurrencesOf_((5))).__eq((1)));
_st(self["@full"])._add_((5));
_st(self)._assert_(_st(_st(self["@full"])._occurrencesOf_((5))).__eq((1)));
return self}, self, "testOccurrences", [], smalltalk.ExampleSetTest)}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testRemove",
smalltalk.method({
selector: "testRemove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._assert_(_st(self["@full"])._includes_(smalltalk.symbolFor("abc")));
_st(self)._deny_(_st(self["@full"])._includes_((5)));
return self}, self, "testRemove", [], smalltalk.ExampleSetTest)}
}),
smalltalk.ExampleSetTest);



smalltalk.addClass('SUnitAsyncTest', smalltalk.TestCase, ['flag'], 'SUnit-Tests');
smalltalk.addMethod(
"_fakeError",
smalltalk.method({
selector: "fakeError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
self["@flag"];
return _st(self)._error_("Intentional");
})})))._valueWithTimeout_((5));
return self}, self, "fakeError", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeErrorFailingInTearDown",
smalltalk.method({
selector: "fakeErrorFailingInTearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
})})))._valueWithTimeout_((5));
return self}, self, "fakeErrorFailingInTearDown", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeFailure",
smalltalk.method({
selector: "fakeFailure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
self["@flag"];
return _st(self)._assert_(false);
})})))._valueWithTimeout_((5));
return self}, self, "fakeFailure", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleTimeoutFailing",
smalltalk.method({
selector: "fakeMultipleTimeoutFailing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
return _st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) { 
})})))._valueWithTimeout_((10));
})})))._valueWithTimeout_((5));
return self}, self, "fakeMultipleTimeoutFailing", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleTimeoutPassing",
smalltalk.method({
selector: "fakeMultipleTimeoutPassing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
return _st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) { 
})})))._valueWithTimeout_((10));
})})))._valueWithTimeout_((5));
return self}, self, "fakeMultipleTimeoutPassing", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeTimeout",
smalltalk.method({
selector: "fakeTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
})})))._valueWithTimeout_((5));
return self}, self, "fakeTimeout", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, self, "setUp", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_sortedSelectors_",
smalltalk.method({
selector: "sortedSelectors:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(aCollection)._collect_((function(each){
return smalltalk.withContext(function($ctx2) { 
})})))._sorted();
return $1;
}, self, "sortedSelectors:", [aCollection], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, self, "tearDown", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncErrorsAndFailures",
smalltalk.method({
selector: "testAsyncErrorsAndFailures",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$ctx1.locals.suite=nil;
$ctx1.locals.runner=nil;
$ctx1.locals.result=nil;
$ctx1.locals.assertBlock=nil;
$ctx1.locals.suite=_st(["fakeError", "fakeErrorFailingInTearDown", "fakeFailure", "testPass"])._collect_((function(each){
return smalltalk.withContext(function($ctx2) { 
})}));
$ctx1.locals.runner=_st((smalltalk.TestSuiteRunner || TestSuiteRunner))._on_($ctx1.locals.suite);
_st(self)._timeout_((200));
$ctx1.locals.result=_st($ctx1.locals.runner)._result();
$ctx1.locals.assertBlock=_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
_st(self)._assert_equals_(["fakeErrorFailingInTearDown", "fakeFailure"],_st(self)._sortedSelectors_(_st($ctx1.locals.result)._failures()));
return _st(self)._finished();
})}));
$1=_st($ctx1.locals.runner)._announcer();
$2=(smalltalk.ResultAnnouncement || ResultAnnouncement);
$3=(function(ann){
return smalltalk.withContext(function($ctx2) { 
$5=(function(){
return smalltalk.withContext(function($ctx3) { 
return _st($6)._ifTrue_($ctx1.locals.assertBlock);
})});
return _st($4)._ifTrue_($5);
})});
_st($1)._on_do_($2,$3);
_st($ctx1.locals.runner)._run();
return self}, self, "testAsyncErrorsAndFailures", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncNeedsTimeout",
smalltalk.method({
selector: "testAsyncNeedsTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) { 
return smalltalk.withContext(function($ctx3) { 
})}),(smalltalk.Error || Error));
_st(self)._timeout_((0));
_st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) { 
return smalltalk.withContext(function($ctx3) { 
})}),(smalltalk.Error || Error));
_st(self)._finished();
return self}, self, "testAsyncNeedsTimeout", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testFinishedNeedsTimeout",
smalltalk.method({
selector: "testFinishedNeedsTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) { 
})}),(smalltalk.Error || Error));
_st(self)._timeout_((0));
_st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) { 
})}),(smalltalk.Error || Error));
return self}, self, "testFinishedNeedsTimeout", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testIsAsyncReturnsCorrectValues",
smalltalk.method({
selector: "testIsAsyncReturnsCorrectValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._timeout_((0));
_st(self)._assert_(_st(self)._isAsync());
_st(self)._finished();
_st(self)._deny_(_st(self)._isAsync());
return self}, self, "testIsAsyncReturnsCorrectValues", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testPass",
smalltalk.method({
selector: "testPass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
_st(self)._finished();
self["@flag"]="ok";
return self["@flag"];
})})))._valueWithTimeout_((5));
return self}, self, "testPass", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testTimeouts",
smalltalk.method({
selector: "testTimeouts",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$ctx1.locals.suite=nil;
$ctx1.locals.runner=nil;
$ctx1.locals.result=nil;
$ctx1.locals.assertBlock=nil;
$ctx1.locals.suite=_st(["fakeTimeout", "fakeMultipleTimeoutFailing", "fakeMultipleTimeoutPassing", "testPass"])._collect_((function(each){
return smalltalk.withContext(function($ctx2) { 
})}));
$ctx1.locals.runner=_st((smalltalk.TestSuiteRunner || TestSuiteRunner))._on_($ctx1.locals.suite);
_st(self)._timeout_((200));
$ctx1.locals.result=_st($ctx1.locals.runner)._result();
$ctx1.locals.assertBlock=_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
_st(self)._assert_equals_(["fakeMultipleTimeoutFailing", "fakeTimeout"],_st(self)._sortedSelectors_(_st($ctx1.locals.result)._failures()));
return _st(self)._finished();
})}));
$1=_st($ctx1.locals.runner)._announcer();
$2=(smalltalk.ResultAnnouncement || ResultAnnouncement);
$3=(function(ann){
return smalltalk.withContext(function($ctx2) { 
$5=(function(){
return smalltalk.withContext(function($ctx3) { 
return _st($6)._ifTrue_($ctx1.locals.assertBlock);
})});
return _st($4)._ifTrue_($5);
})});
_st($1)._on_do_($2,$3);
_st($ctx1.locals.runner)._run();
return self}, self, "testTimeouts", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testTwoAsyncPassesWithFinishedOnlyOneIsRun",
smalltalk.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@flag"]="bad";
_st(self)._timeout_((10));
$ctx1.locals.x=(0);
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
self["@flag"]="ok";
self["@flag"];
$ctx1.locals.x=_st($ctx1.locals.x).__plus((1));
$ctx1.locals.x;
return _st(self)._assert_equals_((1),$ctx1.locals.x);
})})))._valueWithTimeout_((0));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { 
self["@flag"]="ok";
self["@flag"];
$ctx1.locals.x=_st($ctx1.locals.x).__plus((1));
$ctx1.locals.x;
return _st(self)._assert_equals_((1),$ctx1.locals.x);
})})))._valueWithTimeout_((0));
return self}, self, "testTwoAsyncPassesWithFinishedOnlyOneIsRun", [], smalltalk.SUnitAsyncTest)}
}),
smalltalk.SUnitAsyncTest);


