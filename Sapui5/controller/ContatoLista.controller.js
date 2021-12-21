sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",

	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("estagio.controller.ContatoLista", {
		
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("alterar", {
				contatosPath: window.encodeURIComponent(parseInt(oItem.mProperties.numberUnit.replace('Id: ','')))//Atribuindo a rota o id do contato
			});
		},
		irSite : function () {
			let sMsg = "https://www.davidson-maytel.online/";
			window.open(sMsg,"_blank");
		 },
		onFilterInvoices : function (oEvent) {

			
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("nome", FilterOperator.Contains, sQuery));
			}

			var oList = this.byId("Lista");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});

});