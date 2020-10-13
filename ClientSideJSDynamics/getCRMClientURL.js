function GetTheCRMClientUrl(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get the Client Url
    var clientUrl = formContext.context.getClientUrl();
    Xrm.Utility.alertDialog(clientUrl);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }