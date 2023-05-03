sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",

], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
    onShowHello: function () {

      // read msg from i18n model
      var oBundle = this.getView().getModel("i18n").getResourceBundle();
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      var sMsg = oBundle.getText("helloMsg", [sRecipient]);


      MessageToast.show(sMsg, {
        duration: 3000,                  // default
        width: "15em",                   // default
        my: "center center",             // default
        at: "center center",             // default
        of: window,                      // default
        offset: "0 0",                   // default
        collision: "fit fit",            // default
        onClose: null,                   // default
        autoClose: true,                 // default
        animationTimingFunction: "ease", // default
        animationDuration: 1000,         // default
        closeOnBrowserNavigation: true   // default
      });
    }
  });
});

