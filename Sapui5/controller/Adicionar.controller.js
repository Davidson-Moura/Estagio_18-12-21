sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
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
					console.log("Bem sucedida");
                  },
                error: function(data) {
                    console.log("Erro na chamada ajax. \n"+data);
                }
            });
		}

	});
});