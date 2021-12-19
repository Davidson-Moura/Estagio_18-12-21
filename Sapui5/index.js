sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "estagio",
		settings : {
			id : "estagio"
		},
		async: true
	}).placeAt("content");
});