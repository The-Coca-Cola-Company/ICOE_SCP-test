/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tst/coca-cola/com/MyProject/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});