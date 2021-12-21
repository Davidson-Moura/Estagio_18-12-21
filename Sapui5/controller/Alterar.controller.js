sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";
	return Controller.extend("estagio.controller.Alterar", {
		onInit: function (oEvent) {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("alterar").attachPatternMatched(this.alterando, this);//Forçando a atualização dos dados			
		},
		alterando: function () {

			var oRouter = this.getOwnerComponent().getRouter();
			var id= oRouter.oHashChanger.hash.replace("alterar/",'');//Peguei o id do contato

			var sUrl  = "https://www.davidson-maytel.online/api/econtatos";
            var that = this;
                        
            var aData = jQuery.ajax({
                type : "POST",
                url : sUrl,
                data:{token : "estagio",tipo : 1, argumento : id},
                dataType : "json",                
                success : function(data) {
                    var oViewModel = new sap.ui.model.json.JSONModel({
						 nome: data[0].nome,
						 id: data[0].id,
						 tel: data[0].tel,
						 ende: data[0].ende,
						 data: data[0].created_at
					});
            		that.getView().setModel(oViewModel,"view");
                  },
                error: function(data) {                
                    console.log("Erro na chamada ajax. \n"+data);
                }
            });
		},
		onPressExcluir: function(){
			var id = this.getView().byId("id").mProperties.text;

			var sUrl  = "https://www.davidson-maytel.online/api/removecontato";
            var that = this;
                        
            var aData = jQuery.ajax({
                type : "POST",
                url : sUrl,
                data:{token : "estagio",tipo : 1, argumento : id},
                dataType : "json",                
                success : function(data) {
					setTimeout(function() {
						window.location.href = "";
					}, 2000);
                  },
                error: function(data) {
                    console.log("Erro na chamada ajax. \n"+data);
                }
            });
		},

		onPressSalvar: function(){
			var nome = this.getView().byId("nome").mProperties.value;
			var tel = this.getView().byId("tel").mProperties.value;
			var ende = this.getView().byId("ende").mProperties.value;
			
		}

	});
});