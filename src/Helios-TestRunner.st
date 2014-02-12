Smalltalk createPackage: 'Helios-TestRunner'!
HLWidget subclass: #HLTestPackagesWidget
	instanceVariableNames: ''
	package: 'Helios-TestRunner'!

!HLTestPackagesWidget methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' packages'
! !

!HLTestPackagesWidget methodsFor: 'rendering'!

packages
	^ Smalltalk packages first: 3
!

renderContentOn: html
	html ul with: [
		self packages do: [ :each |
			html li with: [
				self renderPackage: each on: html ]]]
!

renderPackage: aPackage on: html
	html input type: 'checkbox'.
	html with: aPackage name
! !

HLWidget subclass: #HLTestResultsWidget
	instanceVariableNames: ''
	package: 'Helios-TestRunner'!

HLWidget subclass: #HLTestRunner
	instanceVariableNames: 'packagesListWidget resultsWidget'
	package: 'Helios-TestRunner'!

!HLTestRunner methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' hl_testrunner'
! !

!HLTestRunner methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLContainer
		with: (HLVerticalSplitter
			with: self packagesListWidget
			with: self resultsWidget))
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

