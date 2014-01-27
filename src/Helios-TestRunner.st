Smalltalk createPackage: 'Helios-TestRunner'!
HLWidget subclass: #HLTestPackagesWidget
	instanceVariableNames: ''
	package: 'Helios-TestRunner'!

HLWidget subclass: #HLTestResultsWidget
	instanceVariableNames: ''
	package: 'Helios-TestRunner'!

HLWidget subclass: #HLTestRunner
	instanceVariableNames: 'packagesListWidget resultsWidget'
	package: 'Helios-TestRunner'!

!HLTestRunner methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLContainer
		with: (HLVerticalSplitter
			with: self packagesListWidget
			with: self resultsWidget)).

	self packagesListWidget focus
! !

!HLTestRunner methodsFor: 'widgets'!

packagesListWidget
	^ packagesListWidget ifNil: [ packagesListWidget := HLTestPackagesWidget new ]
!

resultsWidget
	^ resultsWidget ifNil: [ resultsWidget := HLTestResultsWidget new ]
! !

!HLTestRunner class methodsFor: 'accessing'!

tabClass
	^ 'testrunner'
!

tabLabel
	^ 'Test Runner'
! !

!HLTestRunner class methodsFor: 'testing'!

canBeOpenAsTab
	^ true
! !

HLToolModel subclass: #HLTestRunnerModel
	instanceVariableNames: ''
	package: 'Helios-TestRunner'!

