sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.esr.myfirstapplication.controller.Home", {
		onInit: function () {
			console.log("I'm called in the rendering process");
		},
		
		onPress: function () {
			var input = this.getView().byId("input").getValue();
			this.getView().byId("page").setTitle(input);
			this.getView().byId("input").setValue("");
			MessageToast.show("Inputfield says: " + input);
		}
	});
});