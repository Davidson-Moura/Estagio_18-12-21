sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("estagio.controller.App", {
      irSite : function () {
          let sMsg = "https://www.davidson-maytel.online/";
          window.open(sMsg,"_blank")
          MessageToast.show("Estamos redirecionando para meu site");
       }
    });
 });
 