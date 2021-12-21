sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("estagio.controller.Principal", {
        obterContatosDaAgenda: function(){
         
            var sUrl  = "https://www.davidson-maytel.online/api/tcontatos";
            var that = this;
                        
            var aData = jQuery.ajax({
                type : "POST",
                url : sUrl,
                data:{token : "estagio"},
                dataType : "json",                
                success : function(data) {
                    var oData = {
                     contatos : data
                     }
                     var oModel = new  sap.ui.model.json.JSONModel(oData);
                     that.getView().setModel(oModel,"contatos");
         
                  },
                error: function(data) {                
                    console.log("Erro na chamada ajax. \n"+data);
                }
            });
         },
        onPressContatos: function(){
            var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("todoscontatos").attachPatternMatched(this.obterContatosDaAgenda, this);//Forçando a atualização dos dados	
			oRouter.navTo("todoscontatos");
        },
        onPressAdicionar: function(){
            var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("adicionar");
        }
    });
 });