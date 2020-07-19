/*global QUnit*/

sap.ui.define([
	"gdsd/OutPatientCareClaims/controller/FrontPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FrontPage Controller");

	QUnit.test("I should test the FrontPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});