sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("estagio.controller.Adicionar", {
		onPressAdicionar: function(){
			var nome = this.getView().byId("nome").mProperties.value;
			var tel = this.getView().byId("tel").mProperties.value;
			var ende = this.getView().byId("ende").mProperties.value;

			var sUrl  = "https://www.davidson-maytel.online/api/addcontatos";
                        
            var aData = jQuery.ajax({
                type : "POST",
                url : sUrl,
                data:{token : "estagio",nome : nome, endereco : ende,telefone:tel},
                dataType : "json",                
                success : function(data) {
                    MessageToast.show("Adicionado com sucesso!");
                    setTimeout(function() {
						window.location.href = "";
					}, 2000);
                  },
                error: function(data) {
                    MessageToast.show("Desculpe ocorreu um erro, contato Não foi adicionado.");
                    console.log("Erro na chamada ajax. \n"+data);
                }
            });
		}

	});
});