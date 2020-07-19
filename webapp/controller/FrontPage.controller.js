sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function (Controller, Device) {
	"use strict";

	return Controller.extend("gdsd.OutPatientCareClaims.controller.FrontPage", {
		onInit: function () {
			this._mViewSettingsDialogs = {};

		},
		createFormDialog: function (sDialogFragmentName) {

			// https://stackoverflow.com/questions/55667673/how-to-remove-duplicates-and-display-only-unique-values-in-viewsettingsitem
			var oDialog = this._mViewSettingsDialogs[sDialogFragmentName];
			if (!oDialog) {
				oDialog = sap.ui.xmlfragment(sDialogFragmentName, this);
				this._mViewSettingsDialogs[sDialogFragmentName] = oDialog;

				if (Device.system.desktop) {
					oDialog.addStyleClass("sapUiSizeCompact");
				}
			}
			return oDialog;
		},

		handleClaimButtonPressed: function () {
			this.createFormDialog("gdsd.OutPatientCareClaims.Fragments.claimform").open();
		},

		handleStaffButtonPressed: function () {
			this.createFormDialog("gdsd.OutPatientCareClaims.Fragments.summaryofstaff").open();
		},
		onCancel: function () {
			//Cater for the age group selected 
			var oDialogKey,
				oDialogValue;

			for (oDialogKey in this._mViewSettingsDialogs) {
				oDialogValue = this._mViewSettingsDialogs[oDialogKey];

				if (oDialogValue) {
					oDialogValue.close();
					// oDialogValue = null;
				}
			}
		},

		onAddClaimsItem: function (oEvent) {
			var oTable = this.byId("tblClaims");
			var columnListItemNewLine = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: sap.ui.getCore().byId("cfSurname").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("cfID").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("cfAge").getValue()
					})
				]
			});
			oTable.addItem(columnListItemNewLine);
			this.onCancel();
		},

		onAddStaffSummaryItem: function (oEvent) {
			var oTable = this.byId("tblStaffSummary");
			var columnListItemNewLine = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: sap.ui.getCore().byId("ssSurname").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("ssID").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("ssGender").getValue()
					})
				]
			});
			oTable.addItem(columnListItemNewLine);
			this.onCancel();
		}

	});
});