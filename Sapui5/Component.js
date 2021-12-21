sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("estagio.Component", {
      metadata : {
         interfaces: ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"
      },
       init : function () {
          UIComponent.prototype.init.apply(this, arguments);
         
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
                     var oModel = new JSONModel(oData);
                     that.setModel(oModel);
         
                  },
                error: function(data) {                
                    console.log("Erro na chamada ajax. \n"+data);
                }
            });

         

          
 
          // set i18n model
          var i18nModel = new ResourceModel({
             bundleName: "estagio.i18n.i18n"
          });
          this.setModel(i18nModel, "i18n");

          this.getRouter().initialize();
       }
    });
 });
 